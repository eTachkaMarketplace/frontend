import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  width: 518px;
  height: 595px;
  padding: 32px;
  box-sizing: border-box;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  background: rgba(20, 20, 20, 0.70);
`;

export const FormTitle = styled.h2`
  color: #FFF;
  font-family: Work Sans;
  font-size: 24px;
  font-weight: 500;
`;

export const InputContainer = styled.div`
width: 100%;
`;

export const InputLabel = styled.label`
  color: #FFF;
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 500;
`;

export const InputSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #FFF;
  background: transparent;
  color: #FFF;
  font-family: Work Sans;
  font-size: 16px;
  border-radius: 4px;
`;

export const ExtendedSearchLink = styled.a`
  color: #FFF;
  text-decoration: underline;
  cursor: pointer;
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 500;
`;

export const SearchButton = styled.button`
    width: 200px;
    height: 56px;
    padding: 14px 24px;
        
    background: linear-gradient(144deg, #0040BD 19.1%, #19015B 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(144deg, #0040BD 19.1%, #195B01 78.89%);
    }

    &:active {
      background: linear-gradient(144deg, rgba(5, 0, 20, 0.60) 19.1%, #050014 78.89%);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputPlaceholder = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #FFF;
  background: transparent;
  color: #FFF;
  font-family: Work Sans;
  font-size: 16px;
  border-radius: 4px;
  &::placeholder {
    color: #B9B9B9;
  }
`;