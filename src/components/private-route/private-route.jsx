import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthorizationStatus, RoutePathes} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PrivateRoute = ({authorizationStatus, component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? <Component {...props} />
            : <Redirect to={RoutePathes.LOGIN_SCREEN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = () => ({
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
});

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
