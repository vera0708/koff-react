import { Catalog } from '../Catalog/Catalog';
import { Goods } from '../Goods/Goods';
import s from './Main.module.scss';

export const Main = () => {
    return (
        <main className={s.main}>
            <Catalog />
            <Goods />
        </main>
    );
}