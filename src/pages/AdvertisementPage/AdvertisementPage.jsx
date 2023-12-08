import React from 'react';
import {Container, Title, RequiredMarker, Paragraph, } from '../AdvertisementPage/AdvertisementPage.styled.jsx';
// import AdvertisementStages from

const AdvertisementPage = () => {
  return (
    <Container>
      <Title>Створити оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>
      <AdvertisementStages/>

    </Container>
  );
};

export default AdvertisementPage;
