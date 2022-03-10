import React, { useState } from "react";
import Switch from "../../UIKit/Switch/Switch";
import CircularProgress from "../../UIKit/CircularProgress/CircularProgress";
import Table from "../../UIKit/Table/Table";
import "./Dashboard.css";

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
      <div className="MaganerTop">
        <div className="ManagerSwitch">
          <p>סטטוס תחנה:</p>
          <p>{<Status />}</p>
          <Switch StateChanger={setChecked} />
        </div>
        <div className="ManagerHeader">
          <div className="asd">
            <p>
              יום {<Day />} {Dates} - תחנת רמת החיל
            </p>
          </div>
        </div>
      </div>
      <div className="ManagerSum">
        <div className="SumTop">
          <div className="TestsDone">
            <span>בדיקות שבוצעו</span>
            <CircularProgress variant="done" ordered={2258} done={1512} />
          </div>
          <div className="TestsOrder">
            <span>תורים שהוזמנו</span>
            <CircularProgress max={15000} ordered={12258} />
          </div>
        </div>
        <div className="SumBottom">
          <div className="AverageTest">
            <span>זמן ממוצע לבדיקה</span>
            <span className="Time">01:24</span>
          </div>
          <div className="AverageLine">
            <span>זמן ממוצע להמתנה בתור</span>
            <span className="Time">12:24</span>
          </div>
        </div>
      </div>
      <div className="TestStatus">
        <div className="TestNow">
            <span>נבדק כעת: עמדה 1 מס' 465</span>
            </div>
        <div className="TestNext">
        <span>נבדק הבא: עמדה 3 מס' 425</span>
            </div>
      </div>
      <div className="Packages">
          <Table />
      </div>
   
    </div>
  );
}

export default Manager;
