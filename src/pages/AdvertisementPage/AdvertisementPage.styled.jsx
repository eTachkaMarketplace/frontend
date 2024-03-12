import styled from 'styled-components';
import { MOB, TAB, DESK1, DESK2 } from '../../components/constants';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;


  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  ${MOB} {
    padding: 30px 30px 80px 30px;
  }

  ${TAB} {
    padding: 30px 30px 80px 30px;

  }

  ${DESK1} {
    padding: 80px 80px 120px 80px ;
  }

  ${DESK2} {
    
  }
`;

export const Title = styled.h2`
  color: #141414;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  ${MOB} {
    font-size: 22px;
  }

  ${TAB} {
    font-size: 26px;
  }

  ${DESK1} {
    font-size: 32px;
  }

  ${DESK2} {
    
  }
`;


export const RequiredMarker = styled.span`
  color: red;
  font-size: 22px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Paragraph = styled.p`
  color: #4B4B4B;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  ${MOB} {
    font-size: 12px;
    margin: 5px 0;
  }

  ${TAB} {
    font-size: 14px;
    margin: 10px 0;
  }

  ${DESK1} {
    font-size: 16px;
    margin: 16px 0;
  }

  ${DESK2} {
    
  }
`;



