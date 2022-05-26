import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/register/Register"
import { Navbar } from "./components/layouts/navbar/Navbar"
import { CrearNoticia } from "./components/pages/noticias/CrearNoticia"
function App() {
  return (
    <div>
      <Navbar />
      <CrearNoticia />
      {/* <Login/> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
