import React from 'react';
import ReactDOM from 'react-dom';


import { useSelector } from 'react-redux';
import { selectIsOpen } from 'redux/modal/modalSlice';
import ModalWraper from './modalWraper/modalWraper';
import ConfirmModal from './confirmModal/confirmModal';


const Modal = ({ handleSearch }) => {
  const isOpen = useSelector(selectIsOpen);

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <ModalWraper>
          <ConfirmModal handleSearch={handleSearch} />
        </ModalWraper>
      )}
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
