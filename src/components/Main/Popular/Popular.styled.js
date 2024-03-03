import { styled } from 'styled-components';
import { MOB, TAB, DESK1, DESK2 } from '../../constants';


export const SectionCar = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1280px;
  

  ${MOB} {
    margin: 60px 30px 30px 30px;
    
  }

  ${TAB} {
    margin: 60px 50px 30px 50px;
  }

  ${DESK1} {
    margin: 100px 80px 50px 80px;
  }

  /* ${DESK2} {
    margin: 120px 80px 60px 80px;

  } */

  .carTitle {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

  ${MOB} {
      font-size: 20px;
  }

  ${TAB} {
    font-size: 25px;
  }

  ${DESK1} {
    font-size: 32px;
  }

  ${DESK2} {

  }
  }

  .carList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
   

    ${MOB} {
      gap: 16px;
  }

  ${TAB} {
    gap: 16px;

  }

  ${DESK1} {
    gap: 20px;
    
  }

  ${DESK2} {
    justify-content: start;

  }
  }
  .carItem {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 8px;
    background: #f1f5ff;
    overflow: hidden;

    ${MOB} {
      width: 100%;
      max-width: 400px;
      height: auto;
      /* width: 330px; */
      /* height: 290px; */
      padding: 15px;

  }

  ${TAB} {
    width: 320px;
    height: 290px;
    padding: 15px;
  }

  ${DESK1} {
    width: 400px;
    height: 380px;
    padding: 20px;
  }

  ${DESK2} {

  }
  }

  .carLink{
    display: block;
    width: 100%;
    height: 100%;
  }
  

  .imgCar {
    border-radius: 8px;
    object-fit: cover;

    ${MOB} {
    width: 100%;
    height: 150px;
  }

  ${TAB} {
    width: 100%;
    height: 190px;
  }

  ${DESK1} {
    width: 100%;
    height: 265px;
  }

  ${DESK2} {

  }
  }
  .blackTitle {
    font-family: 'Roboto', sans-serif;
    color: #141414;
    
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  

    ${MOB} {
      font-size: 18px;
      margin-top: 16px;
  }

  ${TAB} {
    font-size: 18px;
    margin-top: 16px;

  }

  ${DESK1} {
    font-size: 22px;
    margin-top: 20px;

  }

  ${DESK2} {

  }
  }
  .carDescrList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
  }

  .carDescrPrice {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    ${MOB} {
      font-size: 20px;
  }

  ${TAB} {
    font-size: 20px;
  }

  ${DESK1} {
    font-size: 22px;
  }
  }

  /* .cityRight {
    margin-left: auto;
  } */
  
  .carDescrCity {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    ${MOB} {
      font-size: 14px;
  }

  ${TAB} {
    font-size: 14px;
  }

  ${DESK1} {
    font-size: 16px;
  }
  }
  .button-fav {
    background-color: transparent;
    border: 1px;
    position: absolute;
  

    ${MOB} {
      right: 25px;
    top: 25px;
  }

  ${TAB} {
    right: 25px;
    top: 25px;
  }

  ${DESK1} {
    right: 36px;
    top: 35px;
    
  }
  }
  .paginDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    gap: 50px;
    margin-top: 80px;
    margin-bottom: 30px;
  }

  .pagination-button {
    display: flex;
    border: 0;
    background-color: transparent;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .active {
    color: rgb(171, 171, 171);
  }
  .hidden {
    display: none;
  }
  .pagination-button-arrow {
    display: flex;
    border: 0;
    background-color: transparent;
  }

  .pagination-button-arrow.disabled {
    color: rgb(171, 171, 171);
  }

  .pagination-button.active {
    color: rgb(171, 171, 171);
  }
  .centrDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
