import { useDispatch, useSelector } from 'react-redux';
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { useEffect } from 'react';
import { fetchAccessToken } from '../store/auth/auth.slice';

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken])

  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <div>Загрузка...</div>}
      <Footer />
    </>
  )
}

export default App
