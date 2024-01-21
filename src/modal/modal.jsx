import React from 'react';
import ReactDOM from 'react-dom';

import { useSelector } from 'react-redux';
import { selectIsOpen } from 'redux/modal/modalSlice';
import ModalWraper from './modalWraper/modalWraper';

const Modal = ({ children }) => {
  const isOpen = useSelector(selectIsOpen);

  return ReactDOM.createPortal(
    <>{isOpen && <ModalWraper>{children}</ModalWraper>}</>,
    document.getElementById('portal')
  );
};

export default Modal;
