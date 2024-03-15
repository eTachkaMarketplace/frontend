import React , {  useEffect, useState } from 'react';
import {Container, Title, SectionContainer,SectionTitle,StyledArrowMobSVG, StyledArrowSVG,StyledCreateSVG,StyledPostSVG,StyledDoneSVG, } from './AdvertisementPageDone.styled';
import { NavLink } from 'react-router-dom';

const AdvertisementPageDone = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Title>Створити оголошення</Title>
      <SectionContainer>
        <SectionTitle>Етапи розміщення оголошення</SectionTitle>
        <div className="styled">
          {windowWidth <= 1000 ? <StyledArrowMobSVG /> : <StyledArrowSVG />}
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
          <button className="button_redirect-primary" type="button">
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