import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { ReactComponent as UserSVG } from '../../images/Header/UserSVG.svg';
import { ReactComponent as HeartSVG } from '../../images/Header/HeartSVG.svg';
import { ReactComponent as AddSVG } from '../../images/Header/AddSVG.svg';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 20px 80px;
  border-bottom: 1px solid #D0D0D0;
  
`;

export const Logo = styled.div`
   
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 40px;
  }

  li {

}
`;
export const StyledLink = styled(Link)`
    color: #0D0C0C;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;

  &:hover {
    color: #0141BD;
   
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  `;

export const UserIcon = styled.div`
display: flex;
align-items: center;
gap: 8px; 
.userBtn{
  border: 0;
  background-color: transparent;
}
`;

export const StyledUserSVG = styled(UserSVG)`
  fill: #000;
  &:hover {
    fill: #0141BD;
    }
`;

export const StyledHeartSVG = styled(HeartSVG)`
  fill: #000;
  &:hover {
    fill: #0141BD;
    }
`;

export const Icon = styled.div`

`;

export const ButtonSale= styled.button`
    display: flex;
    width: 200px;
    height: 56px;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
    gap: 4px;

    background: linear-gradient(144deg, #0040BD 19.1%, #19015B 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(144deg, #0040BD 19.1%, #195B01 78.89%);
    }

    &:active {
      background: linear-gradient(144deg, rgba(5, 0, 20, 0.60) 19.1%, #050014 78.89%);
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const StyledAddSVG = styled(AddSVG)`
  fill: #FFFFFF;
  &:hover {
    /* fill: #9747FF; */
    }
`;

export const ButtonText = styled.div`
    color: #FFF;
    font-family:  'Work Sans', sans-serif;
    font-size: 22px;
    font-weight: 500;
    
  `;
