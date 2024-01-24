import s from './CartProducts.module.scss';

export const CartProducts = () => {
    return (
        <ul className={s.products}>
            <li className={s.product}>
                <img className={s.img}
                    src="http://koff-api.vercel.app/img//1hb1ftgaptc4sove.jpg"
                    alt='Изображение товара' />
                <h3 className={s.titleProduct}>CartProducts</h3>
                <p className={s.price}>133&nbsp;741&nbsp;₽</p>
                <p className={s.article}>арт. 847531222511</p>
                {/* <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
                <p className={s.article}>арт. {data.article}</p> */}
                <div className={s.productControl}>
                    <button className={s.productBtn}>-</button>
                    <p className={s.productCount}>3</p>
                    <button className={s.productBtn}>+</button>
                </div>
            </li>
            <li className={s.product}>
                <img className={s.img}
                    src="http://koff-api.vercel.app/img//1hb1ftgaptc4sove.jpg"
                    alt='Изображение товара' />
                <h3 className={s.titleProduct}>CartProducts</h3>
                <p className={s.price}>133&nbsp;742&nbsp;₽</p>
                <p className={s.article}>арт. 847531222522</p>
                {/* <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
                <p className={s.article}>арт. {data.article}</p> */}
                <div className={s.productControl}>
                    <button className={s.productBtn}>-</button>
                    <p className={s.productCount}>3</p>
                    <button className={s.productBtn}>+</button>
                </div>
            </li>
            <li className={s.product}>
                <img className={s.img}
                    src="http://koff-api.vercel.app/img//1hb1ftgaptc4sove.jpg"
                    alt='Изображение товара' />
                <h3 className={s.titleProduct}>CartProducts</h3>
                <p className={s.price}>133&nbsp;743&nbsp;₽</p>
                <p className={s.article}>арт. 847531222533</p>
                {/* <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
                <p className={s.article}>арт. {data.article}</p> */}
                <div className={s.productControl}>
                    <button className={s.productBtn}>-</button>
                    <p className={s.productCount}>3</p>
                    <button className={s.productBtn}>+</button>
                </div>
            </li>
        </ul>
    )
}