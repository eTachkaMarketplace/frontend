import React, { useEffect, useState } from 'react';
import { Container, HeaderWrapper, Navigation, Menu, StyledMobLink, LogoImage, StyledAddMobSVG, StyledMenuOpenSVG, StyledMenuCloseSVG, User, StyledSpan, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../images/Header/LOGO.png';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectAdverstisementsFavorite } from 'redux/advertisment/selectors';

const Header = () => {
  const favoritesFromState = useSelector(selectAdverstisementsFavorite);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <HeaderWrapper>
        <NavLink to={'/'}>
          <LogoImage src={Logo} alt="Logo" />
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
          {!isMenuOpen && (
            <>
              <NavLink to="/advertisementPage">
                <ButtonSale>
                  <StyledAddSVG />
                  <ButtonText>Продати</ButtonText>
                </ButtonSale>
              </NavLink>
              
                <UserIcon>
                  <StyledMobLink to="/advertisementPage">
                    <StyledAddMobSVG />
                  </StyledMobLink>
                  <NavLink to="/account?favourites=true">
                    <div style={{ position: 'relative' }}>
                      <StyledHeartSVG />
                      {favoritesFromState.length > 0 && (
                        <StyledSpan>
                          {favoritesFromState.length}
                        </StyledSpan>
                      )}
                    </div>
                  </NavLink>
                  <NavLink to={isLoggedIn ? '/account' : '/authorization'}>
                    <StyledUserSVG />
                  </NavLink>
                </UserIcon>
            </>
          )}          
          {isMenuOpen && (
            <Menu>
              <ul>
                <li>
                  <NavLink to="/example1">Example 1</NavLink>
                </li>
                <li>
                  <NavLink to="/example2">Example 2</NavLink>
                </li>
                <li>
                  <NavLink to="/example3">Example 3</NavLink>
                </li>
              </ul>
            </Menu>
          )}
          {!isMenuOpen && (
            <StyledMenuOpenSVG onClick={toggleMenu} />
          )}
          {isMenuOpen && (
            <StyledMenuCloseSVG onClick={toggleMenu} />
          )}
        </User>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;