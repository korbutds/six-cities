import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderNavigation from '../header-navigation/header-navigation';

const Header = ({isMainPage = false}) => {
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
            <HeaderNavigation />
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMainPage: PropTypes.bool,
};

export default Header;

