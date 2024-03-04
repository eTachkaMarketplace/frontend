import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 854px;
  @media (max-width: 769px) {
    width: 330px;
  }
  @media (min-width: 770px) {
    margin-left: 24px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  width: auto;
  height: 30px;
  padding: 6px 9px 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;

  border-radius: 8px;
  background: #0141bd;

  color: #fff;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 769px) {
    height: 30px;
    gap: 12px;
  }
`;