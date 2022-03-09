import React, { useState } from "react";
import Switch from "../../UIKit/Switch/Switch";
import CircularProgress  from "../../UIKit/CircularProgress/CircularProgress";
import "./Manager.css";

function Manager() {
  const [checked, setChecked] = React.useState(true);

  const Status = () => {
    if (checked === true) {
      return "תחנה פתוחה";
    } else {
      return "תחנה סגורה";
    }
  };

  let day = new Date().getDay() + 1;
  let Dates = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;

  let Day = () => {
  if (day === 1) {
    return "א'";
  } else if (day === 2) {
    return "ב'";
  } else if (day === 3) {
    return "ג'";
  } else if (day === 4) {
    return "ד'";
  } else if (day === 5) {
    return "ה'";
  } else if (day === 6) {
    return "ו'";
  }else if (day === 6) {
    return "ש'";
  }
}
  return (
    <div className="ManagerMain">
      <div className="MaganerTop">
        <div className="ManagerSwitch">
          <p>סטטוס תחנה:</p>
          <p>{<Status />}</p>
          <Switch StateChanger={setChecked} />
        </div>
        <div className="ManagerHeader">
          <div className="asd">
            <p>יום {<Day/>} {Dates} - תחנת רמת החיל</p>
          </div>
        </div>
      </div>
      <div className="ManagerSum">
        <div className="TestsDone">
          <CircularProgress />
        </div>
        <div className="TestsOrder"></div>
        <div className="AverageTest"></div>
        <div className="AverageLine"></div>
      </div>
      <div className="TestStatus">
        <div className="TestNow"></div>
        <div className="TestNext"></div>
      </div>
      <div className="Packages"></div>
      <div className="ManagerBottom"></div>
    </div>
  );
}

export default Manager;
