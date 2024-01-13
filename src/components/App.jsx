import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from './Spinner/spinner';
import { PublickRoute } from './PublickRoute';
import { PrivateRoute } from './PrivateRoute';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Authentication from 'pages/Autorithation/Authentication';
import AccountPage from '../pages/AccountPage/AccountPage';
import AdvertisementPage from '../pages/AdvertisementPage/AdvertisementPage';
import AdvertisementPageDone from '../pages/AdvertisementPageDone/AdvertisementPageDone';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authSlice';
import SearchPage from 'pages/SearchPage/SearchPage';
import ChangePassPage from 'pages/ChangePassPage/ChangePassPage';
import NotFound from '../pages/NotFoundPage/NotFound';
import { AdvertisementByID } from 'pages/AdvertisementByID/AdvertisementByID';
import HomePage from '../pages/HomePage/HomePage';

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
            <Route path="/" element={<HomePage />} />
            <Route
              path="/authorization"
              element={
                <PublickRoute redirectTo="/account">
                  <Authentication />
                </PublickRoute>
              }
            />
            <Route
              path="/forgot-password/:code?"
              element={
                <PublickRoute redirectTo="/account">
                  <ChangePassPage />
                </PublickRoute>
              }
            />
            <Route
              path="/AdvertisementByID/:id"
              element={
                <PublickRoute redirectTo="/account">
                  <AdvertisementByID />
                </PublickRoute>
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/advertisementPage"
              element={
                <PrivateRoute redirectTo="/authorization">
                  <AdvertisementPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRoute redirectTo="/authorization">
                  <AccountPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/advertisementDone"
              element={
                <PrivateRoute redirectTo="/authorization">
                  <AdvertisementPageDone />
                </PrivateRoute>
              }
            />
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
