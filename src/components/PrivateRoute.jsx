import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return IsLoggedIn ? children : <Navigate to={redirectTo} />;
};