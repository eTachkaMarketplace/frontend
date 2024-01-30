import { styled } from 'styled-components';

export const Wraper = styled.div`
  width: 1058px;
  height: 692px;
  flex-shrink: 0;

  .image {
    width: 1058px;
    height: 692px;
    flex-shrink: 0;
    border-radius: 8px;
    object-fit: cover;
    background:
      url(<path-to-image>),
      lightgray 50% / cover no-repeat,
      #fff;
  }
  .custom-pagination {
    color: var(--Text-White, #fff);
    text-align: right;
    /* H4 */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  .custom-arrow {
    width: 32px;
    height: 32px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
  }
  .custom-arrow-prev {
    left: -110px;
    z-index: 1;
  }

  .custom-arrow-next {
    right: -110px;
    z-index: 1;
  }
`;
