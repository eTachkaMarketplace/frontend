import React from 'react';

import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { AuthNavigate } from '../../components/AuthNavigate/AuthNavigate';
import { Container, FormBox} from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <Container>
      <FormBox>
        <RegisterForm />
      </FormBox>

      <AuthNavigate link="/login" text="Log In" />

      
    </Container>
  );
}