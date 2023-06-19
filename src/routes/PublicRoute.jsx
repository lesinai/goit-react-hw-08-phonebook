import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorToken } from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

function PublicRoute({ children, restricted }) {
  const isLoggedIn = useSelector(selectorToken);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to="/contacts" /> : children}</>;
}
export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
};
