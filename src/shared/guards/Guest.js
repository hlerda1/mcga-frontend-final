const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');

const GuestRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (auth.user) {
    console.log(auth.user);
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestRoute;
