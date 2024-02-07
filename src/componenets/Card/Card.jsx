// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Thumbs } from 'swiper/modules';
// import { useState } from 'react';
import { Container } from '../../views/Container/Container';
import 'swiper/css';
import s from './Card.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearProduct, fetchProduct } from '../../store/product/product.slice';
import { Slider } from '../Slider/Slider';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { AddCartButton } from '../AddCartButton/AddCartButton';


export const Card = () => {
    const { productId } = useParams();

    const dispatch = useDispatch();

    const {
        data,
        loading,
        error,
    } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productId));

        return () => {
            dispatch(clearProduct());
        }
    }, [dispatch, productId]);

    if (loading) return <div>Загрузка товаров ...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (!data) return <div>Продукт не найден, попробуйте позже</div>;
    // console.log(data);

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
                            <AddCartButton className={s.btn} id={data.id} />
                            <FavoriteButton className={s.like} id={data.id} />
                        </div>
                    </div>
                </Container>
            }
        </section>
    )
}