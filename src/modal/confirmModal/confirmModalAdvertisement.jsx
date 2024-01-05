import { useDispatch } from 'react-redux';
import { ConfDiv } from './confirmModal.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import { XBTN } from './confirmModalSVG';

const СonfirmModalAdvertisement = ({ clearForm }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsOpen(false));
  };

  const confirmModalAdvertisement = () => {
    console.log('Confirming and clearing form...');
    clearForm();
    dispatch(setIsOpen(false));
  };

  return (
    <ConfDiv>
      <button type="button" onClick={closeModal} className="xBtn">
        <XBTN />
      </button>
      <h4 className="title">
        Ви впевнені що хочете <span className="cringe">очистити</span> фільтри?
      </h4>
      <p className="content">
      Натискаючи на кнопку “підтвердити” форма заповнення <br/>оголошення повністю очиститься
      </p>
      <div className="buttonBox">
        <button type="button" onClick={closeModal} className="cansel">
          Відмінити
        </button>
        <button type="button" onClick={confirmModalAdvertisement} className="confirm">
          Підтвердити
        </button>
      </div>
    </ConfDiv>
  );
};

export default СonfirmModalAdvertisement;
