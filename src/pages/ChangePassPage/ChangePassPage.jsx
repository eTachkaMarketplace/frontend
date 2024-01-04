import ChangePass from 'components/ChangePass/ChangePass';
import ForgotPass from 'components/ForgotPass/ForgotPass';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { acceptCode } from 'redux/user/opetations';
import { selectUser } from 'redux/user/selectors';

export default function ChangePassPage() {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const { code } = useParams();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (code) {
      try {
        dispatch(acceptCode(code));
        if (user) setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }
    }
  }, [code, dispatch, user]);
  return <div>{success ? <ChangePass /> : <ForgotPass />}</div>;
}
