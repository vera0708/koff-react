import { useParams } from 'react-router-dom';
import s from './Order.module.scss';
import { useDispatch } from 'react-redux';

export const Order = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
}