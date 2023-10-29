import { Container } from 'components/App.styled';
import { Outlet } from 'react-router';
import Header from '../Header/Header'
// import { useState, useEffect } from 'react';


export const MainLayout = () => {
     
  return (
    <Container>
      <Header />
      {/* <Main> */}
      <Outlet />
      {/* </Main> */}
    </Container>
    );
};