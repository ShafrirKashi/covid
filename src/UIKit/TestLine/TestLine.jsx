import React from "react";
import "./TestLine.css";
import TestIcon from "../../Assets/img/testicon.png";

function TestLine({ datas }) {
  if (datas.length === 0) {
    return <div>לא נקבעו בדיקות</div>;
  } else {
    return (
      <div>
        {datas.map((data) => (
          <div className="TestLine">
            <div>
              <img className="TestIcon" src={TestIcon} alt="" />
            </div>
            <div className="TestType">{data.test}</div>
            <div className="PatientName">{data.name}</div>
            <div className="Date">{data.date}</div>
            <div className="Status">{data.status}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default TestLine;
