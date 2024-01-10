import React from 'react';
import {Container, Title, SectionContainer,SectionTitle,StyledArrowSVG,StyledCreateSVG,StyledPostSVG,StyledDoneSVG, } from './AdvertisementPageDone.styled';
import { NavLink } from 'react-router-dom';

const AdvertisementPageDone = () => {
  
  return (
    <Container>
      <Title>Створити оголошення</Title>
      <SectionContainer>
          <SectionTitle>Етапи розміщення оголошення</SectionTitle>
          <div className="styled">
            <StyledArrowSVG />
            <div className="create">
              <StyledCreateSVG />
              <p className="create_text">1. Створення</p>
            </div>
            <div className="post">
              <StyledPostSVG />
              <p className="post_text">2. Публікація</p>
            </div>
          </div>
        </SectionContainer>
        <div className='container_confirm'>
          <StyledDoneSVG/>
          <p className='text_done'>Вітаємо!</p>
          <p className='text_normal'>Ваше оголошення з’явиться на сайті через декілька секунд.</p>
          <NavLink to="/account">
          <button className="button_redirect" type="button">
          В особистий кабінет
          </button>
          </NavLink>
          <NavLink to="/">
          <button className="button_redirect" type="button">
          На головну
          </button>
          </NavLink>
        </div>
    </Container>
  );
};

export default AdvertisementPageDone;