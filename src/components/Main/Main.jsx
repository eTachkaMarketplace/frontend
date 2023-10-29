import React from 'react';
import {MainWrapper, } from './Main.styled';
import {CarouselCar} from './CarouselCar/CarouselCar';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Main = () => {
  return (
    <MainWrapper>
        <CarouselCar/>
    </MainWrapper>
  );
};

export default Main;
