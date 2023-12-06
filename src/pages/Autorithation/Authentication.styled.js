import styled from 'styled-components';

export const AutoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 165px;
  margin-bottom: 335px;
  .authBtn {
    color: #000;

    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 0;
    background-color: transparent;
    width: 227px;
    padding-bottom: 16px;
    border-bottom: 1px solid #ababab;
  }
  .active {
    padding-bottom: 14px;
    border-bottom: 3px solid #0141bd;
  }
`;
