import React from "react";
import "./PopModal.css";
import Tabs from "../Tabs/Tabs";
import OrderCheck from "../OrderCheck/OrderCheck";
import RemoveTestLine from "../RemoveTestLine/RemoveTestLine";
import AddChild from "../AddChild/AddChild";
import { Modal } from "react-responsive-modal";
import OTP from '../../UIKit/OTP/OTP'

function ModalPop({ variant, open, details,stateChange, ...props }) {
  if (variant === "testline") {
    return (
      <div>
        <Modal open={open} onClose={() => props.closeIt(false)} center>
          <div className="QR">
            <Tabs details={details} />
          </div>
        </Modal>
      </div>
    );
  } else if (variant === "add") {
    return (
      <div>
        <Modal open={open} onClose={() => props.closeIt(false)} center>
          <div className="Add">
            <OrderCheck />
          </div>
        </Modal>
      </div>
    );
  } else if (variant === "delete") {
    return (
      <div>
        <Modal open={open} onClose={() => props.closeIt(false)} center>
          <div className="delete">
            <RemoveTestLine />
          </div>
        </Modal>
      </div>
    );
  } else if (variant === "addChild") {
    return (
      <div>
        <Modal open={open} onClose={() => props.closeIt(false)} center>
          <div className="addChild">
            <AddChild />
          </div>
        </Modal>
      </div>
    );
  } else if (variant === "OTPModal") {
    return (
      <div>
        <Modal open={open} onClose={() => props.closeIt(false)} center>
          <div className="OTPModal">
            <OTP stateChange={stateChange} />
          </div>
        </Modal>
      </div>
    );
  }else{return ""}
}
export default ModalPop;
