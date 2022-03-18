import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts';

export const PrivateRoute = () => {
  const { encodedToken } = useAuth();
  return encodedToken ? <Outlet /> : <Navigate to='/login' replace />;
};
