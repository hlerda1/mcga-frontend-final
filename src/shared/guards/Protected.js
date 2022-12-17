const { useSelector } = require('react-redux');
const { Navigate, useLocation } = require('react-router-dom');

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
