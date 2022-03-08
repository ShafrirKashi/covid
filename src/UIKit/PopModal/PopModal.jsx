import React from "react";
import "./PopModal.css";
import Tabs from "../Tabs/Tabs";
import OrderCheck from "../OrderCheck/OrderCheck";
import RemoveTestLine from "../RemoveTestLine/RemoveTestLine";
import AddChild from "../AddChild/AddChild";
import { Modal } from "react-responsive-modal";
import Button from "@mui/material/Button";
import FloatingButton from "../../UIKit/FloatingButton/FloatingButton";

function ModalPop({ variant, open, details, ...props }) {
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
            <div className="orderCheckHeader">
              <p>שלום אורח/ת </p>
            </div>
            <OrderCheck />
            <div className="orderCheckBottom">
              <div className="btn_child">
            <FloatingButton />
            </div>
            </div>
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
  } else  if (variant === "addChild") {
    return (
      <div>
        <Modal open={open} onClose={() => props.closeIt(false)} center>
          <div className="addChild">
            <div className="addChildHeader"></div>
            <div className="addChildContent">
      <AddChild />
      </div>
          </div>
        </Modal>
      </div>
    );
  } else {return ""}

}
export default ModalPop;
