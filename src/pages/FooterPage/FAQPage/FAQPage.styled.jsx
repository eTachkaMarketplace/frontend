import styled from 'styled-components';
import { ReactComponent as ArrowSvg  } from 'images/Footer/FAQ_Arrow.svg';
import { NavLink } from 'react-router-dom';
import { MOB, TAB, DESK1, DESK2 } from '../../../components/constants';


export const StyledArrowIcon = styled(ArrowSvg)`
  width: 25px;
  height: 24px;
  transition: transform 0.3s ease;
  transform: ${({ rotate }) => rotate};
`;

export const NavLinkStyled = styled(NavLink)`
 color: rgb(1, 65, 189);
 `

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 750px; 
  ${MOB} {
   margin: 30px 30px 80px 30px;
   
  }

  ${TAB} {
    margin: 60px 100px;
  }

  ${DESK1} {
    margin: 80px auto;

  }

  ${DESK2} {

  }
 `

export const SubTitle = styled.h2`
color: rgb(20, 20, 20);
font-size: 22px;
font-weight: 500;
margin-top: 30px;
margin-bottom: 15px;
`;


export const Question = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 15px;
    padding-bottom: 20px;
    
    
    border-bottom: 2px solid rgb(241, 241, 241);

    cursor: pointer;
    
    .question{
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;

    color: rgb(20, 20, 20);
    ${MOB} {
      max-width: 280px;
  }
    }
  `;

export const Answer = styled.div`
    color: rgb(75, 75, 75);

   p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    }

    strong{
      font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    }
    
  li  {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      }

  a {
      text-decoration: none; 
  }

  a:hover {
      color: #007bff; 
      text-decoration: underline;
  }

  .list_ol {
    list-style: auto;
    padding-left: 18px; 
    }
    


.list_ul {
            list-style: inside;
            padding: 0; 
          }
`;
