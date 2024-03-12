import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core'; // Import core styles
import { PhotoWraper } from './MobilePhoto.style';



export const MobilePhoto = ({ photos }) => {
  return (
    <PhotoWraper>
      <Splide className='splideBox' options={{ perPage: 1, pagination: false, arrows: true }}>
        {photos.map((photo, index) => (
          <SplideSlide className='splidePhoto' key={`${index}car`}>
            <img src={photo} alt={`car ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    </PhotoWraper>
  );
};

