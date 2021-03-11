import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux';
import {AuthorizationStatus, RoutePathes} from '../../const';
import {logout} from '../../store/api-actions';

const HeaderNavigation = (props) => {
  const {authorizationStatus, login, userAvatar} = props;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">
      {authorizationStatus === AuthorizationStatus.NO_AUTH ?
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" href="#" to={RoutePathes.LOGIN_SCREEN}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Sign in</span>
          </Link>
        </li> :
        <>
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" href="#" to={RoutePathes.FAVORITES_SCREEN}>
              <div className="header__avatar-wrapper user__avatar-wrapper"
                style={{
                  backgroundImage: `url(${userAvatar})`,
                  borderRadius: `50%`
                }}
              >
              </div>
              <span className="header__user-name user__name">{login}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link header__nav-link--profile" style={{
              marginLeft: `10px`
            }} href="#" to="/" onClick={handleLogout}>
              <span className="header__user-name user__name">Выход</span>
            </Link>
          </li>
        </>
      }
    </ul>
  );
};

HeaderNavigation.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isMainPage: PropTypes.bool,
  login: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  login: USER.login,
  userAvatar: USER.userAvatar
});

export {HeaderNavigation};

export default connect(mapStateToProps)(HeaderNavigation);
