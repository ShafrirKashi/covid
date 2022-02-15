import './App.css';
import Login from './Pages/Login/Login'
import LoginWorker from './Pages/LoginWorker/LoginWorker'
import { Routes, Route } from "react-router-dom"
import React from 'react'

function App() {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login2work" element={<LoginWorker />} />
     </Routes>
    </div>
  );
}

export default App;
