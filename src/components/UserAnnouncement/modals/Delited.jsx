import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';
import { WraperDiv } from './Disable.styled';
import { SmallXBTN, XBTN } from 'modal/confirmModal/confirmModalSVG';
import { useEffect, useState } from 'react';
import { deleteAdverstisementsByID } from 'redux/advertisment/operations';
import { SvgTreu } from 'components/ChangePass/ChangeSVG';
import { NavLink } from 'react-router-dom';

const DelitedModal = ({ id, refreshMyAdv }) => {
  const dispatch = useDispatch();
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [complite, setComplite] = useState(false);

  const closeModal = () => {
    dispatch(setIsOpen(false));
    refreshMyAdv();
  };

  const confirmModal = () => {
    try {
      dispatch(deleteAdverstisementsByID({ id }));
      setComplite(true);
    } catch (error) {
      console.error(error);
    }
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
    <>
      {complite ? (
        <WraperDiv>
          <button type="button" onClick={closeModal} className="xBtn">
            {screenWidth > 768 ? <XBTN /> : <SmallXBTN />}
          </button>
          <div className="circle">
            <SvgTreu />
          </div>
          <h4 className="title2">Ваше оголошення видалене</h4>
          <p className="content">Можливо Ви бажаєте створити нове оголошення?</p>
          <div className="buttonStrangeBox">
            <NavLink to="/advertisementPage">
            <button type="button" onClick={closeModal} className="confirm2">
              Створити нове оголошення
            </button>
            </NavLink >
            <button type="button" onClick={closeModal} className="cansel2">
              В особистий кабінет
            </button>
          </div>
        </WraperDiv>
      ) : (
        <WraperDiv>
          <button type="button" onClick={closeModal} className="xBtn">
            {screenWidth > 768 ? <XBTN /> : <SmallXBTN />}
          </button>
          <h4 className="title">Ви впевнені що хочете </h4>
          <p className="content">
            Натискаючи на кнопку “Підтвердити” оголошення буде видалено назавжди, без можливості його відновити
          </p>
          <div className="buttonBox">
            <button type="button" onClick={closeModal} className="cansel">
              Відмінити
            </button>
            <button type="button" onClick={confirmModal} className="confirm">
              Підтвердити
            </button>
          </div>
        </WraperDiv>
      )}
    </>
  );
};

export default DelitedModal;
