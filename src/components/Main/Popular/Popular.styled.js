import { styled } from 'styled-components';

export const SectionCar = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1280px;
  margin-top: 120px;

  .carTitle {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .carList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    gap: 20px;
  }
  .carItem {
    position: relative;
    width: 413px;
    height: 383px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 8px;
    background: #f1f5ff;
  }
  .imgCar {
    width: 373px;
    height: 267px;
    border-radius: 8px;
    object-fit: cover;
    margin-left: 20px;
  }
  .blackTitle {
    font-family: 'Roboto', sans-serif;
    color: #141414;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 20px;
    margin-left: 20px;
  }
  .carDescrList {
    display: flex;
    width: 373px;
    margin-top: 8px;
    margin-left: 20px;
    align-items: flex-end;
  }
  .carDescrPrice {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .cityRight {
    margin-left: auto;
  }
  .carDescrCity {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .svg {
    background-color: transparent;
    border: 1px;
    position: absolute;
    right: 36px;
    top: 35px;
  }
  .paginDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 50px;
    margin-top: 80px;
    margin-bottom: 125px;
  }

  .pagination-button {
    display: flex;
    border: 0;
    background-color: transparent;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .active {
    color: rgb(171, 171, 171);
  }
  .hidden {
    display: none;
  }
  .pagination-button-arrow {
    display: flex;
    border: 0;
    background-color: transparent;
  }

  .pagination-button-arrow.disabled {
    color: rgb(171, 171, 171);
  }

  .pagination-button.active {
    color: rgb(171, 171, 171);
  }
  .centrDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


export const pagDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`