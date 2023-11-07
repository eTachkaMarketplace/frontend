import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Carousel.css'

import {StyledWrapper, StyledFordSVG, StyledHondaSVG, StyledInfinitiSVG, StyledKiaSVG, StyledMazdaSVG,StyledRenaultSVG,StyledVolvoSVG } from './CarouselCar.styled.jsx';

export const CarouselCar =() => {
  
  return (
<Splide className="splide-container" aria-label="Car logo carousel"  tag="section"  options={ {
    rewind: true,
    width : 1080,
    perPage: 7,
    focus  : "center",
    perMove: 1,
    omitEnd: false,
    autoplay: true,
} }
>
  <SplideSlide className="container">
   <StyledFordSVG />
   <StyledWrapper>
    Ford
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledHondaSVG />
  <StyledWrapper>
  Honda
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledInfinitiSVG />
  <StyledWrapper>
  Infiniti
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledKiaSVG />
  <StyledWrapper>
  Kia
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledMazdaSVG />
  <StyledWrapper>
  Mazda
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledRenaultSVG />
  <StyledWrapper>
  Renault
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledVolvoSVG />
  <StyledWrapper>
  Volvo
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
   <StyledFordSVG />
   <StyledWrapper>
    Ford
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledHondaSVG />
  <StyledWrapper>
  Honda
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledInfinitiSVG />
  <StyledWrapper>
  Infiniti
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledKiaSVG />
  <StyledWrapper>
  Kia
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledMazdaSVG />
  <StyledWrapper>
  Mazda
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledRenaultSVG />
  <StyledWrapper>
  Renault
   </StyledWrapper>
  </SplideSlide>
  <SplideSlide className="container">
  <StyledVolvoSVG />
  <StyledWrapper>
  Volvo
   </StyledWrapper>
  </SplideSlide>

</Splide>

);
}
