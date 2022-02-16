import React from "react";
import "./ForgotPass.css";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import health from "../../Assets/img/health.png";
import oref from "../../Assets/img/oref.png";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="logoWrapper">
        <p>שחזור סיסמה</p>
        </div>
        <div className="inputsWrapper">
          <Input variant="white" label="מספר זהות" type="text" />
          <Input variant="white" label="טלפון נייד" type="password" />
          <Button text="שחזר סיסמה" />
        </div>
      </div>
    </div>
  );
}

export default Login;
