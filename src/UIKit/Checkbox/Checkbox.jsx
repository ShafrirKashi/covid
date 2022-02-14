import React from 'react'
import './Checkbox.css'

function Checkbox({text}) {
  return (
    <div className="checkboxInput">
      <div className="checkboxWrapper">
        <p>{text}</p>
        <input className="checkbox" type="checkbox" />
        </div>
     </div>
  )
}

export default Checkbox