import styled from 'styled-components';
import { MOB, TAB, DESK1,DESK2 } from '../../../constants';

export const BlockWrapper = styled.div`
  position: relative;
  flex-grow: 1;

  ${MOB} {
    display: none;
  }

  ${TAB} {
    display: none;
  }
  ${DESK1} {
    display: none;
  }

  ${DESK2} {
    display: block;
  }

  .circle {
    position: absolute;
    top: -10px;
    left: -15px;
  }
  .allblock {
    width: auto;
    position: relative;
    padding: 20px 30px;
    border-radius: 8px;
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.13);
    display: inline-block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .fsblock {
    position: absolute;
    left: 98px;
    top: 74px;
  }
  .scblock {
    position: absolute;
    left: 500px;
    top: 189px;
  }
  .thblock {
    position: absolute;
    left: 135px;
    top: 471px;
  }
  .text {
    /* H3 */
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0%;
    text-align: center;
  }
`;
