import { Container,  Title, ErrorContainer,  Subtitle } from './NotFound.styled';
import { ErorSVG } from './SVG';
import { NavLink, } from 'react-router-dom';

export default function NotFound() {

  return (
    <Container>
      <ErrorContainer>
        <ErorSVG />
        <Title>Ууупс!</Title>
        <Subtitle>Помилка 404.<br/>Ця сторінка зараз на реконструкції.</Subtitle>
        <NavLink to="/search">
          <button type="button" className="confirm2">
            Пошук оголошення
          </button>
        </NavLink>
        <NavLink to="/advertisementPage">
          <button type="button" className="cansel2">
            Створити оголошення
          </button>
        </NavLink>
      </ErrorContainer>
    </Container>
  );
}
