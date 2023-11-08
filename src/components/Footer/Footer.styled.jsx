import styled from 'styled-components';
import { ReactComponent as YoutubeSVG } from '../../images/Footer/youtube.svg';
import { ReactComponent as InstagramSVG } from '../../images/Footer/instagram.svg';
import { ReactComponent as FacebookSVG } from '../../images/Footer/facebook.svg';

export const FooterWrapper = styled.div`
  padding: 40px 80px 100px 80px;
  background: #141414;

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

  .footer-contact_title{
    color: #F1F1F1;
    font-family: 'Work Sans', sans-serif;
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
    align-items: flex-end;
    gap: 7px;

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

`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  align-items: baseline;
`;

export const ListContainer = styled.ul`
  display: flex;
  gap: 100px;
  padding-top: 60px;
`;

export const StyledYoutubeSVG = styled(YoutubeSVG)`
  fill: #F1F1F1;
  &:hover {
    fill: #0141BD;
    }
`;

export const StyledInstagramSVG = styled(InstagramSVG)`
  fill: #F1F1F1;
  &:hover {
    fill: #0141BD;
    }
`;

export const StyledFacebookSVG = styled(FacebookSVG)`
  fill: #F1F1F1;
  &:hover {
    fill: #0141BD;
    }
`;

