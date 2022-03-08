import React from 'react'
import Input from "../../UIKit/Input/Input";
import Select from "../../UIKit/Select/Select";
import Datepicker from "../../UIKit/Datepicker/Datepicker";

function AddChild() {
  return (
    <div >
        <Input label="ת.ז"/>
        <Datepicker />
        <Select label="קופת חולים" variant={"HMO"}/>    
        </div>
  )
}

export default AddChild