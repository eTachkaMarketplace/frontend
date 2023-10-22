import { lazy, useEffect, Suspense } from 'react';
import { refresh } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectToken } from '../redux/auth/selectors';
import { Container } from './App.styled.jsx';
import Spinner from './Spinner/spinner';

import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, token]);

  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              
              
            </Route>
          </Route>

          
        </Routes>
        </Suspense>

    </Container>
  );
}