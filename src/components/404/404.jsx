import React from 'react';

const NotFoundScreen = () => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="container page__favorites-container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Page Not Found</h1>
          <div className="favorites__status-wrapper"
            style= {{
              backgroundImage: `none`
            }}
          >
            <b className="favorites__status">404.</b>
            <p className="favorites__status-description">Page not found.</p>
          </div>
        </section>
      </div>
    </main>

  </div>
);

export default NotFoundScreen;
