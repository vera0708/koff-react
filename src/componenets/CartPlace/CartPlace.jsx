import s from './CartPlace.module.scss';

export const CartPlace = () => (
    <div className={s.place}>
        <h3 className={s.subtitle}>Оформление</h3>
        <div className={s.placeInfo}>
            <p >4 товара на сумму</p>
            <p >13&nbsp;700&nbsp;₽</p>
        </div>
        <p className={s.placeDelivery}>Доставка 0&nbsp;₽</p>
        <button className={s.placeBtn}>Оформить заказ</button>
    </div>
)