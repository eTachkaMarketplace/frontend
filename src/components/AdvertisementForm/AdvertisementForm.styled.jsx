import styled from 'styled-components';
import { MOB, TAB, DESK1, DESK2 } from '../../components/constants';

import { ReactComponent as ArrowSVG } from '../../images/AccountPage/Arrow.svg';
import { ReactComponent as CreateSVG } from '../../images/AccountPage/create.svg';
import { ReactComponent as PostSVG } from '../../images/AccountPage/post.svg';

import { ReactComponent as EditSVG } from '../../images/AccountPage/2.svg';
import { ReactComponent as RefreshSVG } from '../../images/AccountPage/1.svg';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const SectionContainer = styled.div`
  /* max-width: 1440px; */
  
  margin: 0;

  border-radius: 8px;
  background: #F1F5FF;

  ${MOB} {
    padding: 20px;
  }

  ${TAB} {
    padding: 35px;
  }

  ${DESK1} {
    padding: 50px 100px;
  }

  ${DESK2} {
    
  }


.flex{
display: flex;
flex-direction: column;
}
`;

export const SectionTitle = styled.h3`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  ${MOB} {
    font-size: 20px;
    margin-bottom: 10px;
  }

  ${TAB} {
    font-size: 22px;
    margin-bottom: 15px;
  }

  ${DESK1} {
    font-size: 24px;
    margin-bottom: 22px;
  }

  ${DESK2} {
    margin-bottom: 32px;
    
  }
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

export const StyledEditSVG = styled(EditSVG)`
stroke: #fff;
margin-right: 5px;
`;


export const StyledRefreshSVG = styled(RefreshSVG)`
stroke:#4B4B4B;
margin-right: 5px;

`;

export const Form = styled(FormikForm)`
   position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;
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
    width: min-content;
    ${MOB} {
      flex-direction: column;
  }

  ${TAB} {
    flex-direction: column;
  }

  ${DESK1} {
  
  }

  ${DESK2} {
    
  }
  }


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
   font-family: 'Roboto', sans-serif;
   
  ${MOB} {
    font-size: 14px; 
  }

  ${TAB} {
  
  }

  ${DESK1} {
  width: 220px;
  padding-top: 15px;
  font-size: 22px; 
  }

  ${DESK2} {
    
  }
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
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;

  ${MOB} {
    width: 290px;
    height: 46px;
    padding: 4px 10px;
  }

  ${TAB} {
    width: 290px;
    height: 46px;
    padding: 4px 10px;
  
  }

  ${DESK1} {
    width: 450px;
    height: 56px;
    padding: 4px 16px;
  }

  ${DESK2} {
    
  }
  }

.transparent{
  color: #ABABAB;
  font-size: 18px;

}


  .fieldShort {
    display: flex;

    justify-content: space-between;
    align-items: center;
    border: 1px solid #b9b9b9;

    border-radius: 8px;
    background: #fff;

    ${MOB} {
    width: 150px;
    height: 46px;
    padding: 4px 10px;
  }

  ${TAB} {
    width: 150px;
    height: 46px;
    padding: 4px 10px;
  }

  ${DESK1} {
    width: 215px;
    height: 56px;
    padding: 4px 16px;    
  }

  ${DESK2} {
    
  }
  }


.description{
  width: auto;

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
    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
    
    ${MOB} {
    width: 150px;
    height: 46px;
    padding: 4px 10px;
  }

  ${TAB} {
    width: 150px;
    height: 46px;
    padding: 4px 10px;
  }

  ${DESK1} {
    width: 215px;
    height: 56px;
    padding: 4px 16px;    
  }

  ${DESK2} {
    
  }
  }

  .fieldTextLong {
    box-sizing: border-box;
    padding: 0;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
    
  ${MOB} {
    width: 290px;
    height: 46px;
    padding: 4px 10px;
  }

  ${TAB} {
    width: 290px;
    height: 46px;
    padding: 4px 10px;
  }

  ${DESK1} {
    width: 450px;
    height: 56px;
    padding: 4px 16px;
  }

  ${DESK2} {
    
  }
  }

  .shortDiv {
    display: flex;
    gap: 14px;
  }

  .marg16 {
    ${MOB} {
      margin-top: 8px;

  }

  ${TAB} {
    margin-top: 12px;

  }

  ${DESK1} {
   margin-top: 16px;
  }

  ${DESK2} {
    
  }
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

  .submitButton:disabled {
    color: #666666; 
    cursor: not-allowed;
    background: #cccccc; 
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

.error-message{
  color: #fa6666;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}

.buttonContainer{
 display: flex;
 align-items: center;
 flex-direction: column;
 margin-top: 40px;
 gap: 20px;
}
`;


export const Field = styled(FormikField)`
 
  &.is-valid {
    border: 1px solid green;
  }

  &.is-invalid {
    border: 1px solid red;
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

