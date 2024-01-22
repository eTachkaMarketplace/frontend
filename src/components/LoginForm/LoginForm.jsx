import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { PulseLoader } from 'react-spinners';
import * as Yup from 'yup';

import {
  Form,
  Label,
  Field,
  ErrorMessage,
  Input,
  PasswordInput,
  Button,
  HidePassword,
} from './LoginForm.styled';
import { ErrorSVG, ViewSVG } from './chackBox';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';


const userSchema = Yup.object().shape({
  email: Yup.string()
    .test('is-valid-email', 'Невірний формат Email адреси.', value => {
      return (
        value && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      );
    })
    .required('Введіть Email'),
  password: Yup.string()
    .matches(/^\S*$/, 'Пароль не повинен містити пробіли')
    .required('Введіть пароль'),
});


export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [refError, setRefError] = useState(false);
  const requestError = useSelector(selectError);
  const loader = useSelector(selectIsLoading);


const handleSubmit = async (values, { resetForm, setSubmitting }) => {
  const { email, password } = values;
try {
  await dispatch(login({ email, password }));
  resetForm();
  setSubmitting(false);
  } catch (error) {
      console.error('Error submitting form:', error);
    }
};

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (requestError) setRefError(true);
  }, [requestError]);


  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isValid, errors, handleSubmit }) => {
        return (
          <>
            <Form>
              <Label className={` marg24`}>
                <Input>
                  <Field
                    className={refError ? 'is-invalid' : ''}
                    type="email"
                    name="email"
                    placeholder="Електронна пошта"
                    value={values.email}
                  />

                  {refError ? (
                    <span className="errorSVGemail">
                      <ErrorSVG />
                    </span>
                  ) : null}
                </Input>
                <ErrorMessage name="email" component="div" />
              </Label>
              <Label className={` marg8`}>
                <PasswordInput>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    className={refError ? 'is-invalid' : ''}
                    name="password"
                    placeholder="Пароль"
                    value={values.password}
                  />

                  {refError ? (
                    <span className="errorSVG">
                      <ErrorSVG />
                    </span>
                  ) : null}

                  <HidePassword type="button" onClick={handleShowPassword}>
                    <ViewSVG />
                  </HidePassword>
                </PasswordInput>
                <ErrorMessage name="password" component="div" />
              </Label>
              {refError ? <p className="errorMes">Недійсна пошта або пароль</p> : null}
              <NavLink className="remPassBtn" to="/forgot-password">
                Забули пароль?
              </NavLink>
              <div className="loader">
                <PulseLoader
                  color="#0040bd"
                  loading={loader}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              <Button type="submit">Увійти</Button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};


// validate={values => {
//         const errors = {};
//         if (!values.email || !values.password) {
//           errors.emptyForm = 'Заповніть обидва поля';
//         }
//         console.log(errors.emptyForm);
//         return errors;
//       }}



              // <StrDiv>
              //   <p className="strange"></p>
              //   <p className="and">або</p>
              //   <p className="strange"></p>
              // </StrDiv>
              // <GBtn type="button">
              //   <div className="Gdiv">
              //     <GogleSVG />
              //     <span className="Gtext">Продовжити через Google</span>
              //   </div>
              // </GBtn>


              //   const handleSubmit = async ({ email, password }, { resetForm }) => {
//     try {
//       await dispatch(login({ email, password }));
//       resetForm();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };
