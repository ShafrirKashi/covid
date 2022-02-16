import React from 'react'
import './Navbar.css'
import Logo from '../../UIKit/Logo/Logo'
import userLogo from '../../Assets/img/userLogo.png'
import Emblem from '../../Assets/img/emblem.png'
import health from "../../Assets/img/health.png";
import oref from "../../Assets/img/oref.png";

function Navbar() {
  return (
    <div className="navbar">
        <div className="personal">
          <button className="btnPersonal" >לאזור האישי
          <img className="userLogo" src={userLogo} alt="" />
        </button>
        <div className="personalRight">
        <p>*1145</p>
        <p>|</p>
        <select className="navSelect">
          <option value="">עברית</option>
          <option value="">English</option>
          <option value="">اَلْعَرَبِيَّةُ</option>
          <option value="">Русский</option>
        </select>
        </div>
        </div>
        <div className="Navlogo">
          <a href="/login">
            <Logo />
            </a>
            <img className="TopLogos" src={Emblem} alt="" />
            <img className="TopLogos" src={health} alt="" />
            <img className="TopLogos" src={oref} alt="" />

        </div>
        
    </div>
  )
}

export default Navbar