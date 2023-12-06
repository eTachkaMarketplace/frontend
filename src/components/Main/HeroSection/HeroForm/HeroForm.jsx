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
        <div  className="form-flex">
          <InputContainer>
            <InputSelect>
              <option value=""  >Рік від</option>
            {/* Ваш выпадающий список для Року випуску */}
           </InputSelect>
          </InputContainer>
          <InputContainer>
            <InputSelect>
              <option value=""  >Рік до</option>
              {/* Ваш выпадающий список для Року випуску */}
            </InputSelect>
          </InputContainer>
        </div>
        <div className="form-flex">
        <InputContainer>
          <InputSelect>
            <option value=""   >Ціна від</option>
            {/* Ваш выпадающий список для Ціни */}
          </InputSelect>
        </InputContainer>
          <InputContainer>
            <InputSelect>
              <option value=""   >Ціна до</option>
              {/* Ваш выпадающий список для Ціни */}
            </InputSelect>
          </InputContainer>
        </div>
        <DivContainer>
          <ExtendedSearchLink to="/">Розширений пошук</ExtendedSearchLink>
          <SearchButton>Пошук</SearchButton>
        </DivContainer>
      </FormContainer>
    );
  };

  export default HeroForm;

