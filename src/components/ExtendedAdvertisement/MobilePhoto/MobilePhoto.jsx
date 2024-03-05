import React from 'react';
import Slider from 'react-slick';
import { PhotoWraper } from './MobilePhoto.style';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MobilePhoto = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PhotoWraper>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={` ${index}`} />
          </div>
        ))}
      </Slider>
    </PhotoWraper>
  );
};
