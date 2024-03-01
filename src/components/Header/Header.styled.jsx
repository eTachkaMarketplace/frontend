import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as UserSVG } from '../../images/Header/UserSVG.svg';
import { ReactComponent as HeartSVG } from '../../images/Header/HeartSVG.svg';
import { ReactComponent as AddSVG } from '../../images/Header/AddSVG.svg';
import { ReactComponent as AddMobSVG } from '../../images/Header/AddMobSVG.svg';
import { ReactComponent as MenuOpenSVG } from '../../images/Header/MenuOpenSVG.svg';
import { ReactComponent as MenuCloseSVG } from '../../images/Header/MenuCloseSVG.svg';
import { MOB, TAB, DESK1, DESK2 } from '../constants';


export const Container = styled.header`
  border-bottom: 1px solid #D0D0D0;

`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 1440px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;

  ${MOB} {
  padding: 15px 30px;
  }

  ${TAB} {

  }

  ${DESK1} {
    padding: 20px 80px;
  }


  ${DESK2} {
    
  }
  

`;

export const LogoImage = styled.img`
${MOB} {
  width: 100px;
  }

  ${TAB} {

  }

  ${DESK1} {
    
  }


  ${DESK2} {
    
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    
    gap: 40px;
  }

  li {

}

${MOB} {
  display: none;
  }


  ${TAB} {

  }


  ${DESK1} {
    
  
  }


  ${DESK2} {
    
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: bisque;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }

  a:hover {
    color: #ffd700; /* измените цвет при наведении, если нужно */
  }
${MOB} {

}

${TAB} {

}

${DESK1} {
  display: none;
}

${DESK2} {
  display: none;
}
`;

export const StyledLink = styled(Link)`
    color: #0D0C0C;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 500;

  &:hover {
    color: #0141BD;

  }

`;

export const StyledMobLink = styled(Link)`
   
  ${MOB} {
  
}


${TAB} {

}


${DESK1} {
  display: none;

}


${DESK2} {
  display: none;

}
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;

  ${MOB} {
  
  }


  ${TAB} {

  }


  ${DESK1} {
    gap: 32px;

  }


  ${DESK2} {
    
  }

  `;

export const UserIcon = styled.div`
display: flex;
align-items: center;

.userBtn{
  border: 0;
  background-color: transparent;
}

${MOB} {
  gap: 10px;
}

${TAB} {
  gap: 13px;
}

${DESK1} {
  gap: 16px;
}

${DESK2} {

}
`;

export const StyledUserSVG = styled(UserSVG)`
  height: auto;
  stroke:#141414;

  &:hover {
    stroke: #0141BD;
    }

${MOB} {
  width: 25px;
}

${TAB} {

}

${DESK1} {

}

${DESK2} {

}
`;

export const StyledHeartSVG = styled(HeartSVG)`
height: auto;
stroke:#141414;
  &:hover {
    stroke: #0141BD;
    }

${MOB} {
  width: 25px;
}


${TAB} {

}


${DESK1} {


}


${DESK2} {
  
}

`;

export const StyledAddMobSVG = styled(AddMobSVG)`

stroke:#141414;
  &:hover {
    stroke: #0141BD;
    }

`;
export const StyledMenuOpenSVG = styled(MenuOpenSVG)`
margin-left: 10px;
stroke:#141414;
  &:hover {
    stroke: #0141BD;
    }

    ${MOB} {

    }

    ${TAB} {

    }

    ${DESK1} {
      display: none;
    }

    ${DESK2} {
      display: none;
    }
`;

export const StyledMenuCloseSVG = styled(MenuCloseSVG)`
stroke:#141414;
  &:hover {
    stroke: #0141BD;
    }

    ${MOB} {

    }

    ${TAB} {

    }

    ${DESK1} {
      display: none;
    }

    ${DESK2} {
      display: none;
    }
`;

export const Icon = styled.div`

`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 10px;
  right: -7px;
  width: 20px; 
  height: 20px; 
  background-color: #0141BD;
  border-radius: 50%; 
  display: flex;
  justify-content: center; 
  align-items: center;
  padding: 3px;
  color: white;
`;

export const ButtonSale= styled.button`
  display: none;

  ${MOB} {
  
  }

  ${TAB} {
    
  }

  ${DESK1} {
    display: flex;
    width: 200px;
    height: 56px;
    padding: 14px 24px;
    align-items: center;
    justify-content: center;
    gap: 4px;

    background: linear-gradient(160deg, #0040BD 19.1%, #19015B 78.89%);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(160deg, #0040BD 19.1%, #195B01 78.89%);
    }

    &:active {
      background: linear-gradient(160deg, rgba(5, 0, 20, 0.60) 19.1%, #050014 78.89%);
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
    }
  }

  ${DESK2} {
    
  }
`;

export const StyledAddSVG = styled(AddSVG)`
  fill: #FFFFFF;
  &:hover {
    /* fill: #9747FF; */
    }
`;


export const ButtonText = styled.div`
    color: #FFF;
    font-family:  'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;

  `;
