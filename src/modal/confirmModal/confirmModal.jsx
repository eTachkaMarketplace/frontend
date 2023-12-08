import { useDispatch } from 'react-redux';
import { ConfDiv } from './confirmModal.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import { XBTN } from './confirmModalSVG';

const ConfirmModal = ({ handleSearch }) => {
  const distatch = useDispatch();

  const closeModal = () => {
    distatch(setIsOpen(false));
  };

  const confirmModal = () => {
    handleSearch({
      status: '',
      brand: '',
      model: '',
      region: '',
      yearFrom: '',
      yearTo: '',
      priceFrom: '',
      priceTo: '',
      bodyType: '',
      fuelType: '',
      engineCapacity: '',
      mileageFrom: '',
      mileageTo: '',
      driveType: '',
      transmission: '',
      condition: '',
      color: '',
    });
    distatch(setIsOpen(false));
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
        Натискаючи на кнопку “підтвердити” фільтри повністю очистяться
      </p>
      <div className="buttonBox">
        <button type="button" onClick={closeModal} className="cansel">
          Відмінити
        </button>
        <button type="button" onClick={confirmModal} className="confirm">
          Підтвердити
        </button>
      </div>
    </ConfDiv>
  );
};

export default ConfirmModal;
