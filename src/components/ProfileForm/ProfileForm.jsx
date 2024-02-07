import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Container } from './ProfileForm.styled';
import { IconSVG, IconSvg2 } from './ProfileSVG';
import { changeUser } from 'redux/auth/operations';
import * as yup from 'yup';

const profileSchema = yup.object().shape({
  lastName: yup.string().matches(/^[a-zA-Zа-яА-ЯіІ' ]*$/, 'Прізвище може містити лише літери'),
  firstName: yup.string().matches(/^[a-zA-Zа-яА-ЯіІ' ]*$/, 'Імʼя може містити лише літери'),
  phone: yup.string().matches(/^[0-9+]*$/, 'Номер телефону може містити лише цифри та +'),
});

const ProfileForm = ({ initialValues }) => {
  const dispatch = useDispatch();
  const [cloudinaryImage, setCloudinaryImage] = useState(initialValues.photo || '');

  // const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      lastName: initialValues.lastName || '',
      firstName: initialValues.firstName || '',
      phone: initialValues.phone || '',
    },
    onSubmit: async values => {
      console.log({
        ...values,
        email: initialValues.email,
        photo: cloudinaryImage,
      });
      dispatch(
        changeUser({
          ...values,
          email: initialValues.email,
          photo: cloudinaryImage,
        })
      );
    },
    validationSchema: profileSchema,
  });

  useEffect(() => {
    formik.setValues({
      lastName: initialValues.lastName || '',
      firstName: initialValues.firstName || '',
      phone: initialValues.phone || '',
    });
    setCloudinaryImage(initialValues.photo || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const handleImageUpload = async e => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ml_default');

      const response = await fetch('https://api.cloudinary.com/v1_1/dsjxx9exc/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      console.log(data);
      setCloudinaryImage(data.secure_url);
    }
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <div className="profilePhoto">
          <label className="photoLable">
            <input
              type="file"
              name="photo"
              onChange={e => {
                formik.handleChange(e);
                handleImageUpload(e);
              }}
              className="profile-input"
              style={{ display: 'none' }}
            />
            <div className="posit">
              {cloudinaryImage ? (
                <div className="photoIMG">
                  <img className="photp" src={cloudinaryImage} alt="user" />
                </div>
              ) : (
                <div>
                  <IconSVG />
                  <div className="plus">
                    <IconSvg2 />
                  </div>
                </div>
              )}
            </div>
          </label>
          <div>
            <p className="pPhoto">Фото профілю</p>
            <p className="pPhoto2">Виберіть фото не менше 200х200, формату jpg.</p>
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
