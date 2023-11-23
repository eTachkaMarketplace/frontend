import React from 'react';
import { useFormik } from 'formik';

const ProfileForm = () => {
  const formik = useFormik({
    initialValues: {
      field1: '',
      field2: '',
      field3: '',
    },
    onSubmit: (values) => {
      // Добавьте здесь код для отправки данных формы, например, на сервер.
      console.log('Form values:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Лейбл 1:
        <input
          type="text"
          name="field1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.field1}
        />
      </label>
      {formik.touched.field1 && formik.errors.field1 ? (
        <div className="error-message">{formik.errors.field1}</div>
      ) : null}

      <label>
        Лейбл 2:
        <input
          type="text"
          name="field2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.field2}
        />
      </label>
      {formik.touched.field2 && formik.errors.field2 ? (
        <div className="error-message">{formik.errors.field2}</div>
      ) : null}

      <label>
        Лейбл 3:
        <input
          type="text"
          name="field3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.field3}
        />
      </label>
      {formik.touched.field3 && formik.errors.field3 ? (
        <div className="error-message">{formik.errors.field3}</div>
      ) : null}

      <button type="submit">Зберегти</button>
    </form>
  );
};

export default ProfileForm;

