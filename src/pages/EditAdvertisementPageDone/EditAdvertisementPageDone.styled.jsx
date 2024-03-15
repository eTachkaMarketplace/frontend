import styled from 'styled-components';
import { ReactComponent as ArrowSVG } from '../../images/AccountPage/Arrow.svg';
import { ReactComponent as EditSVG } from '../../images/AccountPage/2.svg';
import { ReactComponent as RefreshSVG } from '../../images/AccountPage/1.svg';
import { ReactComponent as DoneSVG } from '../../images/AccountPage/done.svg';
import { ReactComponent as ArrowMobSVG } from '../../images/AccountPage/ArrowMob.svg';
import { MOB, TAB, DESK1, DESK2 } from '../../components/constants';

export const StyledArrowSVG = styled(ArrowSVG)`
  margin-top: -1px ;
  margin-left: 500px;
`;


export const StyledEditSVG = styled(EditSVG)`
stroke:#4B4B4B;
margin-right: 5px;
${MOB} {
    width: auto;
  height: 18px;
  }

  ${TAB} {
    width: auto;
  height: 18px;
  }

  ${DESK1} {
    width: 30px;
  height: 30px;
  }

  ${DESK2} {
  }
`;

export const StyledArrowMobSVG = styled(ArrowMobSVG)`
  margin-top: -1px ;
  margin-left: 145px;
  `;

export const StyledRefreshSVG = styled(RefreshSVG)`
stroke: #fff;
margin-right: 5px;

${MOB} {
    width: auto;
  height: 18px;
  }

  ${TAB} {
    width: auto;
  height: 18px;
  }

  ${DESK1} {
    width: 30px;
  height: 30px;
  }

  ${DESK2} {    
  }

`;
export const StyledDoneSVG = styled(DoneSVG)`

${MOB} {
    width: auto;
  height: 60px;
  margin-top: 40px;
margin-bottom: 20px;
  }

  ${TAB} {
    width: auto;
  height: 60px;
  margin-top: 40px;
margin-bottom: 20px;
  }

  ${DESK1} {
    margin-top: 65px;
margin-bottom: 30px;
  }
`;


export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;

  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  ${MOB} {
    padding: 30px 30px 80px 30px;
  }

  ${TAB} {
    padding: 30px 30px 80px 30px;

  }

  ${DESK1} {
    padding: 80px 80px 120px 80px ;
  }

  ${DESK2} {
    
  }


.styled{
  position: relative;
  display: block;
  background: #FFF;
  border: 1px solid #B9B9B9;
  border-radius: 10px;

  ${MOB} {
  width: 290px;
  height: 40px;
  }

  ${TAB} {
    width: 300px;
  height: 40px;
  }

  ${DESK1} {
    max-width: 1000px;
  height: 74px;
  }

  ${DESK2} {
  
    
  }
}

.create{
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.post{
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}


.create_text{
  color: #4B4B4B;
  font-family: 'Roboto', sans-serif;

  ${MOB} {
    font-weight: 400;
    font-size: 14px;
  }

  ${TAB} {
    font-weight: 400;
    font-size: 14px;
  }

  ${DESK1} {
    font-weight: 500;
    font-size: 18px;
  }

  ${DESK2} {
  
    
  }
}
.post_text{
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  width: max-content;


  
  ${MOB} {
    font-weight: 400;
    font-size: 14px;
  }

  ${TAB} {
    font-weight: 400;
    font-size: 14px;
  }

  ${DESK1} {
    font-weight: 500;
    font-size: 18px;
  }

  ${DESK2} {
    
  }

}
.container_confirm{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

}

.button_redirect{
    color: #0D0C0C;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;


    display: flex;
    justify-content: center;
    align-items: center;
    

    border-radius: 8px;
    border: 2px solid #0040BD;
    background: transparent;

    ${MOB} {
      font-size: 19px;
    width: 300px;
    height: 48px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  ${TAB} {
    font-size: 19px;
    width: 300px;
    height: 48px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  ${DESK1} {
    font-size: 22px;
    width: 450px;
    height: 56px;
    padding: 14px 24px;
    margin-bottom: 20px;
  }
}


.button_redirect-primary{
 
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;


    display: flex;
    justify-content: center;
    align-items: center;
    

    background: linear-gradient(160deg, #0040BD 19.1%, #19015B 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(160deg, #0040BD 19.1%, #195B01 78.89%);
    }

    &:active {
      background: linear-gradient(160deg, rgba(5, 0, 20, 0.60) 19.1%, #050014 78.89%);
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
    }

    ${MOB} {
      font-size: 19px;
    width: 300px;
    height: 48px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  ${TAB} {
    font-size: 19px;
    width: 300px;
    height: 48px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  ${DESK1} {
    font-size: 22px;
    width: 450px;
    height: 56px;
    padding: 14px 24px;
    margin-bottom: 20px;
  }
}

.button_redirect:hover, .button_redirect:focus{
    border: 2px solid #069024; 
}



.text_done{
  color:  #069024;
  font-family: 'Roboto', sans-serif;

  ${MOB} {
    font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  }

  ${TAB} {
    font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  }

  ${DESK1} {
    font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
  }
}

.text_normal{
  color: #141414;
  font-family: 'Roboto', sans-serif;

  ${MOB} {
    text-align: center;
    font-size: 16px;
  margin-bottom: 50px;
  }

  ${TAB} {
    text-align: center;
    font-size: 18px;
  margin-bottom: 50px;
  }

  ${DESK1} {
    font-size: 22px;
  margin-bottom: 60px;
  }
}


`;

export const SectionContainer = styled.div`
  
  margin: 0;
  box-sizing: border-box;
  width: -webkit-fill-available;

  border-radius: 8px;
  background: #F1F5FF;

  ${MOB} {
    padding: 20px;
  }

  ${TAB} {
    padding: 35px;
  }

  ${DESK1} {
    padding: 50px 100px;
  }

  ${DESK2} {
    
  }
`;

export const Title = styled.h2`
  color: #141414;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  ${MOB} {
    font-size: 22px;
    margin-bottom: 10px;
  }

  ${TAB} {
    font-size: 26px;
    margin-bottom: 10px;

  }

  ${DESK1} {
    font-size: 32px;
    margin-bottom: 10px;

  }

  ${DESK2} {
    
  }
`;

export const SectionTitle = styled.h3`
  color: #141414;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  ${MOB} {
    font-size: 19px;
    margin-bottom: 10px;
  }

  ${TAB} {
    font-size: 22px;
    margin-bottom: 15px;
  }

  ${DESK1} {
    font-size: 24px;
    margin-bottom: 22px;
  }

  ${DESK2} {
    margin-bottom: 32px;
    
  }
`;



