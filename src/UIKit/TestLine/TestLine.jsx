import React, { useState } from "react";
import "./TestLine.css";
import Dots from "../../UIKit/Dots/Dots";
import Modal from "../PopModal/PopModal";




function TestLine({ details  }) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  
  if (details.length === 0) {
    return <div>לא נקבעו בדיקות</div>;
  } else {
    return (
      <div>
        {details.map((detail) => (
          <div className="TestLineWrapper">
            <div
              onClick={onOpenModal}
              onClose={onCloseModal}
              className="TestLine"
            >
              <div className="TestType">{detail.test}</div>
              <div className="PatientName">{detail.name}</div>
              <div className="">{detail.date}</div>
              <div className="">{detail.time}</div>
              <div className="Status">{detail.status}</div>
              <div className="Status">{detail.status}</div>
            </div>
           <Dots />
          </div>
        ))}
        <Modal
         details={details}
          variant="testline"
          open={open}
          closeIt={(open) => setOpen(false)}
        />
      </div>
    );
  }
}

export default TestLine;
