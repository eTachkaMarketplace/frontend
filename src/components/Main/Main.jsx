import React, { useEffect, useState } from 'react';
import { MainWrapper } from './Main.styled';
import HeroSection from './HeroSection/HeroSection';

import Catalog from './Popular/Popular';
import NewCars from './New/NewCars';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';

const Main = ({ favorites, setFavorites }) => {
  const dispatch = useDispatch();
  const [changePage, setChangePage] = useState(0);

  useEffect(() => {
    dispatch(setIsOpen(false));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [changePage]);

  return (
    <MainWrapper>
      <HeroSection />
      <Catalog favorites={favorites} setFavorites={setFavorites} />
      <NewCars favorites={favorites} setChangePage={setChangePage} setFavorites={setFavorites} />
    </MainWrapper>
  );
};

export default Main;

// import { CarouselCar } from './CarouselCar/CarouselCar';
// <CarouselCar />; /// for later using
