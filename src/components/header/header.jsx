import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({isLogged = false, isMainPage = false}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link ${isMainPage ? `header__logo-link--active` : ``}`} to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isLogged === false ?
                  <Link className="header__nav-link header__nav-link--profile" href="#" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Sign in</span>
                  </Link> :
                  <Link className="header__nav-link header__nav-link--profile" href="#" to="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">ds.korbut@gmail.com</span>
                  </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isMainPage: PropTypes.bool
};

export default Header;
