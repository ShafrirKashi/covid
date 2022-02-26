import React, { useState } from 'react';
import './Modal.css'
import Tabs from '../../UIKit/Tabs/Tabs';
import OrderCheck from '../../UIKit/OrderCheck/OrderCheck';
import RemoveTestLine from '../../UIKit/RemoveTestLine/RemoveTestLine';
import { Modal } from 'react-responsive-modal';

function ModalPop ({variant, open, ...props}) {
  
 
 

 if(variant === "testline"){
  return (
    <div>
      
      <Modal open={open} onClose={()=> props.closeIt(false)} center>
        <div className="QR">
          <Tabs />
        </div>
      </Modal>
    </div>
  );
}else if(variant === "add"){
  return(
    <div>
    <Modal open={open} onClose={()=> props.closeIt(false)} center>
      <div className="Add">
    <OrderCheck />
      </div>
    </Modal>
  </div>
  );
}else if (variant === "delete"){
  return (
  <div>
  <Modal open={open} onClose={()=> props.closeIt(false)} center>
    <div className="delete">
  <RemoveTestLine />
    </div>
  </Modal>
</div>
  );
}else{return ""}

};
export default ModalPop
