// import { useState } from 'react'
import "./App.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/login" element ={<LogIn/>}/>
      <Route path="/" element ={<SignUp />}/>
      <Route path="/home" element ={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
