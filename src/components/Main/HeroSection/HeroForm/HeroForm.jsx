import React, { useState } from 'react';
import { FormContainer, FormTitle, InputContainer, DivContainer } from './HeroForm.styled';
import DataAccessor from 'components/Class/DataAccessor';
import { ErrorMessage, Field, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

const HeroForm = () => {
  const navigate = useNavigate();
  const dataAccessor = new DataAccessor();
  const carMark = dataAccessor.getModels();
  const region = dataAccessor.getRegion();
  const initialValues = {
    brand: '',
    model: '',
    region: '',
    yearMin: '',
    yearMax: '',
    priceMin: '',
    priceMax: '',
  };
  const years = [
    '1980',
    '1981',
    '1982',
    '1983',
    '1984',
    '1985',
    '1986',
    '1987',
    '1988',
    '1989',
    '1990',
    '1991',
    '1992',
    '1993',
    '1994',
    '1995',
    '1996',
    '1997',
    '1998',
    '1999',
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
  ];
  const [availableModels, setAvailableModels] = useState([]);

  const handleSelectChange = (name, selectedValue, setFieldValue) => {
    if (name === 'brand') {
      const modelsForSelectedBrand = carMark[selectedValue] || [];
      setAvailableModels(modelsForSelectedBrand);
    }

    setFieldValue(name, selectedValue);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
        const searchUrl = `/search?brand=${values.brand}&model=${values.model}&region=${values.region}&yearMin=${values.yearMin}&yearMax=${values.yearMax}&priceMin=${values.priceMin}&priceMax=${values.priceMax}`;
        navigate(searchUrl);
      }}
    >
      {({ setFieldValue, handleSubmit }) => (
        <FormContainer>
          <FormTitle>Знайти автомобіль</FormTitle>
          <InputContainer>
            <select
              className="select"
              as="select"
              name="brand"
              onChange={event => handleSelectChange('brand', event.target.value, setFieldValue)}
            >
              <option value="">Марка</option>
              <option value="BMW">BMW</option>
              <option value="Toyota">Toyota</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
          </InputContainer>
          <InputContainer>
            <select
              className="select"
              as="select"
              name="model"
              onChange={event => handleSelectChange('model', event.target.value, setFieldValue)}
            >
              <option value="">Модель</option>
              {availableModels.map((model, index) => {
                return (
                  <option key={index} value={model}>
                    {model}
                  </option>
                );
              })}
            </select>
          </InputContainer>
          <InputContainer>
            <select
              className="select"
              as="select"
              name="region"
              onChange={event => handleSelectChange('region', event.target.value, setFieldValue)}
            >
              <option value="">Область</option>
              {Object.keys(region).map(region => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </InputContainer>
          <div className="form-flex">
            <InputContainer>
              <select
                className="select"
                as="select"
                name={'yearMin'}
                onChange={event => handleSelectChange('yearMin', event.target.value, setFieldValue)}
              >
                <option value="">Рік від</option>
                {years.map(year => {
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </InputContainer>
            <InputContainer>
              <select
                className="select"
                as="select"
                name={'yearMax'}
                onChange={event => handleSelectChange('yearMax', event.target.value, setFieldValue)}
              >
                <option value="">Рік до</option>
                {years.map(year => {
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </InputContainer>
          </div>
          <div className="form-flex">
            <InputContainer>
              <Field
                type="number"
                name="priceMin"
                className="select"
                placeholder="Ціна від ($)"
                max={10000000}
                min={0}
                validate={value => {
                  if (value && !/^\d+$/.test(value)) {
                    return 'Введіть додатне число';
                  }
                }}
              />
              <ErrorMessage name="priceMin" component="div" className="error-message" />
            </InputContainer>
            <InputContainer>
              <Field
                type="number"
                name="priceMax"
                className="select"
                placeholder="Ціна до ($)"
                max={10000000}
                min={0}
                validate={value => {
                  if (value && !/^\d+$/.test(value)) {
                    return 'Введіть додатне число';
                  }
                }}
              />
              <ErrorMessage name="priceMax" component="div" className="error-message" />
            </InputContainer>
          </div>
          <DivContainer>
            <NavLink className="Rbtn" to="/search">
              Розширений пошук
            </NavLink>
            <button className="Sbtn" type="submit" onClick={handleSubmit}>
              Пошук
            </button>
          </DivContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default HeroForm;
