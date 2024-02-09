import { LoginForm } from '../../components/LoginForm/LoginForm';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { Container, FormBox} from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Container>
      <FormBox>
        <LoginForm />
      </FormBox>

      <AuthNavigate link="/register" text="Sign up" />

      
    </Container>
  );
}