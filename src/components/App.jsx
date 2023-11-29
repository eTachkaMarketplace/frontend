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
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authSlice';
import SearchPage from 'pages/SearchPage/SearchPage';

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
            <Route path="/search" element={<SearchPage />} />
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
