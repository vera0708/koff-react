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
                    'Authorization': `Bearer ${token}`,
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
                    'Authorization': `Bearer ${token}`,
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
                state.products = [];
                state.totalPrice = 0;
                state.totalCount = 0;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loadingFetch = false;
                state.error = action.payload;
            })
            .addCase(addProductToCart.pending, (state) => {
                state.loadingAdd = true;
            })
            .addCase(addProductToCart.fulfilled, (state, action) => {
                console.log('addToCart action.payload:', action.payload);
                state.loadingAdd = false;
                //     state.loadingUpdate = true;
                //     state.loadingRemove = true;
            })
            .addCase(addProductToCart.rejected, (state, action) => {
                state.loadingAdd = false;
                state.error = action.payload;
            })
    },
});

export default cartSlice.reducer;