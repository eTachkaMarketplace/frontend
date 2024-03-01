import React, { useState, useEffect } from 'react';
import { Container, HeaderWrapper, Navigation, Menu, StyledMobLink, LogoImage, StyledAddMobSVG, StyledMenuOpenSVG, StyledMenuCloseSVG, User, StyledSpan, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText } from './Header.styled';
import { NavLink , useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../images/Header/LOGO.png';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectAdverstisementsFavorite } from 'redux/advertisment/selectors';

const Header = () => {
  const favoritesFromState = useSelector(selectAdverstisementsFavorite);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }, [location]);

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
              <ul className='menu_list'>
                <li className='menu_item'>
                  <NavLink  to="/">головна</NavLink>
                </li>
                <li className='menu_item'>
                  <div className='flex'>
                    <NavLink className='menu_link' to="/search">пошук</NavLink>
                    <ul  className='submenu_list'>
                      <li className='submenu_item'>
                        <NavLink to="/search?category=Нові">Нові</NavLink>
                      </li>
                      <li className='submenu_item'>
                        <NavLink to="/search?category=Вживані">Вживані</NavLink>
                      </li>
                      <li className='submenu_item'>
                        <NavLink to="/search?category=Під пригон">Під пригон</NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='menu_item'>
                  <NavLink to="/advertisementPage">створити оголошення</NavLink>
                </li>
                <li className='menu_item'>
                  <NavLink to={isLoggedIn ? '/account' : '/authorization'}>Мій кабінет</NavLink>
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