import { useSelector } from 'react-redux';
import { CartForm } from '../../componenets/CartForm/CartForm';
import { CartPlace } from '../../componenets/CartPlace/CartPlace';
import { CartProducts } from '../../componenets/CartProducts/CartProducts';
import { Container } from '../Container/Container';
import s from './Cart.module.scss';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { products, totalPrice, totalCount } = useSelector(
        state => state.cart,
    );

    if (!totalCount) {
        return (
            <section className={s.cart}>
                <Container className={s.container}>
                    <h2 className={s.title}>Корзина пуста</h2>
                    <Link className={s.link} to='/'>
                        <span className={s.text}>Перейти к выбору товаров</span>
                    </Link>
                </Container>
            </section>)
    }

    return (
        <section className={s.cart}>
            <Container className={s.container}>
                <h2 className={s.title}>Корзина</h2>
                <CartProducts products={products} />
                <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
                <CartForm />
            </Container>
        </section>)
}