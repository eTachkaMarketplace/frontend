import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import {  useSelector } from 'react-redux';
import {Container} from './ProfileForm.styled'

const ProfileForm = () => {
  const authState = useSelector((state) => state.auth);
  const token = authState.token;


  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://marketplace-fi3l.onrender.com/api/users/user', {
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token.replace(/"/g, '')}`,
          },
        });
        const { firstName, lastName, phone } = response.data;
        setUserInfo({firstName, lastName, phone });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [token]);

  const formik = useFormik({
    initialValues: {
      lastName: userInfo.lastName,
      firstName: userInfo.firstName,
      phone: userInfo.phone,
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.put(
          `https://marketplace-fi3l.onrender.com/api/users/user`,
          {
            firstName: values.firstName,
            lastName: values.lastName,
            phone: values.phone,
          },
          {
            headers: {
              'accept': '*/*',
              'Authorization': `Bearer ${token.replace(/"/g, '')}`,
              'Content-Type': 'application/json',
            },
          }
        );

        // Обработка успешного обновления
        console.log('User updated successfully:', response.data);
      } catch (error) {
        console.error('Error updating user:', error);
      }
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
      </form>
    </Container>
  );
};

export default ProfileForm;
