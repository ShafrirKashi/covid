import React from 'react'
import Input from "../../UIKit/Input/Input";
import Select from "../../UIKit/Select/Select";
import Datepicker from "../../UIKit/Datepicker/Datepicker";
import './AddChild.css'

function AddChild() {
  return (
    <div className="AddChildContent">
         <div className="addChildHeader">
           <span>דף הוספת ילד</span>
         </div>
        <Input label="ת.ז"/>
        <Datepicker />
        <Select label="קופת חולים" variant={"HMO"}/>    
        </div>
  )
}

export default AddChild