import { useDispatch } from 'react-redux';
import { ConfDiv } from './confirmModal.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import { XBTN } from './confirmModalSVG';

const ConfirmModalDeleteAcc = ({ handleDeleteAccount }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsOpen(false));
  };

  const confirmModalDeleteAcc = () => {
    handleDeleteAccount();
    dispatch(setIsOpen(false));
  };

  return (
    <ConfDiv>
      <button type="button" onClick={closeModal} className="xBtn">
        <XBTN />
      </button>
      <h4 className="title">
        Ви впевнені що хочете видалити профіль?
      </h4>
      <p className="content">
      Вся інформація буде видалена. ЇЇ неможливо буде відновити.
      </p>
      <div className="buttonBox">
        <button type="button" onClick={closeModal} className="cansel">
          Відмінити
        </button>
        <button type="button" onClick={confirmModalDeleteAcc} className="confirm">
          Підтвердити
        </button>
      </div>
    </ConfDiv>
  );
};

export default ConfirmModalDeleteAcc;
