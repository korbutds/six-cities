import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorizationStatus, RoutePathes} from '../../const';
import {logout} from '../../store/api-actions';

const HeaderNavigation = () => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const login = useSelector((state) => state.USER.login);
  const userAvatar = useSelector((state) => state.USER.userAvatar);
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

export default HeaderNavigation;
