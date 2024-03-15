import styled from 'styled-components';

export const WraperDiv = styled.div`
  position: relative;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 90px 80px 90px;
  border-radius: 8px;
  border: 1px solid #b9b9b9;
  background: #fff;

  .xBtn {
    background: transparent;
    border: 0;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  .title {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .title2 {
    color: green;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 21px;
  }
  .cringe {
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .content {
    margin-top: 6px;
    color: #4b4b4b;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    gap: 40px;
  }
  .buttonStrangeBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 58px;
    gap: 20px;
  }

  .cansel {
    color: #0d0c0c;
    background-color: transparent;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 200px;
    height: 56px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    border: 2px solid #0040bd;
  }
  .cansel2 {
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
  .confirm {
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 200px;
    height: 56px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
    }
  }
  .confirm2 {
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
  .circle {
    display: flex;
    width: 79px;
    height: 79px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-radius: 50px;
    background: var(--green, #069024);
  }
  @media (max-width: 768px) {
    width: 332px;
    padding: 20px 24px 35px 24px;
  }
  .xBtn {
    right: 24px;
    top: 20px;
  }
  .title2 {
    color: rgb(6, 144, 36);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 20px;
  }
  .content {
    margin-top: 16px;
    color: rgb(75, 75, 75);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: center;
  }
  .buttonBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    gap: 12px;
  }
  .title {
    color: rgb(20, 20, 20);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: center;
  }
  .cansel {
    width: 204px;
    height: 48px;

    color: rgb(20, 20, 20);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
  }
  .confirm {
    width: 204px;
    height: 48px;

    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
  }
  .buttonStrangeBox {
    margin-top: 36px;
    gap: 12px;
  }
  .cansel2 {
    width: 204px;
    height: 48px;

    color: rgb(20, 20, 20);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
  }
  .confirm2 {
    width: 204px;
    height: 48px;

    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
  }
  .circle {
    display: flex;
    width: 58px;
    height: 58px;
  }
`;
