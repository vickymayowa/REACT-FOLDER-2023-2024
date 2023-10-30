import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import axios from 'axios'

const Valid = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password:"",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "FirstName must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "LastName must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password:Yup.string()
      .max(8, "Password must be 8 characters or less")
      .required("Required"),

    }),
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5000/api/register', values)
      .then(response => {
        toast(response.data.message)
      })
      .catch(error => {
        toast("Unable to Register")
        console.log(error);
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Enter your firtname"
        className="border rounded-md p-3"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null }

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        placeholder="Enter your lastname"
        className="border rounded-md p-3"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null }

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        className="border rounded-md p-3"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null }

      <label htmlFor="email">PassWord</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your Password"
        className="border rounded-md p-3"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null }

      <button type="submit" className=" mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </form>
  );
};

export default Valid;
