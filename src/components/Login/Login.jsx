import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Невірний email адрес")
        .required("Обов'язкове поле"),
      password: Yup.string()
        .min(7, "Пароль мінімум 7 символів")
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  const isFormValid = formik.isValid;
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Log In</h1>

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
            className="custom"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Log In
        </button>
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
