import React from 'react'
import './Button.css'

function Button({text}) {
  return (
    <div className="Button">
        <button className="btn">{text}</button>
       
    </div>
  )
}

export default Button