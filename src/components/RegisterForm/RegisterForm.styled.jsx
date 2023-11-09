import styled from 'styled-components';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 454px;
  background-color: white;
  margin-top: 24px;
  .checkLab {
    color: rgba(13, 12, 12, 0.7);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 357px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .marg24 {
    margin-bottom: 24px;
  }
  .marg8 {
    margin-bottom: 8px;
  }
`;



export const Label = styled.label`
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }

  &:nth-of-type(3) {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
    }
  }

  &.is-valid {
    color: green;
  }

  &.is-invalid {
    color: red;
  }

  & p {
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    color: green;
  }

  & .error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Field = styled(FormikField)`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  outline: none;
  color: rgba(13, 12, 12, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  border: 1px solid rgba(13, 12, 12, 0.3);

  background: #fff;

  transition: var(--transition);

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:hover,
  &:focus {
    border: 1px solid black;
  }

  &.is-valid {
    border: 1px solid green;
  }

  &.is-invalid {
    border: 1px solid red;
  }
`;


export const PasswordInput = styled.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`;

export const Input = styled.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 24px;
  color: #fff;

  text-align: center;
  font-family: 'Work Sans', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 454px;
  height: 56px;
  padding: 14px 24px;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;
  background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
  &:hover,
  &:focus {
    background: linear-gradient(144deg, #19015b 19.1%, #0040bd 78.89%);
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  margin-top: 8px;
  color: red;
`;

export const HidePassword = styled.span`
  color: black;
  position: absolute;
  right: 12px;
  top: 18px;
  cursor: pointer;
`;

export const StrDiv = styled.div`
  display: flex;
  align-items: center;
  width: 454px;
  justify-content: space-between;
  .strange {
    background: rgba(13, 12, 12, 0.3);
    width: 164px;
    height: 1px;
  }
  .and {
    color: #0d0c0c;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const GBtn = styled.button`
  height: 56px;
  padding: 14px 24px;
  align-self: stretch;
  border-radius: 8px;
  border: 2px solid #0040bd;
  background-color: transparent;
  margin-top: 24px;
  .Gdiv {
    gap: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Gtext {
    color: #0d0c0c;
    text-align: center;
    font-family: 'Work Sans', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;