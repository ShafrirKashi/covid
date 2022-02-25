import React, { useState } from 'react';
import './Modal.css'
import Tabs from '../../UIKit/Tabs/Tabs';
import { Modal } from 'react-responsive-modal';

function ModalPop (props) {
  
 
 


  return (
    <div>
      
      {/* <button className="modal__btn" onClick={onOpenModal}>as2d</button> */}
      <Modal open={props.states} onClose={()=> props.closeIt(false)} center>
        <div className="QR">
          <Tabs />
        </div>
      </Modal>
    </div>
  );
};
export default ModalPop
