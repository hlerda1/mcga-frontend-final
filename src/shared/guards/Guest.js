import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (auth.user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestRoute;
