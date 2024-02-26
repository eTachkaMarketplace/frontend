import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 16px;
  }
`;