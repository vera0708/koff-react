import s from './Developer.module.scss';

export const Developer = () => (
    <ul className={s.developer}>
        <li className={s.item}>
            Designer:&nbsp;<a
                className={s.link}
                href='https://t.me/Mrshmallowww'
                target='_blank'
                rel='noreferrer'>
                Anastasiaa Ilina
            </a>
        </li>
        <li className={s.item}>
            Developer:&nbsp;<a
                className={s.link}
                href='https://t.me/Vera_07_08'
                target='_blank'
                rel='noreferrer'>
                Vera Deeva
            </a>
        </li>
    </ul>
)