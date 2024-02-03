import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.accessToken;

        try {
            const response = await fetch(`${API_URL}api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (!response.ok) {
                throw new Error('Не удалось загрузить корзину товаров');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const addProductToCart = createAsyncThunk(
    'cart/addProductToCart',
    async (productData, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.accessToken;

        try {
            const response = await fetch(`${API_URL}api/cart/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Не удалось добавить товар в корзину');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const updateProductToCart = createAsyncThunk(
    'cart/updateProductToCart',
    async (productData, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.accessToken;

        try {
            const response = await fetch(`${API_URL}api/cart/products`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData),
            });

            if (!response.ok) {
                throw new Error('Не удалось обновить этот товар в корзине');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const removeProductFromCart = createAsyncThunk(
    'cart/removeProductFromCart',
    async (productId, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.auth.accessToken;

        try {
            const response = await fetch(`${API_URL}api/cart/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Не удалось удалить товар из корзины');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const initialState = {
    products: [],
    totalPrice: 0,
    totalCount: 0,
    loadingFetch: false,
    loadingAdd: false,
    loadingUpdate: false,
    loadingRemove: false,
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loadingFetch = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                console.log('fetchCart action.payload:', action.payload);
                state.loadingFetch = false;
                state.products = action.payload.products;
                state.totalPrice = action.payload.totalPrice;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loadingFetch = false;
                state.error = action.payload;
            })
            .addCase(addProductToCart.pending, (state) => {
                state.loadingAdd = true;
            })
            .addCase(addProductToCart.fulfilled, (state, action) => {
                state.loadingAdd = false;
                state.totalCount = action.payload.totalCount;
                state.products.push({ ...action.payload.product, quantity: action.payload.productCart.quantity });
                state.totalPrice = state.products.reduce(
                    (acc, item) =>
                        item.price * item.quantity + acc,
                    0,
                );
            })
            .addCase(addProductToCart.rejected, (state, action) => {
                state.loadingAdd = false;
                state.error = action.payload;
            })
            .addCase(updateProductToCart.pending, (state) => {
                state.loadingUpdate = true;
            })
            .addCase(updateProductToCart.fulfilled, (state, action) => {
                // state.totalPrice = 
                state.loadingUpdate = false;
                state.products = state.products.map((item) => {
                    if (item.id === action.payload.productCart.productId) {
                        item.quantity = action.payload.productCart.quantity
                    }
                    return item;
                });
                state.totalPrice = state.products.reduce(
                    (acc, item) =>
                        item.price * item.quantity + acc,
                    0,
                );
            })
            .addCase(updateProductToCart.rejected, (state, action) => {
                state.loadingUpdate = false;
                state.error = action.payload;
            })
            .addCase(removeProductFromCart.pending, (state) => {
                state.loadingRemove = true;
            })
            .addCase(removeProductFromCart.fulfilled, (state, action) => {
                state.loadingRemove = false;
                state.products = state.products.filter(
                    item => item.id !== action.payload.id
                );
                state.totalCount = action.payload.totalCount;
                state.totalPrice = state.products.reduce(
                    (acc, item) =>
                        item.price * item.quantity + acc,
                    0,
                );
            })
            .addCase(removeProductFromCart.rejected, (state, action) => {
                state.loadingRemove = false;
                state.error = action.payload;
            })
    },
});

export default cartSlice.reducer;