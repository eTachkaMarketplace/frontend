import styled from 'styled-components';

import { Form as FormikForm, Field as FormikField, ErrorMessage as FormikErrorMessage } from 'formik';

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .circle {
    display: flex;
    width: 58px;
    height: 58px;
    padding: 17px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 50px;
    background: var(--green, #069024);
  }
  .titleChack {
    color: var(--green, #069024);
    /* H2 */
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 27px;
  }
  .text2 {
    color: var(--Text-black-2, #4b4b4b);
    /* Subtitle 1.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 16px;
  }

  .login {
    color: var(--Text-White, #fff);
    text-align: center;
    /* Button 1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 406px;
    height: 26px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    background: var(--buttons-accent, linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%));
    &:hover,
    &:focus {
      background: linear-gradient(144deg, #0040bd 19.34%, #195b01 80.66%);
    }
    margin-top: 59px;
  }
  .toMain {
    display: flex;
    width: 406px;
    height: 26px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 2px solid var(--buttons-accent, #0040bd);
    margin-top: 20px;

    color: var(--text-black-dark, #141414);
    text-align: center;
    /* Button 1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
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
  .textBig {
    color: var(--text-black-dark, #141414);
    /* Subtitle 2.2 */
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .mainBtn {
    color: var(--text-black-dark, #141414);
    text-align: center;
    /* Button 1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 454px;
    height: 56px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    border: 2px solid var(--buttons-accent, #0040bd);
  }
  .link {
    color: var(--Text-White, #fff);
    text-align: center;
    /* Button 1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    margin-top: 24px;
    width: 454px;
    height: 56px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: var(--buttons-accent, linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%));
    &:hover,
    &:focus {
      background: linear-gradient(144deg, #0040bd 19.34%, #195b01 80.66%);
    }
  }
  @media (max-width: 768px) {
    .title {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: center;
      padding-bottom: 10px;
      width: 330px;
      border-bottom: 1px solid #b9b9b9;
    }
    .text {
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
      margin-top: 24px;
      margin-bottom: 16px;
      width: 330px;
    }
    .textBig {
      color: var(--text-black-dark, #141414);
      /* Subtitle 2.2 */
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .mainBtn {
      width: 330px;
      height: 48px;
      padding: 8px;

      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
    }
    .link {
      width: 330px;
      height: 48px;

      color: rgb(255, 255, 255);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
    }
    .titleChack {
      color: rgb(6, 144, 36);
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: 0%;
      text-align: left;
      margin-top: 24px;
    }
    .text2 {
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
      margin-top: 16px;
    }
    .login {
      width: 330px;
      height: 48px;
      color: rgb(255, 255, 255);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
    }
    .toMain {
      width: 330px;
      height: 48px;
      color: rgb(20, 20, 20);
      font-family: 'Roboto',sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
    }
  }
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 454px;

  background-color: white;
  border-radius: 8px;

  .errorSVGemail {
    position: absolute;
    right: 16px;
    top: 16px;
  }
  @media (max-width: 768px) {
    width: 330px;
    .errorSVGemail {
      right: 14px;
      top: 14px;
    }
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

  @media (max-width: 768px) {
    width: 330px;
    height: 48px;
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
  @media (max-width: 768px) {
    width: 330px;
    height: 48px;

    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
  }
`;
