import React from 'react'
import './Input.css'

function Input({placeholder, type, label}) {
  return (
    <div className="Input">
        <label>{label}</label>
        <input placeholder={placeholder} type={type}></input>
    </div>
  )
}

export default Input