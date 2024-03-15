import { useDispatch } from 'react-redux';
import { ConfDiv } from './confirmModal.styled';
import { setIsOpen } from 'redux/modal/modalSlice';
import { SmallXBTN, XBTN } from './confirmModalSVG';
import { useEffect, useState } from 'react';

const СonfirmModalAdvertisement = ({ resetForm }) => {
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const closeModal = () => {
    dispatch(setIsOpen(false));
  };

  const confirmModalAdvertisement = () => {
    resetForm();
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
      <h4 className="title">
        Ви впевнені що хочете <span className="cringe">очистити</span> фільтри?
      </h4>
      <p className="content">
        Натискаючи на кнопку “підтвердити” форма заповнення <br />
        оголошення повністю очиститься
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
