import React from 'react';
import { ReactComponent as LogoSVG } from '../../images/Header/LogoSVG.svg';

import {Container,LogoutButtonStyled, HeaderWrapper,Navigation,User, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText} from './Header.styled'
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { logoutOperation  } from '../../redux/auth/operations';


const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('IsLoggedIn:', isLoggedIn);

  const handleLogout = () => {
    dispatch(logoutOperation());
  };

    return (
      <Container>
      <HeaderWrapper>
        <NavLink to={'/'}>
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
            <NavLink to={isLoggedIn ? '/account' : '/authorization'}>
              <StyledUserSVG />
            </NavLink>
            <LogoutButtonStyled onClick={handleLogout}>
            Logout
          </LogoutButtonStyled>
            {/* <NavLink to={isLogin ? '/user' : '/login'>
              <StyledUserSVG />
            </NavLink> */}
          </UserIcon>
        </User>
      </HeaderWrapper>
      </Container>
    );
};

export default Header;
