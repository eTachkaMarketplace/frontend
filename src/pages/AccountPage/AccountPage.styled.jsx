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
  padding: 80px 80px 120px 80px ;
  margin-left: auto;
  margin-right: auto;
  
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  
`;


export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    width: 410px;

    .user-profile_container{
        display: flex;
        /* align-items: flex-start;
        gap: 14px;
        flex: 1 0 0; */

        padding: 20px 15px;
        border-radius: 8px;
        background:  #F1F1F1;
    }


    .user-nav_container{
        padding: 20px 15px 20px 0px;
        border-radius: 8px;
        background:  #F1F1F1;
    }
    
    .user-nav_item{
        display: flex;
        padding-left: 15px;
        width: fit-content;
        align-items: center;
        position: relative;

        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
    }

    .user-nav_item::before {
    content: ''; /* обязательно укажите content, чтобы псевдоэлемент был видимым */
    position: absolute; /* используем абсолютное позиционирование */
    top: 0;
    left: 0;
    height: 100%; /* высота линии будет равна высоте элемента */
    width: 3px; /* ширина линии */
    background-color: #0141BD; /* цвет линии */
    opacity: 0; /* начальная непрозрачность (линия будет невидимой) */
    transition: opacity 0.3s ease; /* добавим плавный переход для плавного появления */
}

.user-nav_item:hover::before {
    opacity: 1; /* при наведении устанавливаем полную непрозрачность */
}

    .user-nav_item:hover{
        color:  #0141BD;
    }

    .user-nav_item:not(:last-child){
        margin-bottom: 15px;
    }
    .user-nav_item:last-child{
        margin-top:30px;
    }
    
    
`;


export const AnnouncementContainer = styled.div`
 width: 840px;
  
`;



export const StyledUserSVG = styled(UserSVG)`
  stroke: #141414;
  margin-right: 14px;
  &:hover {
    stroke: #0141BD;
    }
`;


export const StyledAnnouncementsSVG = styled(AnnouncementsSVG)`
 stroke: #141414;
 margin-right: 14px;
  transition: stroke 0.3s; 

  &:hover {
    stroke: #0141BD;
  }
`;


export const StyledFavouritesSVG = styled(FavouritesSVG)`
  stroke: #141414;
  margin-right: 14px;

  &:hover {
    stroke: #0141BD;
    }
`;


export const StyledLogoutSVG = styled(LogoutSVG)`
  stroke: #141414;
  margin-right: 14px;

  &:hover {
    stroke: #0141BD;
    }
`;

export const Title = styled.h2`
    color: #141414;
    margin-bottom: 32px;

    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 500;
`