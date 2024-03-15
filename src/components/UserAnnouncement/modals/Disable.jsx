import { useDispatch } from 'react-redux';
import { setIsOpen } from 'redux/modal/modalSlice';
import { WraperDiv } from './Disable.styled';
import { SmallXBTN, XBTN } from 'modal/confirmModal/confirmModalSVG';
import { useEffect, useState } from 'react';
import { disableById } from 'redux/advertisment/operations';
import { SvgTreu } from 'components/ChangePass/ChangeSVG';

const DisableModal = ({ id, refreshMyAdv }) => {
  const dispatch = useDispatch();
  const [complite, setComplite] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const closeModal = () => {
    dispatch(setIsOpen(false));
    refreshMyAdv();
  };

  const confirmModal = () => {
    try {
      dispatch(disableById({ id }));
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
          <h4 className="title2">Ваше оголошення успішно деактивоване</h4>
          <p className="content">Ви можете його активувати у будь-який час, натиснувши кнопку “Активувати”</p>
          <div className="buttonBox">
            <button type="button" onClick={closeModal} className="confirm">
              ОК
            </button>
          </div>
        </WraperDiv>
      ) : (
        <WraperDiv>
          <button type="button" onClick={closeModal} className="xBtn">
            {screenWidth > 768 ? <XBTN /> : <SmallXBTN />}
          </button>
          <h4 className="title">Ви впевнені що хочете очистити фільтри?</h4>
          <p className="content">
            Натискаючи на кнопку “Підтвердити” оголошення перейде в неактивний стан. Його буде переміщено в папку
            “Неактивні” в особистому кабінеті
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

export default DisableModal;
