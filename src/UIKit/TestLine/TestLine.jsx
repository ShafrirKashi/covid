import React, { useState } from "react";
import "./TestLine.css";
import Dots from "../../UIKit/Dots/Dots";
import Modal from "../PopModal/PopModal";

function TestLine({ details, filtering }) {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(false);
  const onOpenModal = () => setOpen(true);

  if (details.length === 0) {
    return <div>לא נקבעו בדיקות</div>;
  } else {
    return (
      <div className="TestLineGod">
        {details
          .filter((val) => {
            if (filtering == "") {
              return val;
            } else if (val.name.includes(filtering)) {
              return val;
            } else if (val.date.includes(filtering)) {
              return val;
            } else if (val.time.includes(filtering)) {
              return val;
            } else if (val.status.includes(filtering)) {
              return val;
            }else if (val.number.includes(filtering)) {
              return val;
            }
          })
          .map((detail) => (
            <div className="TestLineWrapper">
              <div className="TestLine" onClick={() => { onOpenModal(); setNumber(detail.number);}}>
                <div className="TestType">{detail.test}</div>
                <div className="TestData">
                  <div className="PatientName">{detail.name}</div>
                  <div className="TestDate">{detail.date}</div>
                  <div className="TestTime">{detail.time}</div>
                </div>
                <div className="TestStatus">
                  <div className="Number">מס' בדיקה: {detail.number}</div>
                  <div className="Status">סטטוס: {detail.status}</div>
                </div>
                <div></div>
              </div>
              <Dots />
            </div>
          ))}
        <Modal
          details={number}
          variant="testline"
          open={open}
          closeIt={(open) => setOpen(false)}
        />
      </div>
    );
  }
}

export default TestLine;
