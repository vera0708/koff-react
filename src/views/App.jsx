import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAccessToken } from '../store/auth/auth.slice';
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Card } from '../componenets/Card/Card';
import { Catalog } from './Catalog/Catalog';
import { Goods } from './Goods/Goods';
import { Cart } from './Cart/Cart';
import { Order } from '../componenets/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/favorite',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/search',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/category',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/product/:productId',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/order/:orderId',
    element: (
      <>
        <Header />
        <main>
          <Order />
        </main>
        <Footer />
      </>
    ),
  },
])

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return <div>Загрузка...</div>
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
