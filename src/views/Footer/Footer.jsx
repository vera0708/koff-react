import { Contacts } from "../../componenets/Contacts/Contacts";
import { Developer } from "../../componenets/Developer/Developer";
import { Logo } from "../../componenets/Logo/Logo";
import { Container } from "../Container/Container";
import s from './Footer.module.scss'

export const Footer = () => (
    <footer className={s.header}>
        <Container className={s.container}>
            <div className={s.logo}>
                <Logo />
            </div>
            <div className={s.contacts}>
                <Contacts />
            </div>
            <div className={s.developer}>
                <Developer />
            </div>
        </Container>
    </footer>
)