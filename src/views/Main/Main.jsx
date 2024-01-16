import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Goods } from "../../componenets/Goods/Goods";
import { fetchCategories } from '../../store/categories/categories.slice';
import { Catalog } from '../../componenets/Catalog/Catalog';
import { fetchProducts } from '../../store/products/products.slice';
import s from './Main.module.scss';

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
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loadingCategories || loadingProducts) return <div>Загрузка данных ...</div>
    if (errorCategories) return <div>Ошибка: {errorCategories}</div>
    if (errorProducts) return <div>Ошибка: {errorProducts}</div>

    return (
        <main className={s.main}>
            <Catalog data={dataCategories} />
            <Goods data={dataProducts} />
        </main>
    )
}