import styled from 'styled-components';

export const SearchListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 30px;
  width: 844px;

  border-radius: 8px;
  background: #fff;

  @media (min-width: 770px) {
    margin-left: 24px;
  } 
  
  .titleDiv {
    width: 844px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .title {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .select {
    display: flex;
    width: 184px;
    padding: 10px 12px;
    align-items: center;
    gap: 10px;

    border-radius: 8px;
    border: 1px solid #b9b9b9;

    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .carsMainList {
    margin-top: 20px;
  }

  .carsDiv {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .enotherONe {
    color: var(--Text-black-2, #4b4b4b);
    /* Subtitle 1.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom:30px;
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
  @media (max-width: 769px) {
    width: 330px;
    .titleDiv {
      width: 330px;
      display: flex;
    }
    .title {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: left;
    }
    .carsMainList {
      margin-top: 16px;
    }
  
}
`;
