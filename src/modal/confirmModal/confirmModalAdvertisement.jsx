import { useDispatch } from 'react-redux';
import { ConfDiv } from './confirmModal.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import { XBTN } from './confirmModalSVG';

const СonfirmModalAdvertisement = ({ handleSearch1 }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsOpen(false));
  };

  const confirmModalAdvertisement = () => {
    handleSearch1({
        'advertisementDTO.carDTO.carMark.name': '',
          'advertisementDTO.carDTO.carMark.carModel.name': '',
          'advertisementDTO.carDTO.carNumber': '',
          'advertisementDTO.region.name': '',
          'advertisementDTO.region.city.name': '',
          'advertisementDTO.carDTO.mileage': '',
          'advertisementDTO.carDTO.yearToCreate': '',
          'advertisementDTO.price': '',
          'advertisementDTO.carDTO.bodyType.name': '',
          'advertisementDTO.carDTO.engine.name': '',
          'advertisementDTO.carDTO.engine.volume': '',
          'advertisementDTO.carDTO.driveType.name': '',
          'advertisementDTO.carDTO.transmission.name': '',
          'advertisementDTO.carDTO.technicalState.name': '',
          'advertisementDTO.carDTO.color.name': '',
          'advertisementDTO.carDTO.vinNumber': '',
          'advertisementDTO.description': '',
          'advertisementDTO.ownerName': '',
          'advertisementDTO.ownerPhone': '',
    });
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
