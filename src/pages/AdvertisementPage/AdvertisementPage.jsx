import React, { useEffect, useState } from 'react';
import {Container, Title, RequiredMarker, Paragraph} from '../AdvertisementPage/AdvertisementPage.styled.jsx';

import Modal2 from '../../modal/modal2';
import { AdvertisementForm } from 'components/AdvertisementForm/AdvertisementForm.jsx';

const AdvertisementPage = () => {
  const initialFormValues = {
     "description": "string",
    "region": "string",
    "category": "string",
    "car": {
      "brand": "string",
      "model": "string",
      "vin": "string",
      "year": 0,
      "price": 0,
      "licensePlate": "string",
      "mileage": 0,
      "transmissionType": "string",
      "engineType": "string",
      "engineVolume": 0,
      "technicalState": "string",
      "bodyType": "string",
      "driveType": "string",
      "color": "string"
    },
    "contactName": "string",
    "contactPhone": "string",
    "isActive": true,
    "images": [
      "string"
    ],
  
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(formValues);

  const handleClearForm = () => {
    console.log("Clearing form...");
    setFormValues(initialFormValues);
  };
  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  return (
    <Container>
      <Title>Створити оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>

      <AdvertisementForm initialValues={formValues} />

      <Modal2 handleClearForm={handleClearForm}/>
    </Container>
  );
};

export default AdvertisementPage;