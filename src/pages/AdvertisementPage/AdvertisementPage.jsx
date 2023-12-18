import {useState, useEffect, useRef } from 'react';
import {Container, Title, RequiredMarker, Paragraph,SectionTitle, SectionContainer } from '../AdvertisementPage/AdvertisementPage.styled.jsx';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';

const brandsAndModels = {
  BMW: ['X5', 'M3', 'X3'],
  Toyota: ['Camry', 'Corolla', 'Avalon'],
  'Mercedes-Benz': ['A-Class', 'B-Class', 'C-Class'],
};


  const AdvertisementForm = ({ initialValues, onSubmit}) => {
    const dispatch = useDispatch();
    const formikRef = useRef(null);

    const [availableModels, setAvailableModels] = useState([]);

    useEffect(() => {
     if (formikRef.current) {
       formikRef.current.resetForm({ values: initialValues });
      }
      }, [initialValues]);
  
  const clearForm = () => {
    dispatch(setIsOpen(true));
  }

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;

    const models = brandsAndModels[selectedBrand] || [];

    setAvailableModels(models);

    formikRef.current.setFieldValue('model', '');
  };

    return (
      <Formik 
      initialValues={initialValues}        
      onSubmit={values => onSubmit(values)}
      innerRef={formik => (formikRef.current = formik)}
      >
            <Form className='form'>
              <SectionContainer>
              <SectionTitle>Етапи розміщення оголошення</SectionTitle>
              </SectionContainer>

              <SectionContainer>
              <SectionTitle>Фото автомобілю<RequiredMarker>*</RequiredMarker></SectionTitle>
                <Paragraph>
                  Перше фото є головним. Максимальний розмір фотографії до 5 МБ. Формат фотографії: JPG, PNG. Мінімальна кількість фотографій - 6.
                 </Paragraph>
              </SectionContainer>

              <SectionContainer>
              <SectionTitle>Основна інформація</SectionTitle>
              <label>
                  Марка авто<RequiredMarker>*</RequiredMarker>
                  <Field
                    className="fieldLong marg16"
                    as="select"
                    name="brand"
                    onChange={handleBrandChange}
                  >
                    <option value=""></option>
                    {Object.keys(brandsAndModels).map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Field>
              </label>
              <label>
                  Модель авто<RequiredMarker>*</RequiredMarker>
                  <Field className="fieldLong marg16" as="select" name="model">
                    <option value=""></option>
                    {availableModels.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </Field>
              </label>
                               
              </SectionContainer>
            
            <div>
              <button className="submitButton" type="submit">
              Опублікувати оголошення
              </button>
              <button className="clearButton" onClick={clearForm} type="button">
              Очистити все
            </button>
            </div>
          
            </Form>
      </Formik>
    );
  
};


const AdvertisementPage = () => {
  return (
    <Container>
      <Title>Створити оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>

      <AdvertisementForm/>


    </Container>
  );
};

export default AdvertisementPage;
