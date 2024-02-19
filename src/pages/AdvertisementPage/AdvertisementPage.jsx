import React from 'react';
import {Container, Title, RequiredMarker, Paragraph} from '../AdvertisementPage/AdvertisementPage.styled.jsx';

import { AdvertisementForm } from 'components/AdvertisementForm/AdvertisementForm.jsx';


const AdvertisementPage = () => {

  return (
    <Container>
      <Title>Створити оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>

      <AdvertisementForm  />
    </Container>
  );
};

export default AdvertisementPage;