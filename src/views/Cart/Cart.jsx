import { CartForm } from '../../componenets/CartForm/CartForm';
import { CartPlace } from '../../componenets/CartPlace/CartPlace';
import { CartProducts } from '../../componenets/CartProducts/CartProducts';
import { Container } from '../Container/Container';
import s from './Cart.module.scss';

export const Cart = () => {

    return (
        <section className={s.cart}>
            <Container className={s.container}>
                <h2 className={s.title}>Корзина</h2>
                <CartProducts />
                <CartPlace />
                <CartForm />
            </Container>
        </section>)
}