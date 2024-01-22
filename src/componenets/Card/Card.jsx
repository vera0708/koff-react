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
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';


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
    if (!data) return <div>Продукт не найден, попробуйте позже</div>;
    console.log(data);

    return (
        <section className={s.card}>
            {data &&
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
                                </tbody>
                            </table>
                        </div>
                        <div className={s.btns}>
                            <button className={s.btn} type="button">В корзину</button>
                            <FavoriteButton className={s.like} id={data.id} />
                        </div>
                    </div>
                </Container>
            }
        </section>
    )
}