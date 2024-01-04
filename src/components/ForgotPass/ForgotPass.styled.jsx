import styled from 'styled-components';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .title {
    color: var(--text-black-dark, #141414);
    text-align: center;
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 16px;
    width: 454px;
    border-bottom: 1px solid #b9b9b9;
  }
  .text {
    color: var(--Text-black-2, #4b4b4b);

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 24px;
    margin-bottom: 24px;
    width: 454px;
  }
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 454px;

  background-color: white;
  border-radius: 8px;
  margin-top: 24px;

  .errorSVGemail {
    position: absolute;
    right: 16px;
    top: 16px;
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

export const Field = styled(FormikField)`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  height: 56px;
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

export const Input = styled.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 24px;
  align-self: stretch;
  border-radius: 8px;
  border: 0;
  background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
  &:hover,
  &:focus {
    background: linear-gradient(144deg, #0040bd 19.34%, #195b01 80.66%);
  }
`;
