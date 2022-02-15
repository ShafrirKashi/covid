import React from 'react'
import './Logo.css'
import LogoBlack from '../../Assets/img/bidukLogoBlack.png'
import LogoWhite from '../../Assets/img/bidukLogoWhite.png'



function Logo() {
  return (
    <div className="LogoMain">
       <img className="LogoItself" src={LogoWhite} alt="" />
    </div>
  )
}

export default Logo