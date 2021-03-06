import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthorizationStatus, RoutePathes} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoaderScreensaver from '../loading/loading';

const PrivateRoute = ({authorizationStatus, isCardsLoaded, component: Component, ...rest}) => {
  if (!isCardsLoaded) {
    return (
      <Route>
        <LoaderScreensaver />;
      </Route>
    );
  }
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

const mapStateToProps = ({authorizationStatus, isCardsLoaded}) => ({
  authorizationStatus,
  isCardsLoaded
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
