import React, { useEffect } from 'react';
import { MainWrapper } from './Main.styled';
import HeroSection from './HeroSection/HeroSection';

import Catalog from './Popular/Popular';
import NewCars from './New/NewCars';
import { useDispatch } from 'react-redux';
import { getAdverstisements } from 'redux/advertisment/operations';


const Main = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdverstisements({}));
  }, [dispatch]);
  return (
    <MainWrapper>
      <HeroSection />
      <Catalog />
      <NewCars/>
    </MainWrapper>
    );
};

export default Main;


// import { CarouselCar } from './CarouselCar/CarouselCar';
// <CarouselCar />; /// for later using
