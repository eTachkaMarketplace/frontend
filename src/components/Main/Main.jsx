import React from 'react';
import {MainWrapper } from './Main.styled';
import  HeroSection  from './HeroSection/HeroSection';
import {CarouselCar} from './CarouselCar/CarouselCar';



const Main = () => {
  return (
    <MainWrapper>
        <HeroSection/>
        <CarouselCar/>
    </MainWrapper>
  );
};

export default Main;
