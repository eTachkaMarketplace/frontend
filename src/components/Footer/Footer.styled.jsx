import styled from 'styled-components';
import { ReactComponent as YoutubeSVG } from '../../images/Footer/youtube.svg';
import { ReactComponent as InstagramSVG } from '../../images/Footer/instagram.svg';
import { ReactComponent as FacebookSVG } from '../../images/Footer/facebook.svg';
import { MOB, TAB, DESK1, DESK2 } from '../constants';


export const Container = styled.footer`
    background: #141414;

`;

export const FooterWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 1440px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;

  ${MOB} {
    padding: 40px 30px 30px 30px;

  }

  ${TAB} {
    padding: 40px 30px 30px 30px;
  }

  ${DESK1} {
    padding: 40px 80px 100px 80px;

  }

  ${DESK2} {
    
  }

  .footer_list{
    display: flex;
    flex-direction: column;
    gap: 8px;

  }

  .footer_item{
    color: #F1F1F1;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
      }

  .footer_item:hover, .footer_item:focus{
    cursor: pointer;
    text-decoration: underline;
    /* color: ;
    */
      }
      

  .footer-contact_title{
    color: #F1F1F1;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;
  }

  .footer-contact_list-svg{
    display: flex;
    align-items: center;
    gap: 5px;
    padding-top: 10px;
  }

  .footer-contact_list{
    display: flex;
    flex-direction: column;
    
    gap: 7px;

  ${MOB} {
    padding-bottom: 80px;
  }

  ${TAB} {
    padding-bottom: 80px;

  }

  ${DESK1} {
    align-items: flex-end;

  }

  ${DESK2} {
    
  }
  }

  .footer-contact_link{
    font-family: 'Roboto', sans-serif;
    color:  #F1F1F1;
    text-decoration: underline;

  }

  .footer-contact_link:hover{
    color: #0141BD;

  }

  .footer-contact_link:active{
    color: #00308D;

  }

  .footer-remark{
    position: absolute;
    bottom: 6%;
    
    color: #6F6F6F;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

  }

`;

export const FooterContainer = styled.div`
  display: flex;
 

  ${MOB} {
   flex-direction: column;

  }

  ${TAB} {
    flex-direction: column;
  }

  ${DESK1} {
    justify-content: space-between;
  /* align-items: center; */
  align-items: baseline;

  }

  ${DESK2} {
    
  }
`;

export const ListContainer = styled.ul`
  display: flex;
 
  ${MOB} {
   flex-direction: column;
   gap: 40px;
  margin: 60px 0px;

  }

  ${TAB} {
    flex-direction: column;
   gap: 40px;
  margin: 60px 0px;
  }

  ${DESK1} {
  gap: 100px;
  padding-top: 60px;

  }

  ${DESK2} {
    
  }
`;

export const StyledYoutubeSVG = styled(YoutubeSVG)`
  fill: #F1F1F1;
  height: auto;
  &:hover {
    fill: #0141BD;
    cursor: pointer;
    }
    
${MOB} {
  width: 40px;
}

${TAB} {
  width: 40px;
}

${DESK1} {

}

${DESK2} {
  
}
`;

export const StyledInstagramSVG = styled(InstagramSVG)`
  fill: #F1F1F1;
  height: auto;
  &:hover {
    fill: #0141BD;
    cursor: pointer;
    }
${MOB} {
  width: 40px;
}

${TAB} {
  width: 40px;
}

${DESK1} {

}

${DESK2} {
  
}
`;

export const StyledFacebookSVG = styled(FacebookSVG)`
  fill: #F1F1F1;
  height: auto;
  &:hover {
    fill: #0141BD;
    cursor: pointer;
    }
    
${MOB} {
  width: 45px;
}

${TAB} {
  width: 45px;
}

${DESK1} {

}

${DESK2} {
  
}
`;

