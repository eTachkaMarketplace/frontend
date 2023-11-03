import React from 'react';
import {MainWrapper } from './Main.styled';
// import { Splide, SplideSlide } from '@splidejs/react-splide';

import {CarouselCar} from './CarouselCar/CarouselCar';



const Main = () => {
  return (
    <MainWrapper>
        <CarouselCar/>
    </MainWrapper>
  );
};

export default Main;
