import React, { useEffect } from 'react';
import { MainWrapper } from './Main.styled';
import HeroSection from './HeroSection/HeroSection';

import Catalog from './Popular/Popular';
import NewCars from './New/NewCars';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';


const Main = ({ favorites, setFavorites }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsOpen(false));
  }, [dispatch]);
  return (
    <MainWrapper>
      <HeroSection />
      {/* <Catalog favorites={favorites} setFavorites={setFavorites} />
      <NewCars favorites={favorites} setFavorites={setFavorites} /> */}
    </MainWrapper>
  );
};

export default Main;


// import { CarouselCar } from './CarouselCar/CarouselCar';
// <CarouselCar />; /// for later using
