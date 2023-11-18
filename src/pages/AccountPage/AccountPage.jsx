import React from 'react';
import {AccountContainer, StyledUserSVG, StyledAnnouncementsSVG, StyledFavouritesSVG, StyledLogoutSVG, Title, Container, UserContainer, AnnouncementContainer, } from './AccountPage.styled'


const AccountPage = () => {
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
              <li className="user-nav_item">
                <StyledUserSVG/>
                Особистий кабінет</li>
              <li className="user-nav_item">
              <StyledAnnouncementsSVG/>
                Мої оголошення</li>
              <li className="user-nav_item">
              <StyledFavouritesSVG/>
                Обране</li>
              <li className="user-nav_item">
              <StyledLogoutSVG/>
                Вихід з акаунту</li>
            </ul>
          </nav>
        </UserContainer>

        <AnnouncementContainer>


        </AnnouncementContainer>

        


      </Container>
    </AccountContainer>
  );
};

export default AccountPage;