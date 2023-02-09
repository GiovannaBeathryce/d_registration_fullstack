import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace />
  );
};

export default ProtectedRoutes;