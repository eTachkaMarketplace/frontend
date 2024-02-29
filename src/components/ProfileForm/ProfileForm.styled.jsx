import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .profilePhoto {
    height: 132px;
    border-radius: 8px;
    background: var(--Text-Grey-1, #f1f5ff);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .photoLable {
    position: relative;
    width: 92px;
    height: 92px;
    flex-shrink: 0;
    margin-left: 20px;
    margin-right: 20px;
  }
  .posit {
    display: flex;
    position: relative;
  }
  .photoIMG {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92px;
    height: 92px;
    overflow: hidden;
    border-radius: 45%;
  }
  .photp {
    width: 92px;
    height: 92px;
    object-fit: cover;
  }
  .plus {
    display: flex;
    bottom: 0;
    right: 10px;
    position: absolute;
    border: 2px solid #f1f5ff;
    border-radius: 50%;
  }
  .pPhoto {
    color: var(--text-black-dark, #141414);
    /* Subtitle 2.2 */
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .pPhoto2 {
    color: var(--Text-black-2, #4b4b4b);
    /* Body */
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .profile-form {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 20px;
    margin: 0;

    border-radius: 8px;
    background: #f1f5ff;

    @media only screen and (max-width: 767px) {
      .flex{
        flex-direction:column;
      }
    }
  }

  .profile-label {
    display: block;
  }

  .profile-label-title {
    color: #141414;
    margin-bottom: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  .profile-input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #141414;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

    border-radius: 8px;
    border: 1px solid #b9b9b9;
    background: #fff;
  }
  .error-message {
    color: var(--red, #fa6666);
    /* Information errors */
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .flex{
    display: flex;
    justify-content: space-between;
  }

  .delete-btn{
    color:black;
    text-decoration: underline;
     @media only screen and (max-width: 767px) {
      margin-top: 15px;
    }
  }

  .profile-btn {
    display: flex;
    width: 200px;
    @media only screen and (max-width: 767px) {
      width: 100%;
      font-size:18px;
    }
    height: 56px;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
    color: #fff;

    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;

    background: linear-gradient(160deg, #0040bd 19.1%, #19015b 78.89%);
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
`;
