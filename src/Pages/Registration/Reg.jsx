import React, { useState } from "react";
import "./Reg.css";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import Select from "../../UIKit/Select/Select";
import Datepicker from "../../UIKit/Datepicker/Datepicker";
import ReCAPTCHA from "../../UIKit/ReCAPTCHA/ReCAPTCHA";

function Registration() {
  const [id, setId] = useState("");
  const [bday, setBday] = useState("");
  const [phone, setPhone] = useState("");

  console.log(bday, id, phone);

  return (
    <div className="login">
      <div className="loginWrapperReg">
        <div className="logoWrapperReg">
          <p>הרשמה למערכת</p>
        </div>
        <form className="inputsWrapperReg">
          <Input
            variant="white"
            label="מספר זהות"
            type="text"
            maxlength="9"
            onInput={(e) => setId(e.target.value)}
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
          />
          <Select />
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
