import './App.css';
import Login from './Pages/Login/Login'
import LoginWorker from './Pages/LoginWorker/LoginWorker'
import Registration from './Pages/Registration/Reg'
import ForgotPass from './Pages/ForgotPass/ForgotPass'
import Main from './Pages/Main/Main'
import LoginAdmin from './Pages/LoginAdmin/LoginAdmin'
import { Routes, Route } from "react-router-dom"
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      
      {/* <Navbar /> */}
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/login2work" element={<LoginWorker />} />
      <Route path="/main" element={<Main />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/Forgot" element={<ForgotPass />} />
     </Routes>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
