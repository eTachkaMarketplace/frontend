import React from 'react';
import {Container, FooterWrapper, FooterContainer,ListContainer, StyledYoutubeSVG, StyledInstagramSVG, StyledFacebookSVG } from './Footer.styled';
import Logo from '../../images/Footer/Group 99footer.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
      <NavLink to={'/'}>
            <img src={Logo} alt="Logo" />
          </NavLink>
        <FooterContainer>
          <ListContainer>
            <ul className="footer_list">
              <li className="footer_item">Нові</li>
              <li className="footer_item">Вживані</li>
              <li className="footer_item">Під Пригон</li>
            </ul>
            <ul className="footer_list">
              <li className="footer_item">Партнерам</li>
              <li className="footer_item">FAQ</li>
              <li className="footer_item">Мій кабінет</li>
            </ul>
            <ul className="footer_list">
              <li className="footer_item">Умови використання</li>
              <li className="footer_item">Політика конфіденційності</li>
              <li className="footer_item">Правила публікації оголошень</li>
            </ul>
          </ListContainer>
          <ul className="footer-contact_list">
            <li>
              <b className="footer-contact_title">Зв’яжись з нами</b>
            </li>
            <li>
              <a
                href="mailto:support@gmail.com"
                className="footer-contact_link"
              >
                support@gmail.com
              </a>
            </li>
            <li>
              <ul className="footer-contact_list-svg">
                <li>
                  <StyledYoutubeSVG />
                </li>
                <li>
                  <StyledFacebookSVG />
                </li>
                <li>
                  <StyledInstagramSVG />
                </li>
              </ul>
            </li>
          </ul>
        </FooterContainer>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
