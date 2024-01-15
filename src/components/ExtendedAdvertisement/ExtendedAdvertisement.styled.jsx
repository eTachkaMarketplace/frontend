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
    gap: 128px;
  }
  .marg32 {
    margin-left: 32px;
    margin-top: 52px;
  }
  .brandBox {
    display: flex;
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
    background-color: transparent;
    border: 0;
    margin-left: 24px;
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
  .seller {
    color: var(--Text-black-2, #4b4b4b);
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 132px;
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
    background: var(
      --buttons-accent,
      linear-gradient(144deg, #0040bd 19.1%, #19015b 78.89%)
    );
    &:hover {
      background: linear-gradient(160deg, #0040bd 19.1%, #195b01 78.89%);
    }
  }
  .imgCar {
    width: 713px;
    height: 486px;
    flex-shrink: 0;
    margin-top: 52px;
    object-fit: cover;

    border-radius: 8px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff;
  }
  .carousel {
    display: flex;
    gap: 16px;
  }
  .imgCarCarousel {
    width: 140px;
    height: 100px;
    flex-shrink: 0;
    margin-top: 16px;
    object-fit: cover;

    border-radius: 8px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #fff;
  }
  .secondInfoBox {
    margin-top: 24px;

    width: 1280px;
    height: 363px;
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
    gap: 192px;
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
  }
  .leftText {
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
`;
