import styled from 'styled-components';
import { MOB, TAB, DESK1, DESK2 } from '../../components/constants';

export const Container = styled.div`
  /* position: relative; */

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const ErrorContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MOB} {
    padding:60px 30px 80px 30px;
  }

  ${TAB} {
    padding: 60px 60px 80px 60px;
  }

  ${DESK1} {
    margin-top: 60px;
    margin-bottom: 110px;
  }

  ${DESK2} {
    margin-top: 80px;
    margin-bottom: 134px;
  }

  .cansel2 {
    margin-top: 20px;

    color: #0d0c0c;
    background-color: transparent;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
   
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 2px solid #0040bd;

    ${MOB} {
      font-size: 18px;
    width: 330px;
    height: 48px;
    padding: 10px 20px;

    }

  ${TAB} {
    font-size: 20px;
    width: 330px;
    height: 48px;
    padding: 10px 20px;
    
  }

  ${DESK1} {
    font-size: 22px;

    width: 454px;
    height: 54px;
    padding: 14px 24px 14px 24px;
  }

  ${DESK2} {
 
  }
  }
  .confirm2 {    
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
    }

    ${MOB} {
      font-size: 18px;
      margin-top: 40px;
    width: 330px;
    height: 48px;
    padding: 10px 20px;

    }

  ${TAB} {
    font-size: 20px;
    margin-top: 40px;
    width: 330px;
    height: 48px;
    padding: 10px 20px;
    
  }

  ${DESK1} {
    font-size: 22px;
    margin-top: 61px;
    width: 454px;
    height: 54px;
    padding: 14px 24px 14px 24px;
  }

  ${DESK2} {
 
  }
  }
`;
export const Title = styled.h2`
  margin-top: 40px;
  color: rgb(1, 65, 189);
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0%;
`;

export const Subtitle = styled.p`
  margin-top: 21px;
  color: rgb(75, 75, 75);
  font-family: 'Roboto', sans-serif;
  
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: center;

  ${MOB} {
    font-size: 16px;
  }

  ${TAB} {
    font-size: 19px;
  }

  ${DESK1} {
    font-size: 22px;
  }

  ${DESK2} {
 
  }
`;
