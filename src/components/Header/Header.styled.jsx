import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { ReactComponent as UserSVG } from '../../images/Header/UserSVG.svg';
import { ReactComponent as HeartSVG } from '../../images/Header/HeartSVG.svg';
import { ReactComponent as AddSVG } from '../../images/Header/AddSVG.svg';

export const HeaderWrapper = styled.header`
  background-color: transparent;
  color: #141414;
  padding: 20px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    color: #141414;
    font-family: Tektur;
    font-size: 24px;
    font-weight: 500;

  &:hover {
    color: #9747FF;
    text-decoration: underline;
  }
`;

export const StyledImage = styled.img`
  width: 38px;
  height: 38px;
  
  &:hover {
    fill: #9747FF;
    }
`;


export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  `;

export const UserIcon = styled.div`
display: flex;
align-items: center;
gap: 8px; 
`;

export const StyledUserSVG = styled(UserSVG)`
  fill: #141414;
  &:hover {
    fill: #9747FF;
    }
`;

export const StyledHeartSVG = styled(HeartSVG)`
  fill: #141414;
  &:hover {
    fill: #9747FF;
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
    gap: 4px;

    background-color: #9747FF;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: blue;
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
    font-family: Tektur;
    font-size: 24px;
    font-weight: 500;
    
  `;
