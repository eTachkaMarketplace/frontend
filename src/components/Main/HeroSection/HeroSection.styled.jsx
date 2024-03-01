import styled from 'styled-components';
import HeroBgImage from '../../../images/bgMin.jpg';
import HeroBgMobImage from '../../../images/bgMob.jpg';
import { MOB, TAB, DESK1, DESK2 } from '../../constants';


export const HeroSection = styled.section`
display: flex;
width: 100%;

  ${MOB} {
    justify-content: center;

  background-image: url('${HeroBgMobImage}'); 
  background-size: cover;
  background-position: center;

  padding: 10px;
  }

  ${TAB} {
    justify-content: center;

  background-image: url('${HeroBgMobImage}'); 
  background-size: cover;
  background-position: center;

  padding: 30px;
  }

  ${DESK1} {
  max-height: 732px;
  background-image: url('${HeroBgImage}'); 
  background-size: cover;
  background-position: center;

  padding: 40px 80px 52px 80px;
  }

  ${DESK2} {
    
  }
`;
