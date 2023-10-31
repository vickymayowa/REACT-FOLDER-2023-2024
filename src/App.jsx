import React from "react";
import "./App.css";
// import SendForm from "./components/SendForm";
import Form from "./components/Form";
import { Route , Routes } from "react-router-dom";
import Button from "./components/Button";
import Errorpage from "./components/Errorpage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import Formik from "./components/pages/Formik";
import Valid from "./components/pages/Valid";
import Dashboard from "./components/pages/Dashboard";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/button" element={<Button/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="*" element={<Errorpage/>}/>
      <Route path="/formik" element={<Formik/>}/>
      <Route path="/Valid" element={<Valid/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </>
  );
}

export default App;
