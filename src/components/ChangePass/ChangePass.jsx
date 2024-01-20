import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { selectError, selectUser } from 'redux/auth/selectors';
import { Button, ErrorMessage, Field, Form, Label, Wraper } from 'components/ForgotPass/ForgotPass.styled';
import { HidePassword, PasswordInput } from 'components/LoginForm/LoginForm.styled';
import { ErrorSVG, ViewSVG } from 'components/LoginForm/chackBox';
import { SvgTreu } from './ChangeSVG';
import { NavLink } from 'react-router-dom';
import { changePass } from 'redux/auth/operations';

const userSchema = Yup.object().shape({
  password: Yup.string()
    .required('Введіть пароль')
    .min(5, 'Пароль повинен містити принаймні 5 символів')
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
  password2: Yup.string()
    .required('Повторіть новий пароль')
    .test('passwords-match', 'Паролі повинні співпадати', function (value) {
      return value === this.parent.password;
    }),
});

export default function ChangePass() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [chacked, setChacked] = useState(false);
  const dispatch = useDispatch();
  const [refError, setRefError] = useState(false);
  const requestError = useSelector(selectError);
  const userInfo = useSelector(selectUser);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const { password } = values;
    try {
      dispatch(changePass({ email: userInfo.email, password: password }));
      setChacked(true);
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
  };
    const handleShowPassword2 = () => {
      setShowPassword2(!showPassword2);
    };

  useEffect(() => {
    if (requestError) setRefError(true);
  }, [requestError]);

  return (
    <>
      {chacked ? (
        <Wraper>
          <div className="circle">
            <SvgTreu />
          </div>
          <h4 className="titleChack">Ваш пароль змінено</h4>
          <p className="text2">Для входу скористайтеся Вашм новим паролем</p>
          <NavLink className="login" to="/authorization">
            Увійти в кабінет
          </NavLink>
          <NavLink className="toMain" to="/">
            На головну
          </NavLink>
        </Wraper>
      ) : (
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ password: '' }}
          validationSchema={userSchema}
        >
          {values => {
            return (
              <Wraper>
                <h4 className="title">Заміна паролю</h4>
                <p className="text">
                  Спочатку введіть новий пароль. А потім повторіть його
                </p>
                <Form>
                  <Label className={` marg8`}>
                    <PasswordInput>
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        className={refError ? 'is-invalid' : ''}
                        name="password"
                        placeholder="Ввеліть новий пароль"
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
                  <Label style={{ marginTop: '24px' }}>
                    <PasswordInput>
                      <Field
                        type={showPassword2 ? 'text' : 'password'}
                        className={refError ? 'is-invalid' : ''}
                        name="password2"
                        placeholder="Повторіть новий пароль"
                        value={values.password2}
                      />

                      {refError ? (
                        <span className="errorSVG">
                          <ErrorSVG />
                        </span>
                      ) : null}

                      <HidePassword type="button" onClick={handleShowPassword2}>
                        <ViewSVG />
                      </HidePassword>
                    </PasswordInput>
                    <ErrorMessage name="password2" component="div" />
                  </Label>
                  <Button type="submit">Зберегти</Button>
                </Form>
              </Wraper>
            );
          }}
        </Formik>
      )}
    </>
  );
}
