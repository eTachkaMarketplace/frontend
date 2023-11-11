import { Formik } from 'formik';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';

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
} from './LoginForm.styled';
import { ErrorSVG, GogleSVG, ViewSVG } from './chackBox';
import { selectError } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [refError, setRefError] = useState(false);
  const requestError = useSelector(selectError);
  const handleSubmit = e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(login({ email, password }));
    e.currentTarget.reset();
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (requestError) setRefError(true);
  }, [requestError]);

  return (
    <Formik initialValues={{ email: '', password: '' }}>
      {({ values, errors, touched, setFieldValue }) => {
        // const isValid = field =>
        //   touched[field] && errors[field]
        //     ? 'is-invalid'
        //     : touched[field]
        //     ? 'is-valid'
        //     : '';

        return (
          <>
            <Form onSubmit={handleSubmit}>
              {/* <Label className={`${isValid('email')} marg24`}> */}
              <Label className={` marg24`}>
                <Input>
                  <Field
                    className={refError ? 'is-invalid' : ''}
                    type="email"
                    name="email"
                    placeholder="Електрону пошту"
                    value={values.email}
                  />
                  <span className="errorSVGemail">
                    {refError ? <ErrorSVG /> : null}
                  </span>
                </Input>
                <ErrorMessage name="email" component="div" />
              </Label>
              <Label className={` marg8`}>
                {/* <Label className={`${isValid('password')} marg8`}> */}
                <PasswordInput>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    className={refError ? 'is-invalid' : ''}
                    // className={isValid('password')}
                    name="password"
                    placeholder="Пароль"
                    value={values.password}
                  />
                  <span className="errorSVG">
                    {refError ? <ErrorSVG /> : null}
                  </span>
                  <HidePassword type="button" onClick={handleShowPassword}>
                    <ViewSVG />
                  </HidePassword>
                </PasswordInput>
                <ErrorMessage name="password" component="div" />
              </Label>
              {refError ? (
                <p className="errorMes">Недійсна пошта або пароль</p>
              ) : null}
              <button className="remPassBtn" type="button">
                Забули пароль?
              </button>
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
          </>
        );
      }}
    </Formik>
  );
};

// import * as Yup from 'yup';
// const userSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('This is an ERROR email')
//     .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
//     .required('Email is required'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters long')
//     .matches(/^\S*$/, 'Password must not contain spaces'),
//   acceptTerms: Yup.boolean().oneOf(
//     [true],
//     'You must accept the terms and conditions'
//   ),
// });
