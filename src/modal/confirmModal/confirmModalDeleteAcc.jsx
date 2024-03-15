import { useDispatch } from 'react-redux';
import { ConfDiv } from './confirmModal.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import { SmallXBTN, XBTN } from './confirmModalSVG';
import { logout } from 'redux/auth/authSlice';
import { getAdvFav } from 'redux/advertisment/operations';
import { useEffect, useState } from 'react';

const ConfirmModalDeleteAcc = ({ handleDeleteAccount }) => {
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const closeModal = () => {
    dispatch(setIsOpen(false));
  };

  const confirmModalDeleteAcc = () => {
    handleDeleteAccount();
    dispatch(logout());
    dispatch(getAdvFav());
    dispatch(setIsOpen(false));
  };
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const newWidth = entries[0]?.contentRect?.width;
      if (newWidth && newWidth !== screenWidth) {
        setScreenWidth(newWidth);
      }
    });

    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [screenWidth]);

  return (
    <ConfDiv>
      <button type="button" onClick={closeModal} className="xBtn">
        {screenWidth > 768 ? <XBTN /> : <SmallXBTN />}
      </button>
      <h4 className="title">Ви впевнені що хочете видалити профіль?</h4>
      <p className="content">Вся інформація буде видалена. ЇЇ неможливо буде відновити.</p>
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
