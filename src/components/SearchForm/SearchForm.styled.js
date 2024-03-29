import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  width: 412px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  border-radius: 8px;
  background: #f1f5ff;
  margin-bottom: 69px;

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

  .title {
    margin-left: 4px;
    margin-bottom: 24px;
    width: 372px;

    color: #000;

    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .underTitle {
    color: #4b4b4b;
    margin-bottom: 12px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .arrowDiv {
    position: relative;
  }
  .arrow {
    position: absolute;
    z-index: 1;
    right: 16px;
    top: 12px;
    pointer-events: none;
  }

  .topWraper {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
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
    border: 1px solid #b9b9b9;
  }

  .fieldShort {
    display: flex;

    width: 183px;
    height: 56px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #b9b9b9;

    border-radius: 8px;
    background: #fff;
  }
  .fieldTextShort {
    width: 183px;
    height: 48px;
    padding: 0;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
    padding-block: 0;
    padding-inline: 0;
    padding: 4px 16px;
  }

  .greyOption {
    color: var(--Text-grey-2, #b9b9b9);
    /* Subtitle 3 */
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .fieldTextLong {
    width: 380px;
    height: 48px;
    padding: 0;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #b9b9b9;
    padding-block: 0;
    padding-inline: 0;
    padding: 4px 16px;
  }
  .shortDiv {
    display: flex;
    gap: 14px;
  }

  .marg16 {
    margin-bottom: 16px;
  }
  .bottomWraper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    margin-top: 24px;
  }

  .titleB {
    color: #000;
    margin-bottom: 8px;
    text-align: center;
    /* Subtitle 1.2 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .btnWraper {
    margin-left: 16px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .clearButton {
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: transparent;
    color: #4b4b4b;
    /* Subtitle 2.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .submitButton {
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 16px;

    display: flex;
    width: 200px;
    height: 56px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 8px;
    background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
  }
  @media (max-width: 769px) {
    width: 332px;
    .underTitle {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: left;
    }
    .topWraper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 24px;
      margin-top: 24px;
    }
    .fieldLong {
      width: 282px;
      height: 46px;
      padding: 11px 11px 11px 16px;
      justify-content: space-between;
    }

    .fieldShort {
      width: 135px;
      height: 46px;
      padding: 11px 11px 11px 16px;
    }
    .fieldTextShort {
      width: 135px;
      height: 46px;
      padding: 15px 11px 15px 16px;
    }
    .shortDiv {
      gap: 12px;
    }
    .bottomWraper {
      margin-left: 24px;
      margin-top: 26px;
    }
    .titleB {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: left;
    }
    .fieldTextLong {
      width: 282px;
      height: 46px;
      padding: 11px 11px 11px 16px;
    }
    .btnWraper {
      margin-left: 24px;
      margin-top: 26px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .clearButton {
      display: flex;
      gap: 2px;
      justify-content: center;
      align-items: center;
      border: 0;
      background-color: transparent;
      margin-bottom: 27px;
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;
      /* Text/black 2 */
      border-bottom: 1px solid rgb(75, 75, 75);
    }
    .submitButton {
      color: rgb(255, 255, 255);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;

      display: flex;
      width: 284px;
      height: 48px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border-radius: 8px;
      background: linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%);
    }
  }
`;
