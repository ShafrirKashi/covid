import React from "react";
import "./LoginWorker.css";
import Checkbox from "../../UIKit/Checkbox/Checkbox";
import Input from "../../UIKit/Input/Input";
import Button from "../../UIKit/Button/Button";
import health from "../../Assets/img/health.png";
import oref from "../../Assets/img/oref.png";

function LoginWorker() {
  return (
    <div className="loginWorker">
      <div className="loginWrapperWorker">
        <div className="logoWrapper">
          <a href="https://www.gov.il/he/departments/ministry_of_health/govil-landing-page" target="_blank" rel="noopener noreferrer"><img src={health} alt="" /></a>
          <a href="https://www.oref.org.il/" target="_blank" rel="noopener noreferrer"><img src={oref} alt="" /></a>
        </div>
        <div className="inputsWrapperWorker">
          <Input variant="dark" label="מספר זהות בן 9 ספרות" type="text" />
          <Input variant="dark"  label="סיסמה" type="password" />
          <a className="forgotWorker" href="*">
            שכחתי סיסמה
          </a>
          <Checkbox text="הישאר מחובר" />
          <Button text="כניסה" />
          <p>
            לא רשום עדיין? <a href="*">"הרשם עכשיו"</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginWorker;
