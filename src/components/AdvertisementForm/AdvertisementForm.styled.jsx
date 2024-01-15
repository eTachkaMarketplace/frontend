import styled from 'styled-components';

import { ReactComponent as ArrowSVG } from '../../images/AccountPage/Arrow.svg';
import { ReactComponent as CreateSVG } from '../../images/AccountPage/create.svg';
import { ReactComponent as PostSVG } from '../../images/AccountPage/post.svg';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const SectionContainer = styled.div`
  /* max-width: 1440px; */
  padding: 50px 100px;
  margin: 0;

  border-radius: 8px;
  background: #F1F5FF;


`;

export const SectionTitle = styled.h3`
  color: #141414;

  margin-bottom: 32px;

  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
`;


export const StyledArrowSVG = styled(ArrowSVG)`
  margin-top: -1px ;
`;

export const StyledCreateSVG = styled(CreateSVG)`
  stroke: #fff;
  margin-right: 5px;
`;


export const StyledPostSVG = styled(PostSVG)`
  stroke:#4B4B4B;
  margin-right: 5px;

  `;






export const Form = styled(FormikForm)`
   position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;



  .ErrorRedux {
    color:  #ff0000;
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

/* ______________________________________________ */

.styled{
  position: relative;
  display: block;
  background: #FFF;
  width: 1000px;
  height: 74px;
  border: 1px solid #B9B9B9;
  border-radius: 10px;
}

.create{
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.post{
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.create_text{
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
}
.post_text{
  color: #4B4B4B;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;

}
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  label {
    display: flex;
    position: relative;
  }

  /* label:after {
    content: '▼';
    position: absolute;
    top: 20px;
    right: 16px;
    pointer-events: none;
  } */

  .title {
    margin-left: 4px;
    margin-bottom: 24px;
    width: 372px;

    color: #000;

    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .underTitle {
    color: #4b4b4b;
    margin-bottom: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .containerLong{
  width: 220px;
  padding-top: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 22px;  
  }

  .arrowDiv {
    position: relative;
  }
  .arrow {
    position: absolute;
    z-index: 1;
    right: 16px;
    top: 12px;
    pointer-events: none;
  }

  .topWraper {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-top: 16px;
  }
  .fieldLong {
    display: flex;

    width: 450px;
    height: 56px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
  }

.transparent{
  color: #ABABAB;
  font-size: 18px;

}

  .fieldShort {
    display: flex;

    width: 215px;
    height: 56px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #b9b9b9;

    border-radius: 8px;
    background: #fff;
  }

  .fieldInput{
    display: flex;

    width: 100%;
    height: 310px;
    padding: 16px 16px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
  }

  .fieldTextShort {
    box-sizing: border-box;

    width: 215px;
    height: 56px;
    padding: 0;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
    
    padding: 4px 16px;
  }

  .fieldTextLong {
    box-sizing: border-box;

    width: 450px;
    height: 56px;
    padding: 0;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
    
    padding: 4px 16px;
  }

  .shortDiv {
    display: flex;
    gap: 14px;
  }
  .marg16 {
    margin-bottom: 16px;
  }
  .bottomWraper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    margin-top: 24px;
  }
  .titleB {
    color: #000;
    margin-bottom: 8px;
    text-align: center;
    /* Subtitle 1.2 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .btnWraper {
    margin-left: 16px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .clearButton {
    position: absolute;
    top: -1.2%;
    right: 0%;
    
    display: flex;
    width: 125px;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: transparent;
    color: #ABABAB;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
  }
  .submitButton {
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 450px;
    height: 56px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    

    border-radius: 8px;
    background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
  }
.chekAnnouncementButton{
  color: #0D0C0C;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;


    display: flex;
    width: 450px;
    height: 56px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    

    border-radius: 8px;
    border: 2px solid #0040BD;
    background: transparent;
}

.buttonContainer{
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 20px;
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

