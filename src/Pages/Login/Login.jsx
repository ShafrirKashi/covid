import React from "react";
import "./Login.css";
import Checkbox from "../../UIKit/Checkbox/Checkbox";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import health from "../../Assets/img/health.png";
import oref from "../../Assets/img/oref.png";
import { useNavigate } from "react-router-dom";

function Login() {

  let navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="logoWrapper">
          <a href="https://www.gov.il/he/departments/ministry_of_health/govil-landing-page" target="_blank" rel="noopener noreferrer"><img src={health} alt="" /></a>
          <a href="https://www.oref.org.il/" target="_blank" rel="noopener noreferrer"><img src={oref} alt="" /></a>
        </div>
        <div className="inputsWrapper">
          <Input variant="white" label="מספר זהות בן 9 ספרות" type="text" />
          <Input variant="white" label="סיסמה" type="password" />
          <a className="forgot" href="*">
            שכחתי סיסמה
          </a>
          <Checkbox text="הישאר מחובר" />
          <Button text="כניסה" />
          <p>
            לא רשום עדיין? <a  href="/registration">"הרשם עכשיו"</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
