import React from 'react';
import ReactDOM from 'react-dom';

import { useSelector } from 'react-redux';
import { selectIsOpen } from 'redux/modal/modalSlice';
import ModalWraper from './modalWraper/modalWraper';
import ConfirmModalAdvertisement from './confirmModal/confirmModalAdvertisement';


const Modal = ({ handleSearch1 }) => {
  const isOpen = useSelector(selectIsOpen);

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <ModalWraper>
          <ConfirmModalAdvertisement handleSearch1={handleSearch1} />
        </ModalWraper>
      )}
    </>,
    document.getElementById('portal')
  );
};

export default Modal;