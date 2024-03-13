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
  .ErrorRedux {
    color: #ff0000;
    text-align: center;
    /* H2 */
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .checkLab {
    margin-top: 30px;
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
    cursor: pointer;
  }
  .customCheckbox {
    pointer-events: none;
  }
  .checked {
    color: green;
    fill: green;
  }
  .unchecked {
    color: red;
    fill: red;
  }
  .marg24 {
    margin-bottom: 24px;
  }
  .marg8 {
    margin-bottom: 8px;
  }
  .correct {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 0;
  }
  .errorSVGemail {
    position: absolute;
    right: 16px;
    top: 16px;
  }
  .errorSVGpass {
    position: absolute;
    right: 48px;
    top: 16px;
  }
  .loader {
    width: 454px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 330px;
    .ErrorRedux {
      color: rgb(250, 102, 102);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
    }
    .checkLab {
      margin-top: 24px;
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
      width: 330px;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
    }
    .marg24 {
      margin-bottom: 12px;
    }
    .errorSVGemail {
      position: absolute;
      right: 14px;
      top: 14px;
    }
    .errorSVGpass {
      position: absolute;
      right: 48px;
      top: 14px;
    }
  }
`;

export const Label = styled.label`
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
  height: 56px;
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
  color: #141414;
  background: #fff;

  transition: var(--transition);

  &::placeholder {
    color: #ababab;
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
  @media (max-width: 768px) {
    height: 48px;
    color: rgb(20, 20, 20);
    font-family: 'Roboto',sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
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
  margin-top: 10px;
  margin-bottom: 24px;
  color: #fff;

  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 454px;
  height: 56px;
  padding: 14px 24px;
  gap: 4px;
  align-self: stretch;
  border: 0;
  border-radius: 8px;
  background: linear-gradient(144deg, #0040bd 19.34%, #19015b 80.66%);
  &:hover,
  &:focus {
    background: linear-gradient(144deg, #0040bd 19.34%, #195b01 80.66%);
  }
  @media (max-width: 768px) {
    margin-top: 24px;
    margin-bottom: 0;
    width: 330px;
    height: 48px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 0;
  margin-top: 8px;
  color: #fa6666;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HidePassword = styled.span`
  color: black;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  @media (max-width: 768px) {
    right: 14px;
    top: 14px;
  }
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
    font-size: 18px;
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
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
