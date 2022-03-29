import React, { useState } from "react";
import "./WorkerLine.css";
import Switch from "../Switch/Switch";
import Modal from "../PopModal/PopModal";

function WorkerLine({ rows }) {
  if (rows.length === 0) {
    return <div>לא נקבעו בדיקות</div>;
  } else {
    return (
      <div className="WorkerLineGod">
        <div className="WorkerLineHeader">
          <span>הרשאות עובדים</span>
        </div>
        <div className="WorkerPageHeader">
          <span className="WorkerName">שם עובד</span>
          <span className="WorkerPos">מס' עמדה</span>
          <span className="WorkerOccupation">תפקיד</span>
          <span className="WorkerNum">מספר עובד</span>
          <span className="approveSwitch">גישה</span>
        </div>
        <div className="WorkerList">
          {rows.map((row) => (
            <div className="WorkerLine">
              <span className="WorkerName">{row.name}</span>
              <span className="WorkerPos">{row.position}</span>
              <span className="WorkerOccupation">{row.occupation}</span>
              <span className="WorkerNum">{row.workerNum}</span>
              <div className="approveSwitch">
                <Switch />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WorkerLine;
