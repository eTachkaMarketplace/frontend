import { SvgTreu } from "components/ChangePass/ChangeSVG";
import { WraperDiv } from "components/UserAnnouncement/modals/Disable.styled";
import { SmallXBTN, XBTN } from "modal/confirmModal/confirmModalSVG";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsOpen } from "redux/modal/modalSlice";

export const SuccesModal = () => {
  const dispatch = useDispatch();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const closeModal = () => {
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
      <WraperDiv>
        <button type="button" onClick={closeModal} className="xBtn">
          {screenWidth > 768 ? <XBTN /> : <SmallXBTN />}
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