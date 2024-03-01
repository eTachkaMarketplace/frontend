import styled from 'styled-components';
import { MOB, TAB, DESK1, DESK2 } from '../../../constants';


export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: rgba(20, 20, 20, 0.7);

  ${MOB} {
    width: 100%;
    min-width: 280px;
    max-width: 400px;
    margin: 20px;
    padding: 20px;
    gap: 15px;
    border-radius: 8px;
  }

  ${TAB} {
    width: 100%;
    min-width: 280px;
    max-width: 400px;
    margin: 20px;
    padding: 20px;
    gap: 15px;
    border-radius: 8px;
  }

  ${DESK1} {
  width: 520px;
  padding: 30px;
  gap: 25px;
  border-radius: 16px;
  }

  ${DESK2} {
    
  }

  .form-flex {
    display: flex;
    

  ${MOB} {
      gap: 12px;
  }

  ${TAB} {
    gap: 12px;
  }

  ${DESK1} {
    gap: 25px;
  }

  ${DESK2} {
    
  }
  }
  .Sbtn {
    font-weight: 500;
    background: linear-gradient(160deg, #0040bd 19.1%, #19015b 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
    }

    &:active {
      background: linear-gradient(160deg, rgba(5, 0, 20, 0.6) 19.1%, #050014 78.89%);
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
    }

  ${MOB} {
    width: 100%;
    height: 48px;
    font-size: 16px;
  }

  ${TAB} {
    width: 100%;
    height: 48px;
    font-size: 16px;
  }

  ${DESK1} {
    width: 200px;
    height: 56px;
    padding: 14px 24px;

    font-size: 22px;
  }

  ${DESK2} {
    
  }
  }
  .Rbtn {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;

    ${MOB} {
    font-size: 16px;
  }

  ${TAB} {
    font-size: 16px;
  }

  ${DESK1} {
    font-size: 22px;
  }

  ${DESK2} {
    
  }
  }
  .error-message {
    /* Subtitle 3 */
    margin-top: 12px;
    color: rgb(250, 102, 102);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
  }
`;

export const FormTitle = styled.h2`
  color: #FFF;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;

  ${MOB} {
  font-size: 20px;
  }

  ${TAB} {
    font-size: 20px;
  }

  ${DESK1} {
    font-size: 24px;
    padding-bottom: 5px;
  }

  ${DESK2} {
    
  }
  `;

export const InputContainer = styled.div`
  width: 100%;
  .select {
    width: 100%;
    padding: 8px;
    color: #b9b9b9;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.13);
    border: none;

  ${MOB} {
    font-size: 14px;
    height: 46px;
  }

  ${TAB} {
    font-size: 14px;
    height: 46px;
  }

  ${DESK1} {
    font-size: 18px;
    height: 56px;


  }

  ${DESK2} {
    
  }
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  padding-top: 5px;

  ${MOB} {
    flex-direction: column-reverse;
    gap:20px;
    }

  ${TAB} {
    flex-direction: column-reverse;
    gap:20px;
  }

  ${DESK1} {
    justify-content: space-between;
  }

  ${DESK2} {
    
  }
`;

