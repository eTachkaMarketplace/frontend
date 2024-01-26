import { styled } from 'styled-components';


export const Wraper = styled.div`
  width: 1058px;
  height: 692px;
  flex-shrink: 0;

  .image {
    width: 1058px;
    height: 692px;
    flex-shrink: 0;
    border-radius: 8px;
    object-fit: cover;
    background:
      url(<path-to-image>),
      lightgray 50% / cover no-repeat,
      #fff;
  }
  
`;