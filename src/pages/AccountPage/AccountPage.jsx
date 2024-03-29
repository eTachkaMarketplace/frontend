import React, { useState, useEffect } from 'react';
import {
  AccountContainer,
  StyledUserSVG,
  StyledAnnouncementsSVG,
  StyledFavouritesSVG,
  StyledLogoutSVG,
  Title,
  Subtitle,
  Container,
  UserContainer,
  AnnouncementContainer,
  Favorites,
  Text,
  StyledNavLink,
} from './AccountPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import UserAnnouncement from '../../components/UserAnnouncement/UserAnnouncement';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { SVG1 } from './AccPageSVG';
import { useLocation } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';

import { deleteFavoriteAdverstisementsByID } from 'redux/advertisment/operations';
import { getAdvFav } from 'redux/advertisment/operations';
import { deleteUser, getUser } from 'redux/auth/operations';
import { CarItem } from 'components/SearchList/SearchList';
// import { CarItemStyled } from '../../components/UserAnnouncement/CarItem.styled';


import Modal from 'modal/modal';

const AccountPage = ({ favoritesFromState }) => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  const userInfo = useSelector(selectUser);

  const [selectedNavItem, setSelectedNavItem] = useState('personal');
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const favouritesParam = searchParams.get('favourites');

    if (favouritesParam === 'true') {
      setSelectedNavItem('favourites');
    }
  }, [dispatch, location.search]);

  useEffect(() => {
    dispatch(getAdvFav());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    setFavorites(favoritesFromState);
  }, [favoritesFromState]);

  const handleToggleFavorite = id => {
    dispatch(deleteFavoriteAdverstisementsByID({ id }))
      .then(() => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
        setFavorites(updatedFavorites);
        setTimeout(() => {
          dispatch(getAdvFav());
        }, 500);
      })
      .catch(error => console.error('Failed to remove advertisement from favorites', error));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(getAdvFav());
  };

  const handleDeleteAccount = () => {
    
      dispatch(deleteUser())
        
      console.log('User account deleted successfully');
      
      
    }

  
  const renderContent = () => {
    switch (selectedNavItem) {
      case 'personal':
        return (
          <div>
            <Subtitle>Основна інформація</Subtitle>
            <ProfileForm initialValues={userInfo} handleDeleteAccount={handleDeleteAccount}/>
          </div>
        );
      case 'announcements':
        return (
          <div>
            <UserAnnouncement setModalContent={setModalContent} />
          </div>
        );
      case 'favourites':
        return (
          <Favorites>
            <Subtitle>
              Обрані оголошення{favorites.length > 0 && <span className="ml-1">({favorites.length})</span>}:
            </Subtitle>
            {favorites.length > 0 ? (
              <ul className="carsDiv">
                {favorites.map(favorite => (
                  <CarItem
                    key={favorite.id}
                    car={favorite}
                    isFavorite={favorites.some(fav => fav.id === favorite.id)}
                    toggleFavorite={handleToggleFavorite}
                  />
                ))}
              </ul>
            ) : (
              <Text>
                Ви ще не додали оголошення в обране. Щоб розпочати пошук натисніть{' '}
                <StyledNavLink to="/search">тут</StyledNavLink>.
              </Text>
            )}
          </Favorites>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AccountContainer>
        <Title >Особистий кабінет</Title>
        <Container>
          <UserContainer>
            <div className="user-profile_container">
              <div className="photoDIV">
                {userInfo.photo ? <img className="photo" src={userInfo.photo} alt="user" /> : <SVG1 />}
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
                  className={`user-nav_item ${selectedNavItem === 'personal' ? 'active' : ''}`}
                  onClick={() => setSelectedNavItem('personal')}
                >
                  <StyledUserSVG />
                  <div className="long-name">Особистий кабінет</div>
                  <div className="short-name">Профіль</div>
                </li>
                <li
                  className={`user-nav_item ${selectedNavItem === 'announcements' ? 'active' : ''}`}
                  onClick={() => setSelectedNavItem('announcements')}
                >
                  <StyledAnnouncementsSVG />
                  <div className="long-name">Мої оголошення</div>
                  <div className="short-name">Оголошення</div>
                </li>
                <li
                  className={`user-nav_item ${selectedNavItem === 'favourites' ? 'active' : ''}`}
                  onClick={() => setSelectedNavItem('favourites')}
                >
                  <StyledFavouritesSVG />
                  Обране{favorites.length > 0 && <span className="ml-1">({favorites.length})</span>}
                </li>
                <li className="user-nav_item" onClick={handleLogout}>
                  <StyledLogoutSVG />
                  <div className="long-name">Вихід з акаунту</div>
                  <div className="short-name">Вихід</div>
                </li>
              </ul>
            </nav>
          </UserContainer>

          <AnnouncementContainer>{renderContent()}</AnnouncementContainer>
        </Container>
      </AccountContainer>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
};

export default AccountPage;
