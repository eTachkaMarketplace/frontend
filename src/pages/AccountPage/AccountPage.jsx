import React,  { useState, useEffect } from 'react';
import {AccountContainer, StyledUserSVG, StyledAnnouncementsSVG, StyledFavouritesSVG, StyledLogoutSVG, Title,Subtitle, Container, UserContainer, AnnouncementContainer, } from './AccountPage.styled'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import axios  from 'axios'

const AccountPage = () => {
  const dispatch = useDispatch();
  const [selectedNavItem, setSelectedNavItem] = useState('personal');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    email: '',
  })

  const authState = useSelector((state) => state.auth);
  const token = authState.token;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://marketplace-fi3l.onrender.com/api/users/info', {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token.replace(/"/g, '')}`,
          },
        });
        const { firstName, email } = response.data;
        setUserInfo({ firstName, email });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [token]);



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
            <ProfileForm/>
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
            <h3 className="user-profile_title">{userInfo.firstName}</h3>
            <p className="user-profile_text">{userInfo.email}</p>
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
