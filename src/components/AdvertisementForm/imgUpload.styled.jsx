import styled from 'styled-components';
import { ReactComponent as CameraSVG } from '../../images/AccountPage/camera.svg';
import { ReactComponent as CloseImgSVG } from '../../images/AccountPage/closeImg.svg';
import { MOB, TAB, DESK1, DESK2 } from '../../components/constants';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${MOB} {
    margin: -8px;
  }

  ${TAB} {
    margin: -8px;     
  }

  ${DESK1} {
    margin: -12px;
  }

  ${DESK2} {
    
  }

  .add_label{
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border: 1px dashed #0141BD;
    background: #FFF;
    cursor: pointer;
    
    ${MOB} {
      margin: 8px;
      width: 135px;
      height: 100px;
  }

  ${TAB} {
      margin: 8px;
      width: 200px;
      height: 150px;
  }

  ${DESK1} {
    margin: 12px;
    width: 335px;
    height: 185px;
  }

  ${DESK2} {
    
  }
}

.transpatent_button{
  background: transparent;
  border: none;
  text-decoration: none;
  padding: 0;
  margin: 0;

}


  
`;
export const AddPhotoText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-align: center;
  color: #0141BD;
  /* text-decoration: underline; */
  cursor: pointer;

  ${MOB} {
    font-size: 16px;
  }

  ${TAB} {
    font-size: 19px;
  }

  ${DESK1} {
    font-size: 22px;
  }

  ${DESK2} {
    
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 12px;

  img {
    /* width: 335px;
    height: 185px; */
    object-fit: cover;
    border: 1px solid #ddd;
    border-radius: 4px;
    ${MOB} {

      width: 135px;
    height: 100px;
  }

  ${TAB} {

    width: 200px;
      height: 150px;
  }

  ${DESK1} {
    width: 335px;
    height: 185px;
  }

  ${DESK2} {
    
  }
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #fff;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`;

export const EmptyImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 335px;
    height: 185px; */
    

    border-radius: 8px;
    border: 1px solid #B9B9B9;
    background:  #FFF;

    ${MOB} {
      margin: 8px;
      width: 135px;
    height: 100px;
  }

  ${TAB} {
    margin: 8px;
    width: 200px;
      height: 150px;
  }

  ${DESK1} {
    margin: 12px;
    width: 335px;
    height: 185px;
  }

  ${DESK2} {
    
  }

`;

export const StyledCameraSVG = styled(CameraSVG)`
  stroke:#ABABAB;
  /* &:hover {
    stroke: #0141bd;
  } */
`;

export const StyledCloseImgSVG = styled(CloseImgSVG)`
  stroke: black;

/*   
  &:hover {
    stroke: #0141bd;
  } */
`;
