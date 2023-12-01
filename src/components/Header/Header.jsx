import React from 'react';
import { ReactComponent as LogoSVG } from '../../images/Header/LogoSVG.svg';

import {Container, HeaderWrapper,Navigation,User, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText} from './Header.styled'
import { NavLink } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import { selectIsLoggedIn  } from '../../redux/auth/selectors';


const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <Container>
      <HeaderWrapper>
        <NavLink to={'/'}>
          <LogoSVG />
        </NavLink>
          <Navigation>
          <ul>
            <li>
              <StyledLink to="/search">Нові</StyledLink>
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
            <NavLink to={isLoggedIn ? '/account' : '/authorization'}>
              <StyledUserSVG />
            </NavLink>
          </UserIcon>
        </User>
      </HeaderWrapper>
      </Container>
    );
};

export default Header;
