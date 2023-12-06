import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  width: 520px;
  /* height: 590px; */
  padding: 30px;
  box-sizing: border-box;

  flex-direction: column;
  gap: 25px;
  border-radius: 16px;
  background: rgba(20, 20, 20, 0.70);

  .form-flex{
    display: flex;
    gap: 25px;
  }
`;

export const FormTitle = styled.h2`
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  `;

export const InputContainer = styled.div`
width: 100%;
`;

// export const InputLabel = styled.label`
//   color: #B9B9B9;
//   font-family:'Roboto', sans-serif;
//   font-size: 16px;
//   font-weight: 500;
// `;

export const InputSelect = styled.select`
  width: 100%;
  height: 56px;
  padding: 8px;
  /* border: 1px solid #FFF; */
  color: #B9B9B9;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.13);
  border: none;
`;

export const ExtendedSearchLink = styled.a`
  color: #FFF;
  text-decoration: underline;
  cursor: pointer;
  font-family:'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 500;
`;

export const SearchButton = styled.button`
    width: 200px;
    height: 56px;
    padding: 14px 24px;

    font-size: 22px;
    font-weight: 500;

    background: linear-gradient(160deg, #0040BD 19.1%, #19015B 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(160deg, #0040BD 19.1%, #195B01 78.89%);
    }

    &:active {
      background: linear-gradient(160deg, rgba(5, 0, 20, 0.60) 19.1%, #050014 78.89%);
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
    }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 5px;
`;

// export const InputPlaceholder = styled.input`
//   width: 100%;
//   height: 40px;
//   padding: 8px;
//   /* border: 1px solid #FFF; */
//   background: transparent;
//   color :#B9B9B9;
//   font-family: 'Roboto', sans-serif;
//   font-size: 16px;
//   border-radius: 4px;
//   &::placeholder {
//     color: #B9B9B9;
//   }
// `;
