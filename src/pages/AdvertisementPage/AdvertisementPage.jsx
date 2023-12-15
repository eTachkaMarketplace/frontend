import React from 'react';
import {Container, Title, RequiredMarker, Paragraph,SectionTitle } from '../AdvertisementPage/AdvertisementPage.styled.jsx';
import { Formik, Field, Form } from 'formik';


const PhotoSection =()=>{
  return (
    <>
    <SectionTitle>Фото автомобілю <RequiredMarker>*</RequiredMarker></SectionTitle>
    <Paragraph>
      Перше фото є головним. Максимальний розмір фотографії до 5 МБ. Формат фотографії: JPG, PNG. Мінімальна кількість фотографій - 6.
    </Paragraph>
    </>
  )
};

const MainInfoSection =()=>{
  const initialValues = {
    brand: '',
    model: '',
  };

  const MyCarForm = () => {
    const handleSubmit = (values, { resetForm }) => {
      // Обработка отправки формы
      console.log(values);

      // Очистка формы после успешной отправки
      resetForm();
    };

    const handleExternalSubmit = (submitForm) => {
      // Явный вызов отправки формы извне
      submitForm();
    };

    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ submitForm }) => (
          <>
            <Form>
              <div>
                <label htmlFor="brand">Марка авто:</label>
                <Field type="text" id="brand" name="brand" />
              </div>

              <div>
                <label htmlFor="model">Модель авто:</label>
                <Field type="text" id="model" name="model" />
              </div>

              <div>
              </div>
            </Form>

            <div>
              {/* Кнопка сабмит вне формы */}
              <button type="button" onClick={() => handleExternalSubmit(submitForm)}>
                Отправить (вне формы)
              </button>
            </div>
          </>
        )}
      </Formik>
    );
  };
  return (
    <>
      <SectionTitle>Основна інформація</SectionTitle>

    </>
  )
};


const AdvertisementPage = () => {
  return (
    <Container>
      <Title>Створити оголошення</Title>
      <Paragraph>
        <RequiredMarker>*</RequiredMarker>поля обовʼязкові для заповнення
      </Paragraph>

      <PhotoSection/>

      <MainInfoSection/>



    </Container>
  );
};

export default AdvertisementPage;
