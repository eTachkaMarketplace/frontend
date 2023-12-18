import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 1440px;
  padding: 80px 80px 120px 80px ;
  margin-left: auto;
  margin-right: auto;

  .form{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;
  }

`;

export const SectionContainer = styled.div`
  /* max-width: 1440px; */
  padding: 50px 100px;
  margin: 0;

  border-radius: 8px;
  background: #F1F1F1;
`;

export const Title = styled.h2`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

export const SectionTitle = styled.h3`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

export const RequiredMarker = styled.span`
  color: red;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  color: #4B4B4B;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;



