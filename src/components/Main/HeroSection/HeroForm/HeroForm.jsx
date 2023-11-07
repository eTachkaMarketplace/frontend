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
            <option value=""  >Марка</option>
            {/* Ваш выпадающий список для Марки */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value=""  >Модель</option>
            {/* Ваш выпадающий список для Модели */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value=""  >Область</option>
            {/* Ваш выпадающий список для Области */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value=""  >Рік випуску</option>
            {/* Ваш выпадающий список для Року випуску */}
          </InputSelect>
        </InputContainer>
        <InputContainer>
          <InputSelect>
            <option value=""   >Ціна</option>
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

