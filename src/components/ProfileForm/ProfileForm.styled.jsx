import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .profile-form{
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 20px;
    margin: 0;

    border-radius: 8px;
    background:#F1F1F1;
  }

  .profile-label{
    display: block;
  }

  .profile-label-title{
    color: #141414;
    margin-bottom: 8px;


    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  .profile-input{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #141414;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

    border-radius: 8px;
    border: 1px solid #B9B9B9;
    background:  #FFF;
  }

  .profile-btn{
    display: flex;
    width: 200px;
    height: 56px;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
    color: #fff;

    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;

    background: linear-gradient(160deg, #0040BD 19.1%, #19015B 78.89%);
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
  }

`;
