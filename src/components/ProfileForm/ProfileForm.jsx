import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './ProfileForm.styled';
import {  getUser } from 'redux/user/opetations';
import { selectUser } from 'redux/user/selectors';
import { IconSVG, IconSvg2 } from './ProfileSVG';


const ProfileForm = () => {
  const dispatch = useDispatch();
    const inputValue = useSelector(selectUser);


  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);



  const formik = useFormik({
    initialValues: {
      lastName: inputValue.lastName || '',
      firstName: inputValue.firstName || '',
      phone: inputValue.phone || '',
      photo: inputValue.photo || ''
    },
    onSubmit: async values => {
      console.log({ ...values, email: inputValue.email });
      // dispatch(changeUser())
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <div className="profilePhoto">
          <label className="photoLable">
            <input
              type="file"
              name="photo"
              onChange={formik.handleChange}
              className="profile-input"
              style={{ display: 'none' }}
            />
            <div className="posit">
              <IconSVG />
              <div className="plus">
                <IconSvg2/>
              </div>
            </div>
          </label>
          <div>
            <p className="pPhoto">Фото профілю</p>
            <p className="pPhoto2">
              Виберіть фото не менше 200х200, формату jpg.
            </p>
          </div>
        </div>
        <div className="profile-form">
          <label className="profile-label">
            <p className="profile-label-title">Прізвище:</p>
            <input
              className="profile-input"
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
          </label>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error-message">{formik.errors.lastName}</div>
          ) : null}

          <label>
            <p className="profile-label-title">Імʼя:</p>
            <input
              className="profile-input"
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </label>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error-message">{formik.errors.firstName}</div>
          ) : null}

          <label>
            <p className="profile-label-title">Номер телефону:</p>
            <input
              className="profile-input"
              type="phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </label>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error-message">{formik.errors.phone}</div>
          ) : null}

          <button type="submit" className="profile-btn">
            Зберегти
          </button>
        </div>
      </form>
    </Container>
  );
};

export default ProfileForm;
