import React from 'react'
import './Input.css'

function Input({onInput, placeholder, type, label, variant, maxlength, minlength, min, max}) {
  if (variant === "white"){
  return (
    <div className="Input">
        <label className="labelDark">{label}</label>
        <input onInput={onInput} placeholder={placeholder} type={type} maxlength={maxlength} minlength={minlength} max={max} min={min}></input>
    </div>
  )}else {return (
    <div className="Input">
    <label className="labelLight">{label}</label>
    <input onInput={onInput} placeholder={placeholder} type={type} maxlength={maxlength} minlength={minlength} max={max} min={min}></input>
</div>
  )}

}

export default Input
