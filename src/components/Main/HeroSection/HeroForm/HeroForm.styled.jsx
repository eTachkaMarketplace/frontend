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
  background: rgba(20, 20, 20, 0.7);

  .form-flex {
    display: flex;
    gap: 25px;
  }
  .Sbtn {
    width: 200px;
    height: 56px;
    padding: 14px 24px;

    font-size: 22px;
    font-weight: 500;

    background: linear-gradient(160deg, #0040bd 19.1%, #19015b 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
    }

    &:active {
      background: linear-gradient(160deg, rgba(5, 0, 20, 0.6) 19.1%, #050014 78.89%);
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
    }
  }
  .Rbtn {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;
  }
  .error-message {
    /* Subtitle 3 */
    margin-top: 12px;
    color: rgb(250, 102, 102);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
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
  .select {
    width: 100%;
    height: 56px;
    padding: 8px;
    /* border: 1px solid #FFF; */
    color: #b9b9b9;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.13);
    border: none;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 5px;
`;

