import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) => (
        !isAuthenticated && !loading
          ? <Redirect to="/login" />
          : <Component {...props} />
      )}
    />
  );
};

// PrivateRoute.propTypes = {

// };

export default PrivateRoute;
