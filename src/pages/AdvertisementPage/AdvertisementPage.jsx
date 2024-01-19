import React, { useEffect, useState } from 'react';
import {Container, Title, RequiredMarker, Paragraph} from '../AdvertisementPage/AdvertisementPage.styled.jsx';

import Modal2 from '../../modal/modal2';
import { AdvertisementForm } from 'components/AdvertisementForm/AdvertisementForm.jsx';

const AdvertisementPage = () => {
  const initialFormValues = {
     description: "",
    region: "",
    category: "",
    car: {
      brand: "",
      model: "",
      vin: "",
      year: 0,
      price: 0,
      licensePlate: "",
      mileage: 0,
      transmissionType: "",
      engineType: "",
      engineVolume: 0,
      technicalState: "",
      bodyType: "",
      driveType: "",
      color: ""
    },
    contactName: "",
    contactPhone: "",
    isActive: true,  
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