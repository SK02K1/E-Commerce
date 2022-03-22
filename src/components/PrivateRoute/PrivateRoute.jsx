import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts';

export const PrivateRoute = () => {
  const {
    userData: { encodedToken },
  } = useAuth();
  const location = useLocation();
  return encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};
