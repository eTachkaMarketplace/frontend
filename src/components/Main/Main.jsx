import React from 'react';
import { MainWrapper } from './Main.styled';
import HeroSection from './HeroSection/HeroSection';

import Catalog from './Popular/Popular';
import NewCars from './New/NewCars';


const Main = () => {
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