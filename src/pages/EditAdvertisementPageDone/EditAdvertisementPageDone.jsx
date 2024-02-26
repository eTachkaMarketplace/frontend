import React  from 'react';
import {Container, Title, SectionContainer,SectionTitle,StyledArrowSVG,StyledEditSVG,StyledRefreshSVG,StyledDoneSVG, } from './EditAdvertisementPageDone.styled';
import { NavLink } from 'react-router-dom';

const EditAdvertisementPageDone = () => {
  
  return (
    <Container>
      <Title>Редагувати оголошення</Title>
      <SectionContainer>
          <SectionTitle>Етапи редагування оголошення</SectionTitle>
          <div className="styled">
            <StyledArrowSVG />
            <div className="create">
              <StyledEditSVG />
              <p className="create_text">1. Редагування</p>
            </div>
            <div className="post">
              <StyledRefreshSVG />
              <p className="post_text">2. Оновлення</p>
            </div>
          </div>
        </SectionContainer>
        <div className='container_confirm'>
          <StyledDoneSVG/>
          <p className='text_done'>Готово!</p>
          <p className='text_normal'>Ви успішно оновили Ваше оголошення. Через декілька секунд воно з’явиться на сайті.</p>
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

export default EditAdvertisementPageDone;