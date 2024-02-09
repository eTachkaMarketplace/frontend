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

  // const initialFormValues = {
  //     description: "",
  //     region: "",
  //     category: "",
  //     car: {
  //       brand: "",
  //       model: "",
  //       vin: "",
  //       year: 0,
  //       price: 0,
  //       licensePlate: "",
  //       mileage: 0,
  //       transmissionType: "",
  //       engineType: "",
  //       engineVolume: 0,
  //       technicalState: "",
  //       bodyType: "",
  //       driveType: "",
  //       color: ""
  //     },
  //     contactName: "",
  //     contactPhone: "",
  //     isActive: true,  
  // }

  // const [formValues, setFormValues] = useState(initialFormValues);
  // console.log(formValues);


  // useEffect(() => {
  //   console.log(formValues);
  // }, [formValues]);