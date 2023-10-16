import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Обов'язкове поле"),
      email: Yup.string()
        .email("Невірний email адрес")
        .required("Обов'язкове поле"),
      password: Yup.string()
        .min(7, "Пароль мінімум 7 символів")
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values) => {
      
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const isFormValid = formik.isValid; 

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="• • • • • • •"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Sign Up
        </button>
      </form>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default SignUp;
