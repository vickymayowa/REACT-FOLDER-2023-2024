import React from "react";
// import { useFormik } from 'formik'

const Formik = () => {
  // const formik = useFormik({
  // intialValues:{
  // firstname:""
  // lastname:""
  // email:""
  // password:""
  // }
  // })
  return (
    <>
      <div>
        <div className="flex items-center justify-center flex-col">
          <form action="" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="firstname"
              value={formik.value.firstname}
              onChange={formik.handleChange}
              placeholder="Enter your FirstName"
              className="border rounded-md p-3"
            />
            <input
              type="text"
              name="lastname"
              value={formik.value.lastname}
              onChange={formik.handleChange}
              placeholder="Enter your LastName"
              className="border rounded-md p-3"
            />
            <input
              type="text"
              name="email"
              value={formik.value.email}
              onChange={formik.handleChange}
              placeholder="Enter your Email"
              className="border rounded-md p-3"
            />
            <input
              type="text"
              name="password"
              value={formik.value.password}
              onChange={formik.handleChange}
              placeholder="Enter your Password"
              className="border rounded-md p-3"
            />
            <button className="bg-blue-400 rounded-lg text-white p-4 my-3 w-60">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formik;
