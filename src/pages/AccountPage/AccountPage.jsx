import React,  { useState, useEffect } from 'react';
import {AccountContainer, StyledUserSVG, StyledAnnouncementsSVG, StyledFavouritesSVG, StyledLogoutSVG, Title,Subtitle, Container, UserContainer, AnnouncementContainer, } from './AccountPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import UserAnnouncement from '../../components/UserAnnouncement/UserAnnouncement';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { getUser } from 'redux/user/opetations';
import { selectUser } from 'redux/user/selectors';
import { SVG1 } from './AccPageSVG';
import { useLocation } from 'react-router-dom';

const AccountPage = () => {
  const dispatch = useDispatch();
 const [selectedNavItem, setSelectedNavItem] = useState('personal');
  const location = useLocation();
const userInfo = useSelector(selectUser)

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
            <UserAnnouncement/>
          </div>
        );
      case 'favourites':
        return (
          <div>
            <p>Любимые</p>
          </div>
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
