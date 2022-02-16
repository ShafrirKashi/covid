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
       <p>כניסת צוות</p>
        </div>
        <div className="inputsWrapperWorker">
          <Input variant="white" label="מספר זהות בן 9 ספרות" type="text" />
          <Input variant="white"  label="סיסמה" type="password" />
          <Checkbox text="הישאר מחובר" />
          <Button text="כניסה" />
        </div>
      </div>
    </div>
  );
}

export default LoginWorker;
