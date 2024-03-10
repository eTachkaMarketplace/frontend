import styled from 'styled-components';
import { MOB, TAB, DESK1, DESK2 } from '../../../components/constants';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  ${MOB} {
   margin: 30px 30px 80px 30px;
  }

  ${TAB} {
    margin: 60px 100px;
  }

  ${DESK1} {
    margin: 60px 150px;
  }


  ${DESK2} {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    
  }
 `

export const Title = styled.h1`
  color: rgb(20, 20, 20);
  font-size: 18px;
  font-weight: 500;
`;

export const SubTitle = styled.h2`
  color: rgb(20, 20, 20);
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    }

    strong{
      font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 600;
    }
    
  li  {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      }

.list_ul {
            list-style: inside;
            padding: 0; 
          }

`;