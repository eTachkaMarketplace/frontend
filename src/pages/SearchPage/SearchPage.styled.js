import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 16px;
    .menuDiv {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 330px;
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 16px;
      margin-bottom: 12px;
    }
    .dropBox {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      position: absolute;
      width: 184px;
      height: 108px;
      right: 0;
      top: 48px;
      z-index: 1;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
    }
    .titlePage {
      width: 196px;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      box-sizing: border-box;
      /* buttons/accent */
      border: 1px solid #0040bd;
      border-radius: 8px;

      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      text-align: center;
    }
  }
`;
