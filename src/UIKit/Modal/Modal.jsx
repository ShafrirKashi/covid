import React, { useState } from 'react';
import './Modal.css'
import Reg from '../../Pages/Registration/Reg';
import { Modal } from 'react-responsive-modal';

const  ModalPop = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="modal__btn" onClick={onOpenModal}>לא רשום עדין? הרשם עכשיו</button>
      <Modal open={open} onClose={onCloseModal} center>
        <Reg />
      </Modal>
    </div>
  );
};
export default ModalPop
