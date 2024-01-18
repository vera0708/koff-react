// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Thumbs } from 'swiper/modules';
// import { useState } from 'react';
import { Container } from '../../views/Container/Container';
import 'swiper/css';
import s from './Card.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/product.slice';
import { Slider } from '../Slider/Slider';


export const Card = () => {
    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();

    const {
        data,
        loading,
        error,
    } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

    if (loading) return <div>Загрузка товаров ...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    console.log(data);

    return (
        <section className={s.card}>
            <Container className={s.container}>
                <h2 className={s.title}>{data.name}</h2>
                <Slider data={data} />
                <div className={s.info}>
                    <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
                    <p className={s.article}>арт. {data.article}</p>
                    <div className={s.characteristics}>
                        <h3 className={s.characteristicsTitle}> Общие характеристики</h3>
                        <table className={s.table}>
                            <tbody>
                                {data.characteristics.map((item, i) => (
                                    <tr className={s.row} key={i}>
                                        <td className={s.field}>{item[0]}</td>
                                        <td className={s.value}>{item[1]}</td>
                                    </tr>
                                ))}
                                {                                /*<tr className={s.table__row}>
                                    <td className={s.table__field}>Коллекция</td>
                                    <td className={s.table__value}>Мирсаж</td>
                                </tr>
                                <tr className={s.table__row}>
                                    <td className={s.table__field}>Производитель</td>
                                    <td className={s.table__value}>Россия</td>
                                </tr>
                                <tr className={s.table__row}>
                                    <td className={s.table__field}>Гарантия</td>
                                    <td className={s.table__value}>18 мес.</td>
                                </tr>
                                <tr className={s.table__row}>
                                    <td className={s.table__field}>Срок службы</td>
                                    <td className={s.table__value}>5 лет</td>
                                </tr>
                                <tr className={s.table__row}>
                                    <td className={s.table__field}>Цвет</td>
                                    <td className={s.table__value}>Желтый</td>
                                </tr>
                                <tr className={s.table__row}>
                                    <td className={s.table__field}>Макс. нагрузка</td>
                                    <td className={s.table__value}>130 кг</td>
                                </tr>*/}
                            </tbody>
                        </table>
                    </div>
                    <div className={s.btns}>
                        <button className={s.btn} type="button">В корзину</button>
                        <button className={s.like} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor">
                                <path
                                    d="M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z"
                                    fill="white"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}