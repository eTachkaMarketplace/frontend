import * as Yup from 'yup';
import { Formik } from 'formik';
import { ReactComponent as HideIcon } from '../../images/eye-slash.svg';
import { ReactComponent as ShowIcon } from '../../images/eye.svg';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import {
  Form,
  Label,
  Field,
  ErrorMessage,
  Input,
  PasswordInput,
  Button,
  HidePassword,
  StrDiv,
  GBtn,
} from './RegisterForm.styled';
import { Box1, Box2, GogleSVG } from 'components/LoginForm/chackBox';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Введіть ім'я")
    .matches(/^\S[\S\s]{0,28}\S$/, "Ім'я повино бути від 3 до 30 Симловлів")
    .test(
      'name-validation',
      'Name must be at least 3 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 3;
      }
    ),
  email: Yup.string()
    .email('Введіть Email')
    .matches(
      /^[a-zA-Z0-9@.]+$/,
      'Email повинен містити латинські літери та цифри'
    )
    .required('Email is required'),
  password: Yup.string()
    .required('Введіть пароль')
    .min(5, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[а-яА-Я]).{5,}$/,
      'Password must not contain spaces'
    ),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', acceptTerms: false }}
      validationSchema={userSchema}
    >
      {({ values, errors, touched, setFieldValue }) => {
        const isValid = field =>
          touched[field] && errors[field]
            ? 'is-invalid'
            : touched[field]
            ? 'is-valid'
            : '';

        return (
          <Form onSubmit={handleSubmit}>
            <Label className={`${isValid('name')} marg24`}>
              <Input>
                <Field
                  className={isValid('name')}
                  type="text"
                  name="name"
                  placeholder="Ім'я"
                />
              </Input>
              {isValid('name') === 'is-valid' && <p>This is a CORRECT name</p>}
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label className={`${isValid('email')} marg24`}>
              <Input>
                <Field
                  className={isValid('email')}
                  type="email"
                  name="email"
                  placeholder="Електрону пошту "
                  title="Email must be in the format username@domain.com"
                  value={values.email}
                />
              </Input>
              {isValid('email') === 'is-valid' && (
                <p>This is a CORRECT email</p>
              )}
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label className={`${isValid('password')} marg8`}>
              <PasswordInput>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  className={isValid('password')}
                  name="password"
                  placeholder="Пароль"
                  value={values.password}
                />
                <HidePassword type="button" onClick={handleShowPassword}>
                  {showPassword ? <ShowIcon /> : <HideIcon />}
                </HidePassword>
              </PasswordInput>
              {isValid('password') === 'is-valid' && (
                <p>This is a CORRECT password</p>
              )}
              <ErrorMessage name="password" component="div" />
            </Label>
            <label className="checkLab">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={values.acceptTerms}
                onChange={e => setFieldValue('acceptTerms', e.target.checked)}
                style={{ display: 'none' }}
              />
              <span
                className={`custom-checkbox ${
                  values.acceptTerms ? 'checked' : ''
                }`}
                onClick={() =>
                  setFieldValue('acceptTerms', !values.acceptTerms)
                }
              >
                {values.acceptTerms ? <Box2 /> : <Box1 />}
              </span>
              Я приймаю умови політики конфіденційності та умови використання
            </label>
            <Button type="submit">Увійти</Button>
            <StrDiv>
              <p className="strange"></p>
              <p className="and">або</p>
              <p className="strange"></p>
            </StrDiv>
            <GBtn type="button">
              <div className="Gdiv">
                <GogleSVG />
                <span className="Gtext">Продовжити через Google</span>
              </div>
            </GBtn>
          </Form>
        );
      }}
    </Formik>
  );
};