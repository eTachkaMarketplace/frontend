import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from './Spinner/spinner';
import { PublickRoute } from './PublickRoute';
import { PrivateRoute } from './PrivateRoute';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Authentication from 'pages/Autorithation/Authentication';
import AccountPage from '../pages/AccountPage/AccountPage';
import AdvertisementPage from '../pages/AdvertisementPage/AdvertisementPage';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authSlice';
import SearchPage from 'pages/SearchPage/SearchPage';
import ChangePass from 'pages/ChangePassPage/ChangePass';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/authorization"
              element={
                <PublickRoute redirectTo="/account">
                  <Authentication />
                </PublickRoute>
              }
            />
            <Route
              path="/forgot-password/:id?"
              element={
                <PublickRoute redirectTo="/account">
                  <ChangePass />
                </PublickRoute>
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/AdvertisementPage" element={<AdvertisementPage />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/account" element={<AccountPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
