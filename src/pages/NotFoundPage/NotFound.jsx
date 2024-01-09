import { Container, HomeButton, Pre, Title, ErrorContainer, ErrorIcon, Subtitle } from './NotFound.styled';
import icon from '../../images/NotFoundPage/404-error.png';

export default function NotFound() {
  return (
    <Container>
      <ErrorContainer>
        <Pre>Упс, сталася помилка...</Pre>
        <ErrorIcon src={`${icon}`}/>
        <Title>Здається, ви загубилися?</Title>
        <Subtitle>Ця сторінка не існує.</Subtitle>
        <HomeButton href={"/"}>На головну</HomeButton>
      </ErrorContainer>
    </Container>
  )
}
