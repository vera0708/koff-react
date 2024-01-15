import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Goods } from "../../componenets/Goods/Goods";
import { fetchCategories } from '../../store/categories/categories.slice';
import { Catalog } from '../../componenets/Catalog/Catalog';
import { fetchProducts } from '../../store/products/products.slice';

export const Main = () => {
    const dispatch = useDispatch();
    const {
        data: dataCategories,
        loading: loadingCategories,
        error: errorCategories,
    } = useSelector(state => state.categories);

    const {
        data: dataProducts,
        loading: loadingProducts,
        error: errorProducts,
    } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loadingCategories) return <div>Загрузка каталога...</div>
    if (errorCategories) return <div>Ошибка: {errorCategories}</div>
    if (loadingProducts) return <div>Загрузка товаров...</div>
    if (errorProducts) return <div>Ошибка: {errorProducts}</div>

    return (
        <main>
            <Catalog data={dataCategories} />
            <Goods data={dataProducts} />
        </main>
    )
}