import React from 'react'
import './TestLine.css'

function TestLine({data}) {

  console.log(data)
  return (
    <div className='TestLine'>
      <div className="TestIcon">
        icon
      </div>
      <div className="TestType">
        type
      </div>
      <div className="PatientName">
        name
      </div>
      <div className="Status">
        status
      </div>
    </div>
  )
}

export default TestLine