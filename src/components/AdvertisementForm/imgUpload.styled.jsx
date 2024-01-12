import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .add_label{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 185px;

    border-radius: 8px;
    border: 1px solid #B9B9B9;
    background:  #FFF;
    cursor: pointer;
}
  
`;
export const AddPhotoText = styled.p`
  font-size: 16px;
  color: #555;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 10px;
  margin-bottom: 10px;

  img {
    width: 100px;
    height: 100px;
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

    border-radius: 8px;
    border: 1px solid #B9B9B9;
    background:  #FFF;
    cursor: pointer;


`;
