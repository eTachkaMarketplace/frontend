import React from 'react';
import { MainWrapper } from './Main.styled';
import HeroSection from './HeroSection/HeroSection';
import { CarouselCar } from './CarouselCar/CarouselCar';
import Catalog from './Popular/Popular';
import NewCars from './New/NewCars';

const Main = () => {
  return (
    <MainWrapper>
      <HeroSection />
      <CarouselCar />
      <Catalog />
      <NewCars/>
    </MainWrapper>
  );
};

export default Main;
