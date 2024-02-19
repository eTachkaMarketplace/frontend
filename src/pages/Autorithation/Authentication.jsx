import { useEffect, useState } from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AutoDiv } from './Authentication.styled';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activateCode } from 'redux/auth/operations';
import Modal from 'modal/modal';
import { SuccesModal } from 'modal/SuccesModal/SuccesModal';

const Authentication = () => {
  const [curentPage, setCurrentPage] = useState(true);
  const { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      dispatch(activateCode({ code }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePageTrue = () => {
    setCurrentPage(true);
  };
  const changePageFalse = () => {
    setCurrentPage(false);
  };

  return (
    <>
      <AutoDiv>
        <div>
          <button type="button" className={`authBtn ${curentPage ? 'active' : ''}`} onClick={changePageTrue}>
            Увійти
          </button>
          <button type="button" className={`authBtn ${!curentPage ? 'active' : ''}`} onClick={changePageFalse}>
            Зареєструватися
          </button>
        </div>
        {curentPage ? <LoginForm /> : <RegisterForm />}
      </AutoDiv>
      <Modal>
        <SuccesModal />
      </Modal>
    </>
  );
};
export default Authentication;
