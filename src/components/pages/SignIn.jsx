import axios from "axios";
import { React, useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleButtonClick = () => {
    axios.post("http://localhost:5000/api/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          console.log(response.data.message);
          toast(response.data.message);
        } else {
          console.log(`Wrong Credentails`);
          toast(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast("Unable to Login");
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src="https://imgs.search.brave.com/4dRKH9Sw5uh1djyzBAPbaVuSSKa7oN0-MqWQbA2krCo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzkyLzU1LzE1/LzM2MF9GXzQ5MjU1/MTU0Ml9VaUFvSDBE/eWhMMVpISDlUMjRt/YXNDUVpCYTk1RHlX/MS5qcGc"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login your account
          </h2>
        </div>
        <h2
          id="errmsg"
          className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        ></h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  // value={userData.email}
                  onChange={(e) => setemail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  // value={userData.password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex w-full mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? <a to="/Register">Register here </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
