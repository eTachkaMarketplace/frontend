// import React, { useState } from 'react';
// import { Container } from './imgUpload.styled'


// const ImageUploadComponent = ({ onImagesChange }) => {
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const selectedImages = Array.from(e.target.files);

//     setImages((prevImages) => [...prevImages, ...selectedImages]);

//     // Передаем измененный список изображений в родительский компонент (или форму)
//     onImagesChange([...images, ...selectedImages]);
//   };

//   const handleImageRemove = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//     onImagesChange(images.filter((_, i) => i !== index));
//   };

//   return (
//     <Container>
//       <input type="file" accept="image/*" onChange={handleImageChange} multiple />
//       <div>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
//             <img src={URL.createObjectURL(image)} alt={`img-${index}`} style={{ width: '100px', height: '100px' }} />
//             <button onClick={() => handleImageRemove(index)} style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}>
//               X
//             </button>
//           </div>
//         ))}
//       </div>
//    </Container>
//   );
// };

// export default ImageUploadComponent;

// ImageUploadComponent.js

// ImageUploadComponent.js

import React, { useState } from 'react';
import { Container, AddPhotoText, ImageContainer, EmptyImage, StyledCameraSVG, StyledCloseImgSVG} from './imgUpload.styled';

const ImageUploadComponent = ({ onImagesChange }) => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    setImages((prevImages) => [...prevImages, ...selectedImages]);

    onImagesChange([...images, ...selectedImages]);
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    onImagesChange(images.filter((_, i) => i !== index));
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <ImageContainer key={index}>
        <img src={URL.createObjectURL(image)} alt={`img-${index}`} />
        <button onClick={() => handleImageRemove(index)} className='transpatent_button'>
          <StyledCloseImgSVG/>
        </button>
      </ImageContainer>
    ));
  };

  // const renderEmptyImages = () => {
  //   const emptyImagesCount = 5 - images.length;
  //   const emptyImages = Array.from({ length: emptyImagesCount }, (_, index) => (
  //     <EmptyImage key={index} onClick={() => document.getElementById('fileInput').click()}>
  //       <StyledCameraSVG/>
  //     </EmptyImage>
  //   ));
  //   return emptyImages;
  // };

  const renderEmptyImages = () => {
    const emptyImagesCount = 5 - images.length;
    const emptyImages = Array.from({ length: emptyImagesCount }, (_, ) => (
      <EmptyImage >
        <StyledCameraSVG/>
      </EmptyImage>
    ));
    return emptyImages;
  };

  return (
    <Container>
      <label className='add_label' htmlFor="fileInput">
        <AddPhotoText>Додати фото</AddPhotoText>
        <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} multiple style={{ display: 'none' }} />
      </label>
      
        {renderImages()}
        {renderEmptyImages()}
      
    </Container>
  );
};

export default ImageUploadComponent;

