import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Spinner from './Spinner/spinner';
import { PublickRoute } from './PublickRoute';
import { PrivateRoute } from './PrivateRoute';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Authentication from 'pages/Autorithation/Authentication';
import AccountPage from '../pages/AccountPage/AccountPage';
import PrivacyPolicyPage from '../pages/FooterPage/PrivacyPolicyPage/PrivacyPolicyPage';
import TermsOfUsePage from '../pages/FooterPage/TermsOfUsePage/TermsOfUsePage';
import RulesPage from '../pages/FooterPage/RulesPage/RulesPage';
import FAQPage from '../pages/FooterPage/FAQPage/FAQPage';
import AdvertisementPage from '../pages/AdvertisementPage/AdvertisementPage';
import EditAdvertisementPage from '../pages/EditAdvertisementPage/EditAdvertisementPage';
import AdvertisementPageDone from '../pages/AdvertisementPageDone/AdvertisementPageDone';
import EditAdvertisementPageDone from '../pages/EditAdvertisementPageDone/EditAdvertisementPageDone';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/auth/authSlice';
import SearchPage from 'pages/SearchPage/SearchPage';
import ChangePassPage from 'pages/ChangePassPage/ChangePassPage';
import NotFound from '../pages/NotFoundPage/NotFound';
import { AdvertisementByID } from 'pages/AdvertisementByID/AdvertisementByID';
// import HomePage from '../pages/HomePage/HomePage';
import { getUser, refreshToken } from 'redux/auth/operations';
import { getAdvFav } from 'redux/advertisment/operations';
import { selectAdverstisementsFavorite } from 'redux/advertisment/selectors';
import Main from './Main/Main';
import { selectRefToken, selectToken } from 'redux/auth/selectors';

export function App() {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  const favoritesFromState = useSelector(selectAdverstisementsFavorite);
  const navigate = useNavigate();
  const location = useLocation();
  const jwtRefreshToken = useSelector(selectRefToken);
  const jwtToken = useSelector(selectToken);

  useEffect(() => {
    if (jwtRefreshToken) dispatch(refreshToken({ jwtRefreshToken }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        if (jwtRefreshToken) {
          dispatch(refreshToken({ jwtRefreshToken }));
        }
      },
      9 * 60 * 1000 + 30 * 1000
    ); // 9.5 хвилини

    return () => clearInterval(intervalId); // Очищаємо інтервал при виході з компоненту або при перерендерингу
  }, [jwtRefreshToken, dispatch]);

  useEffect(() => {
    dispatch(refresh());
    if (jwtToken) {
      dispatch(getUser());
      dispatch(getAdvFav());
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const idFavorite = favoritesFromState.map(favorite => favorite.id);
    setFavorites(idFavorite);
  }, [favoritesFromState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate, location]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Main favorites={favorites} setFavorites={setFavorites} />} />
            <Route
              path="/authorization/:code?"
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
              element={<AdvertisementByID favorites={favorites} setFavorites={setFavorites} />}
            />
            <Route path="/search" element={<SearchPage favorites={favorites} setFavorites={setFavorites} />} />
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
                  <AccountPage favoritesFromState={favoritesFromState} />
                </PrivateRoute>
              }
            />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
            <Route path="/TermsOfUse" element={<TermsOfUsePage />} />
            <Route path="/Rules" element={<RulesPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/advertisementDone" element={<AdvertisementPageDone />} />
            <Route path="/advertisementDoneEdit" element={<EditAdvertisementPageDone />} />
            <Route path="/editAdvertisement/:id" element={<EditAdvertisementPage />} />
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
