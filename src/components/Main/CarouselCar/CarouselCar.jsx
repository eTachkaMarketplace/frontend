import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { StyledFordSVG, StyledHondaSVG, StyledInfinitiSVG, StyledKiaSVG, StyledMazdaSVG,StyledRenaultSVG,StyledVolvoSVG } from './CarouselCar.styled.jsx';


export const CarouselCar = () => (
  <Carousel >
    <div>
    <StyledFordSVG />
    <StyledHondaSVG />
    <StyledInfinitiSVG />
    <StyledKiaSVG />
    <StyledMazdaSVG />
    </div>
    <StyledRenaultSVG />
    <StyledVolvoSVG />
  </Carousel>
);
