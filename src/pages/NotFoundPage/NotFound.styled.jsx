import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 134px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cansel2 {
    margin-top: 20px;

    color: #0d0c0c;
    background-color: transparent;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 454px;
    height: 54px;
    padding: 14px 24px 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 2px solid #0040bd;
  }
  .confirm2 {
    margin-top: 61px;
    
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 454px;
    height: 54px;
    padding: 14px 24px 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
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
  text-align: left;
`;

export const Subtitle = styled.p`
  margin-top: 21px;
  color: rgb(75, 75, 75);
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: left;
`;
