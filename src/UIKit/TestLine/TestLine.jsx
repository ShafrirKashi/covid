import React, { useState } from 'react';
import "./TestLine.css";
import TestIcon from "../../Assets/img/testicon.png";
import Modal from "../../UIKit/Modal/Modal";



function TestLine({ details }) {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  if (details.length === 0) {
    return <div>לא נקבעו בדיקות</div>;
  } else {
    return (
      <div>
        {details.map((detail) => (
          <div onClick={onOpenModal} onClose={onCloseModal} className="TestLine">
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
        <Modal states={open} closeIt={open => setOpen(false)}/>
      </div>
    );
  }
}

export default TestLine;
