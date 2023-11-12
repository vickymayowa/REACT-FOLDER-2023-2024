import React from "react";
  import { useFormik } from 'formik'

const Formik = () => {
  const formik = useFormik({
  initialValues:{
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  },
  onSubmit:(values)=>{
    console.log(values);
  }
}
)
  return (
    <>
      <div>
        <div className="flex items-center justify-center flex-col">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              placeholder="Enter your FirstName"
              className="border rounded-md p-3"
            />
            <input
              type="text"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              placeholder="Enter your LastName"
              className="border rounded-md p-3"
            />
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter your Email"
              className="border rounded-md p-3"
            />
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter your Password"
              className="border rounded-md p-3"
            />
            <button 
            type="submit"
            className="bg-blue-400 rounded-lg text-white p-4 my-3 w-60">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formik;
