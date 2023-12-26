import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 1440px;
  padding: 80px 80px 120px 80px ;
  margin-left: auto;
  margin-right: auto;

  .form{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;
  }

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

  /* label:after {
    content: '▼';
    position: absolute;
    top: 20px;
    right: 16px;
    pointer-events: none;
  } */

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

    width: 450px;
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

    width: 215px;
    height: 56px;
    padding: 4px 16px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #b9b9b9;

    border-radius: 8px;
    background: #fff;
  }
  .fieldTextShort {
    width: 149px;
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
    color: #ABABAB;

    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
  }
  .submitButton {
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

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
`;

export const SectionContainer = styled.div`
  /* max-width: 1440px; */
  padding: 50px 100px;
  margin: 0;

  border-radius: 8px;
  background: #F1F5FF;


`;

export const Title = styled.h2`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

export const SectionTitle = styled.h3`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

export const RequiredMarker = styled.span`
  color: red;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  color: #4B4B4B;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;



