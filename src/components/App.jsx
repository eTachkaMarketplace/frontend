import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from './Spinner/spinner';
import { PublickRoute } from './PublickRoute';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Authentication from 'pages/Autorithation/Authentication';
import AccountPage from '../pages/AccountPage/AccountPage';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authSlice';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  console.log(3);
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
                <PublickRoute>
                  <Authentication />
                </PublickRoute>
              }
            />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
