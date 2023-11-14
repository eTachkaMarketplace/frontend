import * as Yup from 'yup';
import { Formik } from 'formik';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { CorrectSVG, EyeSVG, InCorrectSVG } from './RegisterSVG';
import { PulseLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/auth/selectors';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Введіть ім'я")
    .min(2, "Ім'я повинно бути принаймні 2 символи")
    .matches(/^[^\d]+$/, "Ім'я не повинно містити цифри")
    .test(
      'name-validation',
      '',
      value => {
        return value && value.replace(/\s/g, '').length >= 2;
      }
    ),
  email: Yup.string()
    .test('is-valid-email', 'Невірна email адреса.', value => {
      return (
        value && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      );
    })
    .required('Введіть Email'),
  password: Yup.string()
    .required('Введіть пароль')
    .min(5, 'Пароль повинен містити принаймні 6 символів')
    .matches(
      /^[^\u0400-\u04FF]*$/,
      'Пароль не повинен містити кириличні символи'
    )
    .matches(
      /^(?=.*[A-Z])/,
      'Пароль повинен містити принаймні одну велику літеру'
    )
    .matches(
      /^(?=.*[a-z])/,
      'Пароль повинен містити принаймні одну малу літеру'
    )
    .matches(/^(?=.*\d)/, 'Пароль повинен містити принаймні одну цифру')
    .matches(/^[^\s]*$/, 'Пароль не повинен містити пробіли'),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const loader = useSelector(selectIsLoading);

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
        const isFormValid =
          Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

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
                {isValid('name') === 'is-valid' && (
                  <span className="errorSVGemail">
                    <CorrectSVG />
                  </span>
                )}
                {isValid('name') === 'is-invalid' && (
                  <span className="errorSVGemail">
                    <InCorrectSVG />
                  </span>
                )}
              </Input>
              {/* {isValid('name') === 'is-valid' && (
                <p className="correct">This is a CORRECT name</p>
              )} */}
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
                {isValid('email') === 'is-valid' && (
                  <span className="errorSVGemail">
                    <CorrectSVG />
                  </span>
                )}
                {isValid('email') === 'is-invalid' && (
                  <span className="errorSVGemail">
                    <InCorrectSVG />
                  </span>
                )}
              </Input>
              {/* {isValid('email') === 'is-valid' && (
                <p className="correct">This is a CORRECT email</p>
              )} */}
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label className={`${isValid('password')}`}>
              <PasswordInput>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  className={isValid('password')}
                  name="password"
                  placeholder="Пароль"
                  value={values.password}
                />
                <HidePassword type="button" onClick={handleShowPassword}>
                  {<EyeSVG />}
                </HidePassword>
                {isValid('password') === 'is-valid' && (
                  <span className="errorSVGpass">
                    <CorrectSVG />
                  </span>
                )}
                {isValid('password') === 'is-invalid' && (
                  <span className="errorSVGpass">
                    <InCorrectSVG />
                  </span>
                )}
              </PasswordInput>
              {/* {isValid('password') === 'is-valid' && (
                <p className="correct">This is a CORRECT password</p>
              )} */}
              <ErrorMessage name="password" component="div" />
            </Label>
            <label className="checkLab">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={values.acceptTerms}
                onChange={e => setFieldValue('acceptTerms', e.target.checked)}
                style={{ position: 'absolute', opacity: 0 }}
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
            <div className="loader">
              <PulseLoader
                color="#0040bd"
                loading={loader}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            <Button type="submit" disabled={!isFormValid}>
              Зареєструватись
            </Button>
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
