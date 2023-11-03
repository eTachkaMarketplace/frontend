import { Container } from './MainLayout.styled';
// import { Outlet } from 'react-router';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
// import { useState, useEffect } from 'react';


export const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Main/>
      <Footer/>
    </Container>
    );
};

