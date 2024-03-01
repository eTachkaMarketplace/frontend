import React from 'react';
import {Container, FooterWrapper, FooterContainer,ListContainer, StyledYoutubeSVG, StyledInstagramSVG, StyledFacebookSVG } from './Footer.styled';
import { LogoImage} from '../Header/Header.styled';
import Logo from '../../images/Footer/Group 99footer.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <NavLink to={'/'}>
        <LogoImage src={Logo} alt="Logo" />
        </NavLink>
        <FooterContainer>
          <ListContainer>
            <ul className="footer_list">
              <li className="footer_item">
                <NavLink to={'/search?category=Нові'}>Нові</NavLink>
              </li>
              <li className="footer_item">
                <NavLink to={'/search?category=Вживані'}>Вживані</NavLink>
              </li>
              <li className="footer_item">
                <NavLink to={'/search?category=Під пригон'}>Під Пригон</NavLink>
              </li>
            </ul>
            <ul className="footer_list">
              <li className="footer_item">
              <NavLink to={'/TermsOfUse'}>Умови використання</NavLink>
              </li>
              <li className="footer_item">
              <NavLink to={'/PrivacyPolicy'}>Політика конфіденційності</NavLink>
              </li>
              <li className="footer_item">
              <NavLink to={'/Rules'}>Правила публікації оголошень</NavLink></li>
            </ul>
            <ul className="footer_list">
              <li className="footer_item">
              <NavLink to={'/FAQ'}>FAQ</NavLink>
              </li>
              <li className="footer_item">
                <NavLink to={'/account'}>Мій кабінет</NavLink>
              </li>
            </ul>
          </ListContainer>
          <ul className="footer-contact_list">
            <li>
              <b className="footer-contact_title">Зв’яжись з нами</b>
            </li>
            <li>
            <NavLink to="/404page" className="footer-contact_link">
                support@gmail.com
            </NavLink>
            </li>
            <li>
              <ul className="footer-contact_list-svg">
                <li>
                <NavLink to="/404page">
                  <StyledYoutubeSVG />
                  </NavLink>
                </li>
                <li>
                <NavLink to="/404page">
                  <StyledFacebookSVG />
                  </NavLink>
                </li>
                <li>
                <NavLink to="/404page">
                  <StyledInstagramSVG />
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <p className="footer-remark">Всі права захищені. 2024</p>
        </FooterContainer>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
