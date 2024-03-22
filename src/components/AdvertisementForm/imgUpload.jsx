import React, { useEffect, useState } from 'react';
import {
  Container,
  AddPhotoText,
  ImageContainer,
  EmptyImage,
  StyledCameraSVG,
  StyledCloseImgSVG,
} from './imgUpload.styled';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

const ImageUploadComponent = ({ initImages, onImagesChange, setImg }) => {
  const [images, setImages] = useState(setImg || []);
  const [totalSize, setTotalSize] = useState(0);
  useEffect(() => {
    const fetchAndConvertImages = async () => {
      if (initImages) {
        const imageFiles = await Promise.all(
          initImages.map(async imageUrl => {
            const response = await fetch(imageUrl);
            const blob = await response.blob();

            // Create a File object from the Blob
            return new File([blob], imageUrl.substring(imageUrl.lastIndexOf('/') + 1), {
              type: blob.type,
            });
          })
        );
        setImages(prevImages => [...prevImages, ...imageFiles]);
        onImagesChange([...images, ...imageFiles]);
      }
    };

    fetchAndConvertImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

const handleImageChange = e => {
  const selectedImages = Array.from(e.target.files);

  const validImages = selectedImages.filter(image => {
    setTotalSize(prevTotalSize => prevTotalSize + image.size);
    return totalSize + image.size <= MAX_TOTAL_SIZE;
  });

  if (totalSize > MAX_TOTAL_SIZE) {
    Notify.warning('Total size of images exceeds 10 MB');
    return;
  }

  setImages(prevImages => [...prevImages, ...validImages]);
  onImagesChange([...images, ...validImages]);
};

  const handleImageRemove = index => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    onImagesChange(images.filter((_, i) => i !== index));
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <ImageContainer key={index}>
        <img src={URL.createObjectURL(image)} alt={`img-${index}`} />
        <button type="button" onClick={() => handleImageRemove(index)} className="transpatent_button">
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
