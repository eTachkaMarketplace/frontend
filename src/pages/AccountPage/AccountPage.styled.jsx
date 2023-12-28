import styled from 'styled-components';
import { ReactComponent as UserSVG } from '../../images/AccountPage/user.svg';
import { ReactComponent as AnnouncementsSVG } from '../../images/AccountPage/announcements.svg';
import { ReactComponent as FavouritesSVG } from '../../images/AccountPage/favourites.svg';
import { ReactComponent as LogoutSVG } from '../../images/AccountPage/logout.svg';

export const AccountContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 1440px;
  padding: 80px 80px 120px 80px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 410px;
  overflow: hidden;
  .UserNameDiv {
    display: flex;
    gap: 5px;
    overflow: hidden;
  }
  .user-profile_container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* align-items: flex-start;
        gap: 14px;
        flex: 1 0 0; */

    padding: 20px 15px;
    border-radius: 8px;
    background: #f1f1f1;
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
    background: #f1f1f1;
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
`;

export const AnnouncementContainer = styled.div`
  width: 100%;
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

  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

export const Subtitle = styled.h3`
  color: #141414;
  margin-bottom: 20px;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;
