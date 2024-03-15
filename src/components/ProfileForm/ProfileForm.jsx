import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Container } from './ProfileForm.styled';
import { IconSVG, IconSvg2 } from './ProfileSVG';
import Modal from 'modal/modal';
import ConfirmModalDeleteAcc from "../../modal/confirmModal/confirmModalDeleteAcc"
import { setIsOpen } from 'redux/modal/modalSlice';
import { changeUser, changeUserPhoto, getUser } from 'redux/auth/operations';
import * as yup from 'yup';
import  { Notify } from 'notiflix';

const phoneRegExp = /^(\+380)[0-9]{9}$/;

yup.addMethod(yup.string, 'isPhone', function () {
  return this.test('is-valid-phone', 'Номер повинен починатись з +380 і містити 12 цифр', function (value) {
    return phoneRegExp.test(value);
  });
});

const profileSchema = yup.object().shape({
  lastName: yup.string().matches(/^[a-zA-Zа-яА-ЯєЄіІїЇґҐ' ]*$/, 'Поле “Прізвище“ може містити лише літери та знак “-“').max(40, 'Максимум 40 символів'),
  firstName: yup.string().matches(/^[a-zA-Zа-яА-ЯєЄіІїЇґҐ' ]*$/, 'Поле "Ім`я" може містити лише літери та знак “-“').max(40, 'Максимум 40 символів'),
  phone: yup.string().isPhone(),

});

const ProfileForm = ({ initialValues,handleDeleteAccount }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setIsOpen(true));
  };
  // const [load, setLoad] = useState(false);

  const formik = useFormik({
    initialValues: {
      lastName: initialValues.lastName || '',
      firstName: initialValues.firstName || '',
      phone: initialValues.phone || '+380',
    },
    onSubmit: async values => {
      console.log({
        ...values,

        email: initialValues.email,
      });
      dispatch(
        changeUser({
          ...values,
          email: initialValues.email,
        })
      );
      setTimeout(() => {
        dispatch(getUser());
      }, 500);
    },
    validationSchema: profileSchema,
  });

  useEffect(() => {
    formik.setValues({
      lastName: initialValues.lastName || '',
      firstName: initialValues.firstName || '',
      phone: initialValues.phone || '+380',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const handleImageUpload = async e => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        Notify.warning('Файл занадто великий. Максимальний розмір: 10 МБ');
        return;
      }
      const formData = new FormData();
      formData.append('image', file);

      dispatch(changeUserPhoto(formData));
      setTimeout(() => {
        dispatch(getUser());
      }, 1000);
    }
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
      <Modal>
              <ConfirmModalDeleteAcc handleDeleteAccount={handleDeleteAccount} />
            </Modal>
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
              {initialValues.photo ? (
                <div className="photoIMG">
                  <img className="photp" src={initialValues.photo} alt="user" />
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
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              onKeyDown={(e) => {
                const newValue = e.target.value;
                if ((e.key === 'Delete' || e.key === 'Backspace') && newValue === '+380') {
                  e.preventDefault();
                }
              }}
            />
          </label>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error-message">{formik.errors.phone}</div>
          ) : null}

          <div className="flex">
          <button type="submit" className="profile-btn">
            Зберегти
          </button>
          <button  onClick={openModal} className="delete-btn" type="button">Видалити профіль</button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default ProfileForm;
