import React from 'react'
import './Input.css'

function Input({placeholder, type, label, variant}) {
  if (variant === "white"){
  return (
    <div className="Input">
        <label className="labelDark">{label}</label>
        <input placeholder={placeholder} type={type}></input>
    </div>
  )}else {return (
    <div className="Input">
    <label className="labelLight">{label}</label>
    <input placeholder={placeholder} type={type}></input>
</div>
  )}

}

export default Input