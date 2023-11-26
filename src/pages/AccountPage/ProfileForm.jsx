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
      <label>
        Прізвище:
        <input
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
        Імʼя:
        <input
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
        Номер телефону:
        <input
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

      <button type="submit">Зберегти</button>
    </form>
    </Container>
  );
};

export default ProfileForm;

