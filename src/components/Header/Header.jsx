import React from 'react';
import { ReactComponent as LogoSVG } from '../../images/Header/LogoSVG.svg';

import {HeaderWrapper,Navigation,User, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText} from './Header.styled'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
      <HeaderWrapper>
        <NavLink to={'/autorithation'}>
        <LogoSVG />
            </NavLink>
          <Navigation>
          <ul>
            <li>
              <StyledLink to="/">Нові</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Вживані</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Під пригон</StyledLink>
            </li>
          </ul>
        </Navigation>
        <User>
          <ButtonSale>
            <StyledAddSVG />
            <ButtonText>Продати</ButtonText>
          </ButtonSale>
          <UserIcon>
            <StyledHeartSVG />
            <NavLink to={'/autorithation'}>
              <StyledUserSVG />
            </NavLink>
            {/* <NavLink to={isLogin ? '/user' : '/login'>
              <StyledUserSVG />
            </NavLink> */}
          </UserIcon>
        </User>
      </HeaderWrapper>
    );
};

export default Header;
