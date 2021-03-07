import React from 'react';
import {AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoaderScreensaver from '../loading/loading';

const PrivateRoute = ({authorizationStatus, isCardsLoaded, component: Component, noAuth}) => {
  if (!isCardsLoaded) {
    return <LoaderScreensaver />;
  }
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? <Component />
      : noAuth()
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
