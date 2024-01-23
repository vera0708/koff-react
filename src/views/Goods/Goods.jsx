import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/products.slice';
import s from './Goods.module.scss';
import { Container } from '../Container/Container';
import { CardItem } from '../../componenets/CardItem/CardItem';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Pagination } from '../../componenets/Pagination/Pagination';

export const Goods = () => {
    const dispatch = useDispatch();
    const {
        data,
        loading: loadingProducts,
        error: errorProducts,
        pagination,
    } = useSelector(state => state.products);
    const [searchParam] = useSearchParams();
    const { favoriteList } = useSelector((state) => state.favorite);
    const { pathname } = useLocation();

    const category = searchParam.get('category');
    const q = searchParam.get('q');
    const page = searchParam.get('page');

    useEffect(() => {
        if (!pathname !== '/favorite') {
            dispatch(fetchProducts({ category, q, page }));
        }
    }, [dispatch, category, q, pathname, page]);

    useEffect(() => {
        if (!pathname === '/favorite') {
            dispatch(fetchProducts({ list: favoriteList.join(','), page }));
        }
    }, [dispatch, favoriteList, pathname, page]);

    if (loadingProducts) return <div>Загрузка товаров ...</div>
    if (errorProducts) return <div>Ошибка: {errorProducts}</div>

    return (
        <section className={s.goods} >
            <Container className={s.container}>
                <h2 className={`${s.title} visually-hidden`}>
                    Список товаров</h2>
                {data.length ? (
                    <>
                        <ul className={s.list} >
                            {data.map((item) => (
                                <li key={item.id}>
                                    <CardItem {...item} />
                                </li>
                            ))}
                        </ul>
                        {pagination ? <Pagination pagination={pagination} /> : 'Здесь должна быть пагинация'}
                    </>
                ) : (
                    <p>По вашему запросу товаров не найдено</p>)
                }
            </Container>
        </section>
    )
}