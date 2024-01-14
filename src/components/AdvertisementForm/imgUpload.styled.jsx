import styled from 'styled-components';
import { ReactComponent as CameraSVG } from '../../images/AccountPage/camera.svg';
import { ReactComponent as CloseImgSVG } from '../../images/AccountPage/closeImg.svg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
  

  .add_label{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 185px;
    margin: 12px;

    border-radius: 8px;
    border: 1px dashed #0141BD;
    background: #FFF;
    cursor: pointer;
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
  font-size: 22px;
  font-weight: 500;
  color: #0141BD;
  /* text-decoration: underline; */
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 12px;

  img {
    width: 335px;
    height: 185px;
    object-fit: cover;
    border: 1px solid #ddd;
    border-radius: 4px;
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
    width: 335px;
    height: 185px;
    margin: 12px;

    border-radius: 8px;
    border: 1px solid #B9B9B9;
    background:  #FFF;

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
