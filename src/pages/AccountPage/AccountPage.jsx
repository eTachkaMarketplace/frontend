// import React,  { useState, useEffect } from 'react';
// import {AccountContainer, StyledUserSVG, StyledAnnouncementsSVG, StyledFavouritesSVG, StyledLogoutSVG, Title,Subtitle, Container, UserContainer, AnnouncementContainer, } from './AccountPage.styled'
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../redux/auth/authSlice';
// import UserAnnouncement from '../../components/UserAnnouncement/UserAnnouncement';
// import ProfileForm from '../../components/ProfileForm/ProfileForm';
// import { SVG1 } from './AccPageSVG';
// import { useLocation } from 'react-router-dom';
// import { selectUser } from 'redux/auth/selectors';
// import { getUser } from 'redux/auth/operations';
// import { CarSVG, DateSVG, Favorit, FavoritFilled, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from '../../components/SearchList/SearchListSVG';
// import {
//   deleteFavoriteAdverstisementsByID,
// } from 'redux/advertisment/operations';


// const AccountPage = ( {favoritesFromState}) => {
//   const dispatch = useDispatch();
//  const [selectedNavItem, setSelectedNavItem] = useState('personal');
//   const location = useLocation();
// const userInfo = useSelector(selectUser)

// const handleToggleFavorite = id => {
//   dispatch(deleteFavoriteAdverstisementsByID({ id }))
//     .catch(error => console.error('Failed to remove advertisement from favorites', error));
// };

//   useEffect(() => {
//     dispatch(getUser());
//     const searchParams = new URLSearchParams(location.search);
//     const favouritesParam = searchParams.get('favourites');

//     if (favouritesParam === 'true') {
//       setSelectedNavItem('favourites');
//     }
//   }, [dispatch, location.search]);


//   const handleLogout = () => {
//     dispatch(logout());
//     console.log('logout');
//   };
//   const renderContent = () => {
//     switch (selectedNavItem) {
//       case 'personal':
//         return (
//           <div>
//             <Subtitle>Основна інформація</Subtitle>
//             <ProfileForm initialValues={userInfo} />
//           </div>
//         );
//       case 'announcements':
//         return (
//           <div>
//             <UserAnnouncement/>
//           </div>
//         );
//       case 'favourites':
//         return (
//           <div>
//           <p>Обрані оголошення:</p>
//           {favoritesFromState.length > 0 ? (
//             <ul>
//               {favoritesFromState.map(favorite => (
//                 <li key={favorite.id}>
//                   <img className="img" src={favorite.previewImage} alt="car" />
//                   <div className="infoDiv">
//                     <div className="modelInfoDIV">
//                       <h2 className="modelInfo">
//                         {favorite.car.brand} {favorite.car.model} {favorite.car.year}
//                       </h2>
//                       <h2 className="modelInfo">{favorite.car.price}$</h2>
//                     </div>
//                     <div className="numberDiv">
//                       {favorite.car.licensePlate && <h3 className="number">{favorite.car.licensePlate}</h3>}
//                       {favorite.car.vin && <h3 className="number">{favorite.car.vin}</h3>}
//                     </div>
//                     <div className="listDIV">
//                       <ul className="list">
//                         <li className="itemLI">
//                           <DateSVG />
//                           {favorite.car.year}
//                         </li>
//                         <li className="itemLI">
//                           <LockSVG />
//                           {favorite.region}
//                         </li>
//                         <li className="itemLI">
//                           <SpeedometerSVG />
//                           {favorite.car.mileage}
//                         </li>
//                       </ul>
//                       <ul className="list">
//                         <li className="itemLI">
//                           <PetrolSVG />
//                           {favorite.car.engineType}
//                         </li>
//                         <li className="itemLI">
//                           <SlideSVG />
//                           {favorite.car.driveType}
//                         </li>
//                         <li className="itemLI">
//                           <CarSVG />
//                           {favorite.car.transmissionType}
//                         </li>
//                       </ul>
//                     </div>
//                     <button className="favoriteBTN" type="button" onClick={() => handleToggleFavorite(favorite.id)}>
//                       {isFavorite ? <FavoritFilled /> : <Favorit />}
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Ви ще не обрали жодного оголошення в обране.</p>
//           )}
//         </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <AccountContainer>
//       <Title>Особистий кабінет</Title>
//       <Container>
//         <UserContainer>
//           <div className="user-profile_container">
//             <div className='photoDIV'>
//               {userInfo.photo ? (
//                 <img className="photo" src={userInfo.photo} alt="user" />
//               ) : (
//                 <SVG1 />
//               )}
//             </div>
//             <div>
//               <div className="UserNameDiv">
//                 <h3 className="user-profile_title">{userInfo.firstName}</h3>
//                 <h3 className="user-profile_title">{userInfo.lastName}</h3>
//               </div>
//               <p className="user-profile_text">{userInfo.email}</p>
//             </div>
//           </div>

//           <nav className="user-nav_container">
//             <ul className="user-nav_list">
//               <li
//                 className={`user-nav_item ${
//                   selectedNavItem === 'personal' ? 'active' : ''
//                 }`}
//                 onClick={() => setSelectedNavItem('personal')}
//               >
//                 <StyledUserSVG />
//                 Особистий кабінет
//               </li>
//               <li
//                 className={`user-nav_item ${
//                   selectedNavItem === 'announcements' ? 'active' : ''
//                 }`}
//                 onClick={() => setSelectedNavItem('announcements')}
//               >
//                 <StyledAnnouncementsSVG />
//                 Мої оголошення
//               </li>
//               <li
//                 className={`user-nav_item ${
//                   selectedNavItem === 'favourites' ? 'active' : ''
//                 }`}
//                 onClick={() => setSelectedNavItem('favourites')}
//               >
//                 <StyledFavouritesSVG />
//                 Обране
//               </li>
//               <li className="user-nav_item" onClick={handleLogout}>
//                 <StyledLogoutSVG />
//                 Вихід з акаунту
//               </li>
//             </ul>
//           </nav>
//         </UserContainer>

//         <AnnouncementContainer>{renderContent()}</AnnouncementContainer>
//       </Container>
//     </AccountContainer>
//   );
// };

// export default AccountPage;
import React, { useState, useEffect } from 'react';
import { AccountContainer, StyledUserSVG, StyledAnnouncementsSVG, StyledFavouritesSVG, StyledLogoutSVG, Title, Subtitle, Container, UserContainer, AnnouncementContainer, Favorites} from './AccountPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import UserAnnouncement from '../../components/UserAnnouncement/UserAnnouncement';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { SVG1 } from './AccPageSVG';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';
import { getUser } from 'redux/auth/operations';
// import { CarSVG, DateSVG, Favorit, FavoritFilled, LockSVG, PetrolSVG, SlideSVG, SpeedometerSVG } from '../../components/SearchList/SearchListSVG';
import { deleteFavoriteAdverstisementsByID } from 'redux/advertisment/operations';
import { CarItem } from 'components/SearchList/SearchList';
// import { SearchListDiv } from '../../components/SearchList/SearchList.styled';


const AccountPage = ({ favoritesFromState }) => {
  const dispatch = useDispatch();
  const [selectedNavItem, setSelectedNavItem] = useState('personal');
  const location = useLocation();
  const userInfo = useSelector(selectUser);

  const handleToggleFavorite = id => {
    dispatch(deleteFavoriteAdverstisementsByID({ id }))
      .catch(error => console.error('Failed to remove advertisement from favorites', error));
  };

  useEffect(() => {
    dispatch(getUser());
    const searchParams = new URLSearchParams(location.search);
    const favouritesParam = searchParams.get('favourites');

    if (favouritesParam === 'true') {
      setSelectedNavItem('favourites');
    }
  }, [dispatch, location.search]);

  const handleLogout = () => {
    dispatch(logout());
    console.log('logout');
  };

  const renderContent = () => {
    switch (selectedNavItem) {
      case 'personal':
        return (
          <div>
            <Subtitle>Основна інформація</Subtitle>
            <ProfileForm initialValues={userInfo} />
          </div>
        );
      case 'announcements':
        return (
          <div>
            <UserAnnouncement />
          </div>
        );
      case 'favourites':
        return (
          <Favorites>
            <p>Обрані оголошення:</p>
            {favoritesFromState.length > 0 ? (
              <ul>
                {favoritesFromState.map(favorite => (
                  <li key={favorite.id}>
                    <CarItem
                      car={favorite}
                      isFavorite={favoritesFromState.some(fav => fav.id === favorite.id)}
                      toggleFavorite={handleToggleFavorite}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ви ще не обрали жодного оголошення в обране.</p>
            )}
          </Favorites>
        );
      default:
        return null;
    }
  };

  return (
    <AccountContainer>
      <Title>Особистий кабінет</Title>
      <Container>
        <UserContainer>
          <div className="user-profile_container">
            <div className='photoDIV'>
              {userInfo.photo ? (
                <img className="photo" src={userInfo.photo} alt="user" />
              ) : (
                <SVG1 />
              )}
            </div>
            <div>
              <div className="UserNameDiv">
                <h3 className="user-profile_title">{userInfo.firstName}</h3>
                <h3 className="user-profile_title">{userInfo.lastName}</h3>
              </div>
              <p className="user-profile_text">{userInfo.email}</p>
            </div>
          </div>

          <nav className="user-nav_container">
            <ul className="user-nav_list">
              <li
                className={`user-nav_item ${
                  selectedNavItem === 'personal' ? 'active' : ''
                }`}
                onClick={() => setSelectedNavItem('personal')}
              >
                <StyledUserSVG />
                Особистий кабінет
              </li>
              <li
                className={`user-nav_item ${
                  selectedNavItem === 'announcements' ? 'active' : ''
                }`}
                onClick={() => setSelectedNavItem('announcements')}
              >
                <StyledAnnouncementsSVG />
                Мої оголошення
              </li>
              <li
                className={`user-nav_item ${
                  selectedNavItem === 'favourites' ? 'active' : ''
                }`}
                onClick={() => setSelectedNavItem('favourites')}
              >
                <StyledFavouritesSVG />
                Обране
              </li>
              <li className="user-nav_item" onClick={handleLogout}>
                <StyledLogoutSVG />
                Вихід з акаунту
              </li>
            </ul>
          </nav>
        </UserContainer>

        <AnnouncementContainer>{renderContent()}</AnnouncementContainer>
      </Container>
    </AccountContainer>
  );
};

export default AccountPage;
