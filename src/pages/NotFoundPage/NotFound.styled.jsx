import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  background-color: #dcebf7;
  text-align: center;
  width: 90%;
  max-width: 900px;
  height: 80%;
  border-radius: 12px;
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`

export const Pre = styled.pre`

`

export const ErrorIcon = styled.img`
  height: 16rem;
  width: 16rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const HomeButton = styled.a`
  display: flex;
  width: 200px;
  margin-top: 2rem;
  height: 32px;
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
`
