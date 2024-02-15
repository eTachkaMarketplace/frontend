import styled from "styled-components";


export const PagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .paginDiv {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 50px;
    margin-top: 80px;
    margin-bottom: 125px;
  }

  .pagination-button {
    display: flex;
    border: 0;
    background-color: transparent;
    color: #b0a9a9;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .active {
    color: #10187e;
  }
  .hidden {
    display: none;
  }
  .pagination-button-arrow {
    display: flex;
    border: 0;
    background-color: transparent;  }
    
`;
