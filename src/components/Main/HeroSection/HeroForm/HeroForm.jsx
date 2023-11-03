import React from 'react';
import {
  FormContainer,
  FormTitle,
  InputContainer,
  InputSelect,
  ExtendedSearchLink,
  SearchButton,
  DivContainer,
  
} from './HeroForm.styled'; 

const HeroForm = () => {
    return (
      <FormContainer>
        <FormTitle>Знайти автомобіль</FormTitle>
        <InputContainer>
          <InputSelect>
            <option value="" disabled selected >Марка</option>
            {/* Ваш выпадающий список для Марки */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value="" disabled selected >Модель</option>
            {/* Ваш выпадающий список для Модели */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value="" disabled selected >Область</option>
            {/* Ваш выпадающий список для Области */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value="" disabled selected >Рік випуску</option>
            {/* Ваш выпадающий список для Року випуску */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value="" disabled selected >Ціна</option>
            {/* Ваш выпадающий список для Ціни */}
          </InputSelect>
        </InputContainer>
        <DivContainer>
          <ExtendedSearchLink to="/">Розширений пошук</ExtendedSearchLink>
          <SearchButton>Пошук</SearchButton>
        </DivContainer>
      </FormContainer>
    );
  };
  
  export default HeroForm;

