import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLogin, selectorToken } from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectorIsLogin);
  const isToken = useSelector(selectorToken);
  if (isToken && !isLoggedIn) {
    return <p>Loading...</p>;
  }
  return isLoggedIn && isToken ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
