import React, { useState } from "react";
import Switch from "../../UIKit/Switch/Switch";
import CircularProgress from "../../UIKit/CircularProgress/CircularProgress";
import IconTabs from "../../UIKit/IconTabs/IconTabs";
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
  let Dates = `${new Date().getDate()}.${
    new Date().getMonth() + 1
  }.${new Date().getFullYear()}`;

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
    } else if (day === 6) {
      return "ש'";
    }
  };

  return (
    <div className="ManagerMain">
      
        <IconTabs />
        
    </div>
  );
}

export default Manager;
