import React from 'react'
import './Button.css'

function Button({text}) {
  return (
    <div className="Button">
        <input type="submit" value={text} className="btn"></input>
    </div>
  )
}

export default Button