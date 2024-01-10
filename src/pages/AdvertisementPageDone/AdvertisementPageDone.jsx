import React from 'react';
import {Container, Title, SectionContainer,SectionTitle,StyledArrowSVG,StyledCreateSVG,StyledPostSVG,} from './AdvertisementPageDone.styled';

const AdvertisementPageDone = () => {
  
  return (
    <Container>
      <Title>Створити оголошення</Title>
      <SectionContainer>
          <SectionTitle>Етапи розміщення оголошення</SectionTitle>
          <div className="styled">
            <StyledArrowSVG />
            <div className="create">
              <StyledCreateSVG />
              <p className="create_text">1. Створення</p>
            </div>
            <div className="post">
              <StyledPostSVG />
              <p className="post_text">2. Публікація</p>
            </div>
          </div>
        </SectionContainer>
      
    </Container>
  );
};

export default AdvertisementPageDone;