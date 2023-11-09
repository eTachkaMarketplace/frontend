import { useState } from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AutoDiv } from './Authentication.styled';

const Authentication = () => {
  const [curentPage, setCurrentPage] = useState(true);

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
          <button
            type="button"
            className={`authBtn ${curentPage ? 'active' : ''}`}
            onClick={changePageTrue}
          >
            Увійти
          </button>
          <button
            type="button"
            className={`authBtn ${!curentPage ? 'active' : ''}`}
            onClick={changePageFalse}
          >
            Зареєструватись
          </button>
        </div>
        {curentPage ? <LoginForm /> : <RegisterForm />}
      </AutoDiv>
    </>
  );
};
export default Authentication;
