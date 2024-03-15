import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserSVG } from '../../images/AccountPage/user.svg';
import { ReactComponent as AnnouncementsSVG } from '../../images/AccountPage/announcements.svg';
import { ReactComponent as FavouritesSVG } from '../../images/AccountPage/favourites.svg';
import { ReactComponent as LogoutSVG } from '../../images/AccountPage/logout.svg';
// import { MOB, TAB, DESK1, DESK2 } from '../../components/constants';


export const AccountContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  min-width:330px;
  max-width: 1440px;
  padding: 80px 80px 120px 80px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    padding: 20px 30px 80px 30px;
  }
`;

export const Container = styled.div`

  @media (min-width: 768px) {
    display: flex;
  }
  
  gap: 30px;
  width: 100%;
`;

export const Favorites = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  width: 100%;

  .carsDiv {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
`;


export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 600px;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 330px;
    flex-direction: column-reverse;
    }

  .photo {
    width: 41px;
    height: 41px;
    object-fit: cover;
    border-radius: 45%;
  }
  .photoDIV {
    width: 41px;
    height: 41px;
  }
  .UserNameDiv {
    display: flex;
    gap: 5px;
    overflow: hidden;
  }
  .user-profile_container {
    display: flex;
    flex-direction: row;
    gap: 4px;
 
    padding: 20px 15px;
    border-radius: 8px;
    background: #F1F5FF;
  }

  .user-profile_title {
    color: #141414;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
  }

  .user-profile_text {
    color: #141414;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .user-nav_container {
    padding: 20px 15px 20px 0;
    border-radius: 8px;
    background: #F1F5FF;

    @media (max-width: 767px) {
      padding: 12px 15px 0 0;
    }
  }

  .user-nav_item {
    display: flex;
    cursor: pointer;
    padding-left: 15px;
    width: fit-content;
    align-items: center;
    position: relative;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  .user-nav_item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #0141bd;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .user-nav_item.active::before {
    opacity: 1;
  }

  .user-nav_item:hover::before {
    opacity: 1;
  }

  .user-nav_item:hover {
    color: #0141bd;
  }

  .user-nav_item:not(:last-child) {
    margin-bottom: 15px;
  }
  .user-nav_item:last-child {
    margin-top: 30px;
  }

  .active {
    color: #0141bd;
    stroke: #0141bd;
  }


  .titleDiv {
    width: 844px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .title {
    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .select {
    display: flex;
    width: 184px;
    padding: 10px 12px;
    align-items: center;
    gap: 10px;

    border-radius: 8px;
    border: 1px solid #b9b9b9;

    color: #141414;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media only screen and (max-width: 767px) {
    .user-nav_list{
      display:flex;

      li{
        display: flex;
        flex-direction: column;
        font-size: 13px;
        width: 25%;
      }
    }
    .long-name{
      display: none;
   }
   .user-nav_item:last-child {
      margin-top: 0;
    }

    .user-nav_item.active::before {
      opacity: 0;
    }

    .user-nav_item:hover::before {
      opacity: 0;
    }
  }
  @media only screen and (min-width: 768px) {
   .short-name{
      display: none;
   }
  }
`;

export const AnnouncementContainer = styled.div`

 width: 100%;
@media only screen and (max-width: 767px) {
 width: 330px;
}
 
`;

export const StyledUserSVG = styled(UserSVG)`
  stroke: #141414;
  margin-right: 14px;
  &:hover {
    stroke: #0141bd;
  }
`;

export const StyledAnnouncementsSVG = styled(AnnouncementsSVG)`
  stroke: #141414;
  margin-right: 14px;
  transition: stroke 0.3s;

  &:hover {
    stroke: #0141bd;
  }
`;

export const StyledFavouritesSVG = styled(FavouritesSVG)`
  stroke: #141414;
  margin-right: 14px;

  &:hover {
    stroke: #0141bd;
  }
`;

export const StyledLogoutSVG = styled(LogoutSVG)`
  stroke: #141414;
  margin-right: 14px;

  &:hover {
    stroke: #0141bd;
  }
`;

export const Title = styled.h2`
  color: #141414;
  margin-bottom: 32px;

  @media (max-width: 767px) {
      margin-bottom: 0;
    }

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
  min-width: 330px;
`;

export const Subtitle = styled.h3`
  color: #141414;
  margin-bottom: 20px;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;

   @media (max-width: 767px) {
    visibility:hidden;
    height: 0;
    margin-bottom:15px;
  }
`;

export const Text = styled.p`
  color: #6F6F6F;
  margin-top: 150px;

  @media (max-width: 767px) {
      margin-top: 5px;
    }

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledNavLink = styled(NavLink)`
  color: blue;
  text-decoration: underline;
`;
