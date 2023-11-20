import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const PublickRoute = ({children, redirectTo = '/'}) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return !IsLoggedIn ? children : <Navigate to={redirectTo}/>;
};

// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { selectIsLoggedIn } from '../redux/auth/selectors';

// export const PrivateRoute = () => {
//   const IsLoggedIn = useSelector(selectIsLoggedIn);

//   return IsLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
// };