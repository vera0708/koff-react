import { Container } from '../../views/Container/Container';
import { CardItem } from '../CardItem/CardItem';
import s from './Goods.module.scss';

export const Goods = ({ data }) => (
    <section className={s.goods} >
        <Container className={s.container}>
            <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
            <ul className={s.list} >
                {/* {data.map((item, i) => (
                    <li key={i}>
                        <a className={s.link}
                            href={`/category?slug=${item}`}>
                            {item}
                        </a>
                    </li>
                ))} */}
                {data.map((item, i) => (
                    <li key={i}>
                        <CardItem product={item} />
                    </li>
                ))}
            </ul>
        </Container>
    </section>
)