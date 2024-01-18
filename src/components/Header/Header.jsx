import React from 'react';

import {Container, HeaderWrapper,Navigation,User, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText} from './Header.styled'
import { NavLink } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Logo from '../../images/Header/LOGO.png'



const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <Container>
        <HeaderWrapper>
          <NavLink to={'/'}>
            <img src={Logo} alt="Logo" />
          </NavLink>
          <Navigation>
            <ul>
              <li>
                <StyledLink to="/search?category=Нові">Нові</StyledLink>
              </li>
              <li>
                <StyledLink to="/search?category=Вживані">Вживані</StyledLink>
              </li>
              <li>
                <StyledLink to="/search?category=Під пригон">Під пригон</StyledLink>
              </li>
            </ul>
          </Navigation>
          <User>
            <NavLink to="/advertisementPage">
              <ButtonSale>
                <StyledAddSVG />
                <ButtonText>Продати</ButtonText>
              </ButtonSale>
            </NavLink>
            <UserIcon>
              <NavLink to="/account?favourites=true">
                <StyledHeartSVG />
              </NavLink>
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
