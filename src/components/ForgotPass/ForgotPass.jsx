import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, ErrorMessage, Field, Label, Input, Wraper, Button } from './ForgotPass.styled';
import { ErrorSVG } from 'components/LoginForm/chackBox';
import { useEffect, useState } from 'react';
import { selectError } from 'redux/user/selectors';
import { forgotPass } from 'redux/user/opetations';
import { NavLink } from 'react-router-dom';

const userSchema = Yup.object().shape({
  email: Yup.string()
    .test('is-valid-email', 'Невірний формат Email адреси.', value => {
      return (
        value && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
      );
    })
    .required('Введіть Email'),
});

export default function ForgotPass() {
  const dispatch = useDispatch();
  const [refError, setRefError] = useState(false);
  const [chacked, setChacked] = useState(false);
  const requestError = useSelector(selectError);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const { email } = values;
    try {
      dispatch(forgotPass({ email }));
      setChacked(true);
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    if (requestError) setRefError(true);
  }, [requestError]);

  return (
    <>
      {chacked ? (
        <Wraper>
          <h4 className="title">Відновлення паролю</h4>
          <p className="text">
            На Ваш e-mail user@gmail.com протягом хвилини прийде лист з
            посиланням для відновлення паролю.{' '}
            <span className='textBig'>Перейдіть за посиланням у листі.</span>
          </p>
          <button className='mainBtn' type="button" onClick={()=>{setChacked(false)}}>Надіслати на інший e-mail </button>
          <NavLink className='link' to='/'>На головну</NavLink>
        </Wraper>
      ) : (
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: '' }}
          validationSchema={userSchema}
        >
          {values => {
            return (
              <Wraper>
                <h4 className="title">Відновлення паролю</h4>
                <p className="text">
                  Щоб відновити пароль, введіть Ваш e-mail, який Ви вказували
                  при реєстрації
                </p>
                <Form>
                  <Label className={` marg24`}>
                    <Input>
                      <Field
                        className={refError ? 'is-invalid' : ''}
                        type="email"
                        name="email"
                        placeholder="Введіть електрону пошту"
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
                  <Button type="submit">Відновити</Button>
                </Form>
              </Wraper>
            );
          }}
        </Formik>
      )}
    </>
  );
}
