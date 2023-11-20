import React,  { useState } from 'react';
import {AccountContainer, StyledUserSVG, StyledAnnouncementsSVG, StyledFavouritesSVG, StyledLogoutSVG, Title, Container, UserContainer, AnnouncementContainer, } from './AccountPage.styled'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const AccountPage = () => {
  const dispatch = useDispatch();
  const [selectedNavItem, setSelectedNavItem] = useState('personal');


  const handleLogout = () => {
    dispatch(logout());
    console.log('logout');
  };
  const renderContent = () => {
    switch (selectedNavItem) {
      case 'personal':
        return (
          <div>
            <p>Мой аккаунт</p>
          </div>
        );
      case 'announcements':
        return (
          <div>
            <p>Обьявления</p>
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
            <h3>User Name</h3>

          </div>
          <nav className="user-nav_container">
            <ul className="user-nav_list">
              <li className={`user-nav_item ${selectedNavItem === 'personal' ? 'active' : ''}`} onClick={() => setSelectedNavItem('personal')}>
                <StyledUserSVG/>
                Особистий кабінет</li>
              <li className={`user-nav_item ${selectedNavItem === 'announcements' ? 'active' : ''}`} onClick={() => setSelectedNavItem('announcements')}>
                <StyledAnnouncementsSVG />
                Мої оголошення
              </li>
              <li className={`user-nav_item ${selectedNavItem === 'favourites' ? 'active' : ''}`} onClick={() => setSelectedNavItem('favourites')}>
                <StyledFavouritesSVG />
                Обране
              </li>
              <li className="user-nav_item" onClick={handleLogout}>
              <StyledLogoutSVG/>
                Вихід з акаунту</li>
            </ul>
          </nav>
        </UserContainer>

        <AnnouncementContainer>
        {renderContent()}
        </AnnouncementContainer>

        


      </Container>
    </AccountContainer>
  );
};

export default AccountPage;