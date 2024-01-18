import React, { useState } from 'react';
import {
  Container,
  AddPhotoText,
  ImageContainer,
  EmptyImage,
  StyledCameraSVG,
  StyledCloseImgSVG,
} from './imgUpload.styled';
import { nanoid } from '@reduxjs/toolkit';

const ImageUploadComponent = ({ onImagesChange }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = e => {
    const selectedImages = Array.from(e.target.files);

    setImages(prevImages => [...prevImages, ...selectedImages]);

    onImagesChange([...images, ...selectedImages]);
  };

  const handleImageRemove = index => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    onImagesChange(images.filter((_, i) => i !== index));
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <ImageContainer key={index}>
        <img src={URL.createObjectURL(image)} alt={`img-${index}`} />
        <button onClick={() => handleImageRemove(index)} className="transpatent_button">
          <StyledCloseImgSVG />
        </button>
      </ImageContainer>
    ));
  };

  const renderEmptyImages = () => {
    const emptyImagesCount = 5 - images.length;
    const emptyImages = Array.from({ length: emptyImagesCount }, _ => (
      <EmptyImage key={nanoid()}>
        <StyledCameraSVG />
      </EmptyImage>
    ));
    return emptyImages;
  };

  return (
    <Container>
      {images.length > 0 && renderImages()}
      {images.length > 0 && (
        <label className="add_label" htmlFor="fileInput">
          <AddPhotoText>Додати фото</AddPhotoText>
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            multiple
            style={{ display: 'none' }}
          />
        </label>
      )}
      {images.length === 0 && (
        <label className="add_label" htmlFor="fileInput">
          <AddPhotoText>Додати фото</AddPhotoText>
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageChange}
            multiple
            style={{ display: 'none' }}
          />
        </label>
      )}
      {renderEmptyImages()}
    </Container>
  );
};

export default ImageUploadComponent;
