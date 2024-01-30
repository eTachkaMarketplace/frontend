import React, { useEffect, useState } from 'react';
import { Wraper } from './imgModal.styled';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomArrowNext, CustomArrowPrev } from './Arrow';

const IMGModal = ({ imgSrs, selectedImage }) => {
  const [currentSlide, setCurrentSlide] = useState();

 useEffect(() => {
   // Set the initial slide based on the index of the selected image
   const initialSlide = imgSrs.findIndex(image => image === selectedImage);
   setCurrentSlide(prevSlide => {
     if (initialSlide !== -1) {
       return initialSlide;
     } else {
       // If the selected image is not found, default to the first image
       return 0;
     }
   });
 }, [selectedImage, imgSrs]);

  const settings = {
    dots: false,
    initialSlide: currentSlide,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => setCurrentSlide(index),
    prevArrow: <CustomArrowPrev />,
    nextArrow: <CustomArrowNext />,
  };

  return (
    <Wraper>
      <Slider {...settings} >
        {imgSrs.map((image, index) => (
          <div key={index}>
            <img className="image" src={image} alt={`Car ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="custom-pagination">{`${currentSlide + 1}/${imgSrs.length}`}</div>
    </Wraper>
  );
};

export default IMGModal;