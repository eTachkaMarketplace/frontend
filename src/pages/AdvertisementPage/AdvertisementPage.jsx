import React, { useEffect, useState } from 'react';
import {Container, Title, RequiredMarker, Paragraph} from '../AdvertisementPage/AdvertisementPage.styled.jsx';

import Modal2 from '../../modal/modal2';
import { AdvertisementForm } from 'components/AdvertisementForm/AdvertisementForm.jsx';

const AdvertisementPage = () => {
  const initialFormValues = {
    images: [],
    advertisementDTO: {
      description: '',
      ownerName: '',
      ownerPhone: '',
      price: 0,
      region: {
        name: '',
        city: {
          name: '',
        },
      },
      carDTO: {
        carMark: {
          name: '',
          carModel: {
            name: '',
          },
        },
        carNumber: '',
        yearToCreate: '',
        mileage: 0,
        bodyType: {
          name: '',
        },
        engine: {
          name: '',
          volume: '',
        },
        driveType: {
          name: '',
        },
        transmission: {
          name: '',
        },
        technicalState: {
          name: '',
        },
        color: {
          name: '',
        },
        vinNumber: '',
      },
    },
  };
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