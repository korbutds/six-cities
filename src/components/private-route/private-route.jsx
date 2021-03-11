import React from 'react';
import {AuthorizationStatus} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoaderScreensaver from '../loading/loading';
import {getAuthorisationStatus} from '../../store/user-data/selectors';
import {getCardsLoadedStatus} from '../../store/offers-data/selectors';

const PrivateRoute = ({authorizationStatus, isCardsLoaded, component, noAuth}) => {
  if (!isCardsLoaded) {
    return <LoaderScreensaver />;
  }
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? component()
      : noAuth()
  );
};

PrivateRoute.propTypes = () => ({
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
});

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorisationStatus(state),
  isCardsLoaded: getCardsLoadedStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
