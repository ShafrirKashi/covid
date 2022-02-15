import React from 'react'
import './Navbar.css'
import Logo from '../../UIKit/Logo/Logo'
import userLogo from '../../Assets/img/userLogo.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="personal">
          <button className="btnPersonal" >לאזור האישי
          <img className="userLogo" src={userLogo} alt="" />
        </button>
        <p>asd</p>
        <p>|</p>
        </div>
        <div className="Navlogo">
            <Logo />
        </div>
    </div>
  )
}

export default Navbar