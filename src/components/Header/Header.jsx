import React, { useEffect } from 'react';
import { Container, HeaderWrapper, Navigation,StyledAddMobSVG,StyledMenuOpenSVG,StyledMenuCloseSVG, User, StyledSpan, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { getAdvFav } from 'redux/advertisment/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Logo from '../../images/Header/LOGO.png';
import { selectAdverstisementsFavorite } from 'redux/advertisment/selectors';

const Header = () => {
  const favoritesFromState = useSelector(selectAdverstisementsFavorite);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
  }, [isLoggedIn]);
 

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
            <StyledAddMobSVG/>
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
            <StyledMenuOpenSVG/>
          </UserIcon>
        </User>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;


// import React, { useEffect, useState } from 'react';
// import { Container, HeaderWrapper, Navigation, User, StyledSpan, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText } from './Header.styled';
// import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAdvFav } from 'redux/advertisment/operations';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import Logo from '../../images/Header/LOGO.png';
// import { selectAdverstisementsFavorite } from 'redux/advertisment/selectors';

// const Header = () => {
//   const dispatch = useDispatch();
//   const favoritesFromState = useSelector(selectAdverstisementsFavorite);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const [favoritesCount, setFavoritesCount] = useState(0);

//   useEffect(() => {
//     dispatch(getAdvFav());
//   }, [dispatch]);

//   useEffect(() => {
//     setFavoritesCount(favoritesFromState.length);
//   }, [favoritesFromState.length]);

//   return (
//     <Container>
//       <HeaderWrapper>
//         <NavLink to={'/'}>
//           <img src={Logo} alt="Logo" />
//         </NavLink>
//         <Navigation>
//           <ul>
//             <li>
//               <StyledLink to="/search?category=Нові">Нові</StyledLink>
//             </li>
//             <li>
//               <StyledLink to="/search?category=Вживані">Вживані</StyledLink>
//             </li>
//             <li>
//               <StyledLink to="/search?category=Під пригон">Під пригон</StyledLink>
//             </li>
//           </ul>
//         </Navigation>
//         <User>
//           <NavLink to="/advertisementPage">
//             <ButtonSale>
//               <StyledAddSVG />
//               <ButtonText>Продати</ButtonText>
//             </ButtonSale>
//           </NavLink>
//           <UserIcon>
//             <NavLink to="/account?favourites=true">
//               <div style={{ position: 'relative' }}>
//                 <StyledHeartSVG />
//                 {favoritesCount > 0 && (
//                   <StyledSpan>
//                     {favoritesCount}
//                   </StyledSpan>
//                 )}
//               </div>
//             </NavLink>
//             <NavLink to={isLoggedIn ? '/account' : '/authorization'}>
//               <StyledUserSVG />
//             </NavLink>
//           </UserIcon>
//         </User>
//       </HeaderWrapper>
//     </Container>
//   );
// };

// export default Header;
