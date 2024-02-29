import styled from 'styled-components';

export const Wraper = styled.div`
  .activeDIV {
    display: flex;
    gap: 16px;
  }

  .dropBox {
    /* Frame 427319137 */
    position: absolute;
    width: 134px;
    height: 108px;
    right: 60px;
    bottom: 0;
    /* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;

    border-radius: 8px;

    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .dropBTN {
    /* Body */
    color: rgb(75, 75, 75);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    height: 100%;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: left;
    padding: 10px 12px 10px 12px;
    background: rgb(255, 255, 255);
    border-radius: 8px;
    &:hover,
    &:focus {
      background: rgb(241, 241, 241);
    }
  }
  .activeBTN {
    color: rgb(20, 20, 20);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 24px;

    @media (max-width: 767px) {
      margin-bottom: 10px;
      margin-top: 1px;
    }
  }
  .activeClass {
    color: rgb(1, 65, 189);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0%;
    text-align: left;
    border-bottom: 2px solid rgb(1, 65, 189);
  }
  .carsDiv {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 844px;

     @media (max-width: 767px) {
      width: 100%;
    }

    height: 240px;
    background: rgb(241, 245, 255);
    margin-top: 16px;
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
