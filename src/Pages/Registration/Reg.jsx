import React from "react";
import "./Reg.css";
import Checkbox from "../../UIKit/Checkbox/Checkbox";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import Select from "../../UIKit/Select/Select";
import ReCAPTCHA from "../../UIKit/ReCAPTCHA/ReCAPTCHA";
import health from "../../Assets/img/health.png";
import oref from "../../Assets/img/oref.png";

function Registration() {


  return (
    <div className="login">
      <div className="loginWrapperReg">
        <div className="logoWrapperReg">
          <a href="https://www.gov.il/he/departments/ministry_of_health/govil-landing-page" target="_blank" rel="noopener noreferrer"><img src={health} alt="" /></a>
          <a href="https://www.oref.org.il/" target="_blank" rel="noopener noreferrer"><img src={oref} alt="" /></a>
        </div>
        <p className="pReg">דף הרשמה מערכת בידוק ישיר</p>
        <div className="inputsWrapperReg">
          <Input variant="white" label="מספר זהות" type="text" />
          <Input variant="white" label="תאריך לידה" type="text" />
          <Input variant="white" label="מספר טלפון נייד" type="text" />
          <Select />
          <div className="recaptcha">
          <ReCAPTCHA />
          </div>
          <Button className="btnSignReg"text="הרשמה" />
        </div>
      </div>
    </div>
  );
}

export default Registration;
