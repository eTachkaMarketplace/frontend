import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOpen } from "redux/modal/modalSlice";
import { WraperDiv } from "./Disable.styled";
import { XBTN } from "modal/confirmModal/confirmModalSVG";
import { SvgTreu } from "components/ChangePass/ChangeSVG";
import { enableById } from "redux/advertisment/operations";

const ActivateModal = ({ id, refreshMyAdv }) => {
  const dispatch = useDispatch();
  const [complite, setComplite] = useState(false);

  const closeModal = () => {
    dispatch(setIsOpen(false));
    refreshMyAdv();
  };

  const confirmModal = () => {
    try {
      dispatch(enableById({ id }));
      setComplite(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {complite ? (
        <WraperDiv>
          <button type="button" onClick={closeModal} className="xBtn">
            <XBTN />
          </button>
          <div className="circle">
            <SvgTreu />
          </div>
          <h4 className="title2">Ваше оголошення успішно активоване </h4>
          <p className="content">Ви можете його деактивувати у будь-який час, натиснувши кнопку “Деактивувати”</p>
          <div className="buttonBox">
            <button type="button" onClick={closeModal} className="confirm">
              ОК
            </button>
          </div>
        </WraperDiv>
      ) : (
        <WraperDiv>
          <button type="button" onClick={closeModal} className="xBtn">
            <XBTN />
          </button>
          <h4 className="title">Ви впевнені що хочете активувати оголошення? </h4>
          <p className="content">
            Натискаючи на кнопку “Підтвердити” оголошення перейде в активний стан. Його зможуть бачити покупці та буде
            переміщено в папку “Активні” в особистому кабінеті
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

export default ActivateModal;
