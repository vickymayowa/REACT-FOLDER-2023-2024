import React from "react";
import "./App.css";
import SendForm from "./components/SendForm";
import Form from "./components/Form";
import { Route , Routes } from "react-router-dom";
import Button from "./components/Button";
import Errorpage from "./components/Errorpage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SendForm/>}/>
      
      <Route path="/button" element={<Button/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="*" element={<Errorpage/>}/>
    </Routes>
    </>
  );
}

export default App;
