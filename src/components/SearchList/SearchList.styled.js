import styled from 'styled-components';

export const SearchListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 30px;
  width: 844px;
  height: 2000px;

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
  .carItem {
    display: flex;
    gap: 20px;
    width: 844px;
    height: 240px;
    border-radius: 8px;
    background: #f1f5ff;
    position: relative;
  }
  .img {
    width: 284px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
    margin-left: 20px;
    margin-top: 20px;
  }
  .infoDiv {
    margin-top: 20px;
  }
  .modelInfoDIV {
    display: flex;
    width: 500px;
    justify-content: space-between;
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
    bottom: 14px;
  }
  .modelInfo {
    color: #141414;

    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
`;
