import React from 'react';
import { useFormik } from 'formik';
import {Container} from './ProfileForm.styled'

const ProfileForm = () => {
  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      phone: '',
    },
    onSubmit: (values) => {

      console.log('Form values:', values);
    },
  });

  return (
    <Container>
    <form onSubmit={formik.handleSubmit} className="profile-form">
      <label className="profile-label">
        <p className="profile-label-title">Прізвище:</p>
        <input
          className="profile-input"
          type="text"
          name="surname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
      </label>
      {formik.touched.surname && formik.errors.surname ? (
        <div className="error-message">{formik.errors.surname}</div>
      ) : null}

      <label>
        <p className="profile-label-title">Імʼя:</p>
        <input
          className="profile-input"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </label>
      {formik.touched.name && formik.errors.name ? (
        <div className="error-message">{formik.errors.name}</div>
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

      <button type="submit" className="profile-btn">Зберегти</button>
    </form>
    </Container>
  );
};

export default ProfileForm;

