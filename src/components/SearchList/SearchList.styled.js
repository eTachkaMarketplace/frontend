import styled from 'styled-components';

export const SearchListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 30px;
  width: 844px;
  height: 2000px;

  border-radius: 8px;
  background: #f1f1f1;

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

    color:  #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
