import React, {Suspense, useEffect} from 'react';
import { refresh } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectToken } from '../redux/auth/selectors';
import { Container } from './App.styled.jsx';
import Spinner from './Spinner/spinner';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';

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
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/" element={<MainLayout />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
          </Route>
        </Routes>
        </Suspense>

    </Container>
  );
}