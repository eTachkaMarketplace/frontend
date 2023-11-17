import React from 'react';
import { MainWrapper } from './Main.styled';
import HeroSection from './HeroSection/HeroSection';
import { CarouselCar } from './CarouselCar/CarouselCar';
import Catalog from './Popular/Popular';
import NewCars from './New/NewCars';
import AccPage from '../../pages/AccountPage/AccountPage';


const Main = () => {
  return (
    <MainWrapper>
      <HeroSection />
      <CarouselCar />
      <Catalog />
      <NewCars/>
      <AccPage/>
    </MainWrapper>
    );
};

export default Main;
