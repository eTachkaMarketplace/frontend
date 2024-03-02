import styled from 'styled-components';

export const SearchListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 30px;
  width: 844px;

  border-radius: 8px;
  background: #fff;
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
  .carItem {
    display: flex;
    gap: 20px;
    padding: 16px 16px 20px 16px;
    width: 844px;
    max-height: 240px;
    border-radius: 8px;
    background: #f1f5ff;
    position: relative;
  }
  .img {
    width: 284px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
  }

  .infoDiv {
    margin-top: 20px;
  }
  .modelInfoDIV {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }
  .modelInfo {
    color: #141414;

    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .numberDiv {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
  }
  .number {
    align-self: flex-start;
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    padding: 2px 4px;
    border: 1px solid #ababab;
    border-radius: 4px;
  }

  .listDIV {
    display: flex;
    gap: 60px;
    margin-top: 20px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .itemLI {
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    font-family: 'Roboto', sans-serif;
    color: #4b4b4b;
    font-size: 14px;
  }
  .favoriteBTN {
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 20px;
  }

  .enotherONe {
    color: var(--Text-black-2, #4b4b4b);
    /* Subtitle 1.1 */
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
    .carItem {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 330px;
      max-height: 454px;
      padding: 16px 16px 20px 16px;
      border-radius: 8px;
      background: #f1f5ff;
      position: relative;
    }
    .img {
      width: 298px;
      height: 213px;
      border-radius: 8px;
      object-fit: cover;
    }

    .infoDiv {
      margin-top: 16px;
    }
    .modelInfoDIV {
      display: flex;
      width: 298px;
      justify-content: space-between;
    }
    .modelInfo {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: left;
    }
    .numberDiv {
      display: flex;
      width: auto;
      flex-direction: column;
      gap: 10px;
      margin-top: 16px;
    }
    .number {
      align-self: flex-start;
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;

      padding: 2px 4px 2px 4px;
      border: 1px solid #ababab;
      border-radius: 4px;
    }

    .listDIV {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 18px;
    }
    .list {
      display: flex;
      flex-direction: row;
      gap: 11px;
      justify-content: space-around;
    }
    .itemLI {
      display: flex;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      color: rgb(75, 75, 75);
      font-family: 'Roboto' sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      overflow-x: hidden;
    }
    .favoriteBTN {
      background-color: transparent;
      border: 0;
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
  @media (min-width: 770px) {
    margin-left: 24px;
    .favoriteBTN {
      background-color: transparent;
      border: 0;
      position: absolute;
      right: 20px;
      bottom: 14px;
    }
  }
`;
