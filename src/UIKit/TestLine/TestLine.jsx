import React from "react";
import "./TestLine.css";
import TestIcon from "../../Assets/img/testicon.png";

function TestLine({ details }) {
  if (details.length === 0) {
    return <div>לא נקבעו בדיקות</div>;
  } else {
    return (
      <div>
        {details.map((detail) => (
          <div className="TestLine">
            <div>
              <img className="TestIcon" src={TestIcon} alt="" />
            </div>
            <div className="TestType">{detail.test}</div>
            <div className="PatientName">{detail.name}</div>
            <div className="">{detail.date}</div>
            <div className="">{detail.time}</div>
            <div className="Status">{detail.status}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default TestLine;
