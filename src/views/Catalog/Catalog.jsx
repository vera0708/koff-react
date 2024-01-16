import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import s from './Catalog.module.scss';
import { fetchCategories } from '../../store/categories/categories.slice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Catalog = () => {
    const dispatch = useDispatch();

    const {
        data,
        loading: loadingCategories,
        error: errorCategories,
    } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (loadingCategories) return <div>Загрузка каталога ...</div>
    if (errorCategories) return <div>Ошибка: {errorCategories}</div>

    return (
        <nav className={s.catalog}>
            <Container className={s.container}>
                <ul className={s.list}>
                    {data.map((item, i) => (
                        <li key={i}>
                            <Link className={s.link}
                                to={`/category?slug=${item}`}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    )
}