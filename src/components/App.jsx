import React, { Suspense } from 'react';
// import { refresh } from '../redux/auth/operations';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { selectToken } from '../redux/auth/selectors';
// import { Container } from './App.styled.jsx';
import Spinner from './Spinner/spinner';
// import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Authentication from 'pages/Autorithation/Authentication';

export function App() {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch, token]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/autorithation"
              element={
                <PrivateRoute>
                  <Authentication/>
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
