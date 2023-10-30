import React from 'react';
import { ReactComponent as LogoSVG } from '../../images/Header/LogoSVG.svg';

import {HeaderWrapper,Navigation,User, StyledLink, UserIcon, ButtonSale, StyledUserSVG, StyledHeartSVG, StyledAddSVG, ButtonText} from './Header.styled'


const Header = () => {
    return (
        <HeaderWrapper>
            <LogoSVG/>
            <Navigation>
                <ul>
                <li><StyledLink to="/">Нові</StyledLink></li>
                <li><StyledLink to="/">Вживані</StyledLink></li>
                <li><StyledLink to="/">Під пригон</StyledLink></li>
                </ul>
            </Navigation>
            <User>
                <UserIcon>
                    <StyledHeartSVG/>
                    <StyledUserSVG/>
                </UserIcon>
                <ButtonSale>
                    <StyledAddSVG/>
                    <ButtonText>Продати</ButtonText>
                </ButtonSale>
            </User>
        </HeaderWrapper>
    );
};

export default Header;
