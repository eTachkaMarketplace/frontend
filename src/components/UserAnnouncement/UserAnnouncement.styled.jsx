import styled from 'styled-components';

export const Wraper = styled.div`

@media (max-width: 769px) {
    width: 330px;
  }
  
  .activeDIV {
    display: flex;
    gap: 16px;
  }

  .dropBox {
    position: absolute;
    width: 134px;
    height: 108px;
    right: 60px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;

    border-radius: 8px;

    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .dropBTN {
    color: rgb(75, 75, 75);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    height: 100%;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
    padding: 10px 12px 10px 12px;
    background: rgb(255, 255, 255);
    border-radius: 8px;
    &:hover,
    &:focus {
      background: rgb(241, 241, 241);
    }
  }
  .activeBTN {
    color: rgb(20, 20, 20);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 24px;

    @media (max-width: 767px) {
      margin-bottom: 10px;
      margin-top: 1px;
    }
  }
  .activeClass {
    color: rgb(1, 65, 189);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: left;
    border-bottom: 2px solid rgb(1, 65, 189);
  }
  
  .carsDiv {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }


  .enotherONe {
    color: var(--Text-black-2, #4b4b4b);
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 844px;
    border-radius: 8px;

    height: 240px;
    background: rgb(241, 245, 255);
    margin-top: 16px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  `;


