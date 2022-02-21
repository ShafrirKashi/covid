import React, { useState } from "react";
import "./Reg.css";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import Select from "../../UIKit/Select/Select";
import Datepicker from "../../UIKit/Datepicker/Datepicker";
import ReCAPTCHA from "../../UIKit/ReCAPTCHA/ReCAPTCHA";
import {serverReq, dateFormat} from "../../ServerRequest"

function Registration() {
  const [id, setId] = useState("");
  const [bday, setBday] = useState("");
  const [phone, setPhone] = useState("");

  async function regReq(e) {
    try {
        e.preventDefault()
        const values = Object.values(e.target)
            .reduce((acc, input) => !input.name ? acc : ({
                ...acc,
                [input.name]: input.type == 'checkbox' ? input.checked : input.value
            }), {}
            )
  
        const body = {
          phone: values.phone,
          israeliID: values.israeliID,
          birthdayDate: {
            day: 5,
            month: 4,
            year: 2000
          },
          HMO: values.HMO
        }

        console.log(body);
   
        const res = await serverReq('put', '/register', body)

        console.log(res.data);
        
    } catch (error) {
        console.log(error);
          
    }

}


  return (
    <div className="login">
      <div className="loginWrapperReg">
        <div className="logoWrapperReg">
          <p>הרשמה למערכת</p>
        </div>
        <form className="inputsWrapperReg" onSubmit={(e) => regReq(e)}>
          <Input
            variant="white"
            label="מספר זהות"
            type="text"
            maxlength="9"
            onInput={(e) => setId(e.target.value)}
            name="israeliID"
          />
          <Datepicker
            setStartDate={(date) => setBday(date)}
          />
          <Input
            variant="white"
            label="מספר טלפון נייד"
            type="text"
            maxlength="10"
            minlength="10"
            onInput={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <Select name="HMO"/>
          <div className="recaptcha">
            <ReCAPTCHA />
          </div>
          <Button className="btnSignReg" text="הרשמה" />
        </form>
      </div>
    </div>
  );
}

export default Registration;
