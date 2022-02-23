import React from "react";
import "./ForgotPass.css";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";


function Login() {
  return (
    <div className="login">
      <div className="loginWrapperForgot">
        <div className="logoWrapperForgot">
        <p>שחזור סיסמה</p>
        </div>
        <div className="inputsWrapperForgot">
          <Input variant="white" label="מספר זהות" type="text" />
          <Input variant="white" label="טלפון נייד" type="password" />
          <Button text="שחזר סיסמה" />
        </div>
      </div>
    </div>
  );
}

export default Login;
