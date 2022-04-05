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

  let TheDay = new Date().getDay() + 1;
  let Dates = `${new Date().getDate()}.${
    new Date().getMonth() + 1
  }.${new Date().getFullYear()}`;

  console.log(Dates);

  function getDayName(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "short" });
  }
  let today = new Date();
  today.setDate(today.getDate() + 0);
  let todayday = getDayName(today, "il-IL").split(" ");

  return (
    <div className="ManagerMainWrapper">
      <div className="MaganerTop">
        <div className="ManagerSwitch">
          <p>סטטוס תחנה:</p>
          <p>{<Status />}</p>
          <Switch StateChanger={setChecked} />
        </div>
        <div className="ManagerHeader">
          <span>
            יום {todayday + ","} {Dates} - תחנת רמת החיל
          </span>
          <span className="StationTime">שעות פעילות תחנה: 7:00 - 21:00</span>
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

      <div className="Packages">
        <Table variant="dashboard" />
      </div>
    </div>
  );
}

export default Manager;
