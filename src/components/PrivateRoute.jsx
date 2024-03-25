import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

  const isUserLoggedIn = IsLoggedIn || storedIsLoggedIn;

  console.log(IsLoggedIn)
  return isUserLoggedIn ? children : <Navigate to={redirectTo} />;
};