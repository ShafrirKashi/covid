import React, { useState } from "react";
import ThreeDots from "../../Assets/img/dots.png";
import LongPress from "../../UIKit/LongPress/LongPress";
import Modal from "../../UIKit/Modal/Modal";
import "./Dots.css";

function Dots() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);

  return (
    <div>
      <div onClick={onOpenModal} className="dotsWrapper">
        <img className="dots" src={ThreeDots} alt="" />
      </div>
      <Modal variant="delete" open={open} closeIt={(open) => setOpen(false)} />
    </div>
  );
}

export default Dots;
