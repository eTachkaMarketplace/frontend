import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  width: 412px;
  height: 1286px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  border-radius: 8px;
  background: #f1f1f1;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  label {
    display: flex;
    position: relative;
  }

  label:after {
    content: '▼';
    position: absolute;
    top: 20px;
    right: 16px;
    pointer-events: none;
  }


  .title {
    margin-bottom: 24px;
    width: 372px;

    color: #000;

    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .topWraper {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 16px;
  }
  .fieldLong {
    display: flex;

    width: 380px;
    height: 56px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background: #fff;
  }

  .fieldShort {
    display: flex;

    width: 183px;
    height: 56px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    background: #fff;
  }

  .shortDiv {
    display: flex;
    gap: 14px;
  }
  .marg16 {
    margin-bottom: 16px;
  }
`;
