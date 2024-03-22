import { styled } from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  .infoDIV {
    width: 1280px;
    height: 706px;
    border-radius: 8px;
    background: var(--Text-Grey-1, #f1f5ff);
    display: flex;
    gap: 116px;
  }
  .marg32 {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 32px;
    padding-top: 52px;
  }

  .brandBox {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .brandTitle {
    color: var(--text-black-dark, #141414);
    /* H2 */
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .svg {
    position: absolute;
    right: 0;
    top: 54px;
    background-color: transparent;
    border: 0;
  }

  .publickDate {
    color: var(--Text-black-2, #4b4b4b);
    /* Subtitle 3 */
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
  }
  .region {
    display: flex;
    gap: 8px;
    color: var(--firm-color, #0141bd);
    /* Subtitle 2.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 28px;
  }

  .vinBox {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: 8px;
    margin-top: 18px;
  }
  .vin {
    color: var(--Text-black-2, #4b4b4b);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: inline-flex;
    width: fit-content;
    padding: 2px 4px;
    border-radius: 4px;
    border: 1px solid var(--Text-grey-2, #b9b9b9);
  }

  .textInfoBOx {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-top: 26px;
  }
  .textInfoBOxLeft {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .textInfoBOxRight {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .infoText {
    color: var(--Text-black-2, #4b4b4b);
    /* Subtitle 2.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
  }

  .sellerDIV {
    align-self: flex-end;
    margin-bottom: 52px;
  }
  .seller {
    color: var(--Text-black-2, #4b4b4b);
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .sellName {
    color: var(--text-black-dark, #141414);
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .btnNumber {
    color: var(--Text-White, #fff);
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 19px;

    display: flex;
    width: 343px;
    height: 54px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: var(--buttons-accent, linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%));
    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
    }
  }
  .number {
    color: var(--text-black-dark, #141414);
    text-align: center;
    /* Button 1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    width: 343px;
    height: 54px;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 19px;

    border-radius: 8px;
    border: 2px solid var(--firm-color, #0141bd);
  }
  .imgCar {
    width: 765px;
    height: 486px;
    flex-shrink: 0;
    margin-top: 52px;
    object-fit: cover;

    border-radius: 8px;
    background:
      url(<path-to-image>),
      lightgray 50% / cover no-repeat,
      #fff;
  }
  .photoDiv {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .loopDiv {
    position: relative;
  }
  .loop {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 16px;
    bottom: 16px;
    background-color: #fff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .id {
    text-align: end;
    position: absolute;
    right: 0;
    top: 26px;
    color: var(--Text-grey3, #ababab);
    /* Subtitle 3 */
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .secondInfoBox {
    margin-top: 24px;

    width: 1280px;
    min-height: 363px;
    flex-shrink: 0;

    border-radius: 8px;
    background: var(--Text-Grey-1, #f1f5ff);
  }
  .secondTitle {
    color: var(--text-black-dark, #141414);
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .secondMargBox {
    margin-top: 52px;
    margin-left: 32px;
  }
  .secondBOXBOX {
    display: flex;
    justify-content: space-between;
  }
  .leftBox {
    display: flex;
    gap: 108px;
    margin-top: 55px;
  }
  .rightBox {
    display: flex;
    gap: 108px;
    margin-top: 55px;
    padding-left: 32px;
    border-left: 1px solid #b9b9b9;
    padding-right: 32px;
  }
  .leftText {
    width: 190px;
    color: var(--Text-black-2, #4b4b4b);
    /* Subtitle 1.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .rightText {
    color: var(--text-black-dark, #141414);
    /* Subtitle 1.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .gapDIV {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 24px;
  }

  .descriptionBox {
    display: inline-flex;
    padding: 52px 160px 52px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    width: 1280px;
    margin-top: 24px;

    border-radius: 8px;
    background: var(--Text-Grey-1, #f1f5ff);
  }
  .thirdTitle {
    color: var(--text-black-dark, #141414);
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .thirdText {
    color: var(--text-black-dark, #141414);
    /* Subtitle 2.1 */
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 21px;
  }

  .numberDiv {
    width: 1280px;
    display: flex;
    justify-content: space-between;

    align-items: baseline;
    padding: 52px 160px 52px 32px;

    margin-top: 24px;
    margin-bottom: 124px;

    border-radius: 8px;
    background: var(--Text-Grey-1, #f1f5ff);
  }
  .sellerBottom {
    color: var(--Text-black-2, #4b4b4b);
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .splide {
    /* overflow: hidden; */
    width: 765px;
    margin-top: 16px;
  }

  .splide__list {
    display: flex;
  }
  .imgCarCarousel {
    width: 130px;
    height: 100px;
    margin-top: 16px;
    object-fit: cover;

    border-radius: 8px;
    background:
      url(<path-to-image>),
      lightgray 50% / cover no-repeat,
      #fff;
  }
  .splide__arrow--next {
    margin-right: -16px;
    width: 140px;
    height: 100px;
    background: linear-gradient(250deg, #000 0%, rgba(67, 67, 67, 0.24) 90.1%, rgba(255, 255, 255, 0) 100%);
  }
  .splide__arrow--prev {
    margin-left: -16px;
    width: 140px;
    height: 100px;
    background: linear-gradient(90deg, #000 0%, rgba(67, 67, 67, 0.24) 90.1%, rgba(255, 255, 255, 0) 100%);
  }

  .splide__arrow svg {
    fill: #ffffff;
    z-index: 2;
  }

  .splide__arrow {
    opacity: 1;
    border-radius: 8px;
  }

  .splide__slide img {
    border: none;
    outline: none;
  }

  .splide__slide {
    border-radius: 8px;
  }
  .splide__track--nav > .splide__list > .splide__slide.is-active {
    border: none;
  }
  .splide__arrow--prev svg {
    margin-left: -45px;
  }
  .splide__arrow--next svg {
    margin-right: -45px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    .splide {
      /* overflow: hidden; */
      width: 390px;
      margin-bottom: 16px;
      margin-top: 0px;
    }
    .splide__arrow--next {
      margin-right: -16px;
      width: 100px;
      height: 225px;
      background: linear-gradient(270deg, #000 0%, rgba(67, 67, 67, 0.24) 90.1%, rgba(255, 255, 255, 0) 100%);
    }
    .splide__arrow--prev {
      margin-left: -16px;
      width: 100px;
      height: 225px;
      background: linear-gradient(90deg, #000 0%, rgba(67, 67, 67, 0.24) 90.1%, rgba(255, 255, 255, 0) 100%);
    }
    .infoDIV {
      width: 330px;
      height: 484px;
      overflow: hidden;
      border-radius: 8px;
      background: var(--Text-Grey-1, #f1f5ff);
      display: flex;
      gap: 0px;
    }
    .marg32 {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 20px;
      padding-top: 36px;
    }
    .brandBox {
      width: 284px;
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
    .brandTitle {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: 0%;
      text-align: left;
    }
    .svg {
      position: absolute;
      right: 23px;
      top: 38px;
      background-color: transparent;
      border: 0;
    }
    .publickDate {
      color: rgb(171, 171, 171);
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0%;
      text-align: left;
    }
    .region {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      color: rgb(1, 65, 189);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
      margin-top: 12px;
    }
    .vinBox {
      display: flex;
      width: auto;
      flex-direction: column;
      gap: 8px;
      margin-top: 14px;
    }
    .vin {
      color: rgb(75, 75, 75);
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0%;
      text-align: left;

      display: inline-flex;
      width: fit-content;
      padding: 2px 4px;
      border-radius: 4px;
      border: 1px solid var(--Text-grey-2, #b9b9b9);
    }
    .textInfoBOx {
      display: flex;
      align-items: flex-start;
      gap: 40px;
      margin-top: 24px;
    }
    .textInfoBOxLeft {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .textInfoBOxRight {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .infoText {
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: left;

      display: flex;
      gap: 10px;
      justify-content: flex-start;
      align-items: center;
    }
    .sellerDIV {
      align-self: flex-end;
      margin-bottom: 28px;
      margin-top: 34px;
    }
    .seller {
      color: rgb(75, 75, 75);
      /* H4 */
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: left;
    }
    .sellName {
      color: rgb(20, 20, 20);
      /* H4 */
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: left;
    }
    .btnNumber {
      color: var(--Text-White, #fff);
      text-align: center;

      color: rgb(255, 255, 255);
      font-family: 'Roboto' sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;

      display: flex;
      width: 290px;
      height: 48px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 8px;
      background: var(--buttons-accent, linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%));
      &:hover {
        background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
      }
    }
    .number {
      color: var(--text-black-dark, #141414);
      font-family: 'Roboto' sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: center;

      display: flex;
      width: 290px;
      height: 48px;
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      margin-top: 19px;

      border-radius: 8px;
      border: 2px solid var(--firm-color, #0141bd);
    }
    .secondInfoBox {
      margin-top: 16px;

      width: 330px;
      min-height: 357px;
      flex-shrink: 0;

      border-radius: 8px;
      background: var(--Text-Grey-1, #f1f5ff);
    }
    .secondTitle {
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: left;
    }
    .secondMargBox {
      margin-top: 36px;
      margin-left: 20px;
    }
    .secondBOXBOX {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .leftBox {
      display: flex;
      gap: 50px;
      margin-top: 24px;
    }
    .rightBox {
      display: flex;
      gap: 50px;
      margin-top: 16px;
      padding-left: 0;
      border-left: 0px solid #b9b9b9;
      padding-right: 0;
      margin-bottom: 36px;
    }
    .leftText {
      width: 116px;
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
    }
    .rightText {
      color: rgb(20, 20, 20);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
    }
    .gapDIV {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 16px;
    }
    .descriptionBox {
      display: inline-flex;
      padding: 36px 20px 36px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 21px;
      width: 330px;
      margin-top: 16px;

      border-radius: 8px;
      background: var(--Text-Grey-1, #f1f5ff);
    }
    .thirdTitle {
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 0%;
      text-align: left;
    }
    .thirdText {
      color: rgb(75, 75, 75);
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0%;
      text-align: left;
    }
    .numberDiv {
      width: 330px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      align-items: baseline;
      padding: 36px 20px 36px 20px;

      margin-top: 16px;
      margin-bottom: 80px;

      border-radius: 8px;
      background: var(--Text-Grey-1, #f1f5ff);
    }
    .sellerBottom {
      color: var(--Text-black-2, #4b4b4b);
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0%;
      text-align: left;
    }
  }
`;
