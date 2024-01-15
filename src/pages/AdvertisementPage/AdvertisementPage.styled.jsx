import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;


  max-width: 1440px;
  padding: 80px 80px 120px 80px ;
  margin-left: auto;
  margin-right: auto;

`;

export const Title = styled.h2`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;


export const RequiredMarker = styled.span`
  color: red;
  font-size: 22px;
  padding-left: 5px;
`;

export const Paragraph = styled.p`
  color: #4B4B4B;

  margin: 16px 0;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;



