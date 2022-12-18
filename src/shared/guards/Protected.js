import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  if (!auth.user) {
    const route = location.pathname;
    return <Navigate to={`/login${route ? `?redirectTo=${route}` : ''}`} />;
  }

  return children;
};

export default ProtectedRoute;
