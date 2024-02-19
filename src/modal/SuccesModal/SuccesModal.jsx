import { SvgTreu } from "components/ChangePass/ChangeSVG";
import { WraperDiv } from "components/UserAnnouncement/modals/Disable.styled";
import { XBTN } from "modal/confirmModal/confirmModalSVG";
import { useDispatch } from "react-redux";
import { setIsOpen } from "redux/modal/modalSlice";

export const SuccesModal = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
      dispatch(setIsOpen(false));
    };
    return (
      <WraperDiv>
        <button type="button" onClick={closeModal} className="xBtn">
          <XBTN />
        </button>
        <div className="circle">
          <SvgTreu />
        </div>
        <h4 className="title2">Реєстрація пройшла успішно</h4>
        <p className="content">
          Ми відправили лист Вам на пошту. Пройдіть за посиланням у листі для підтвредження Вашого e-mail.
        </p>
      </WraperDiv>
    );
}