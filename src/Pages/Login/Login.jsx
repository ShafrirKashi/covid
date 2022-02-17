import React from "react";
import "./Login.css";
import Checkbox from "../../UIKit/Checkbox/Checkbox";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import health from "../../Assets/img/health.png";
import oref from "../../Assets/img/oref.png";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="logoWrapper">
         <p>כניסה עם סיסמה</p>
        </div>
        <form className="inputsWrapper">
          <Input variant="white" label="מספר זהות בן 9 ספרות" type="tel" maxlength="9" minlength="9" oninvalid="setCustomValidity('please enter something')"/>
          <Input variant="white" label="סיסמה" type="password" />
          <a className="forgot" href="/forgot">
            שכחתי סיסמה
          </a>
          <Checkbox text="הישאר מחובר" />
          <Button text="כניסה" />
          <p>
            לא רשום עדיין? <a  href="/registration">"הרשם עכשיו"</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
