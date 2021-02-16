import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const NotFoundScreen = () => (
  <div className="page page--gray page--main">
    <Header isLogged={false} />

    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">404</b>
              <p className="cities__status-description">We are sorry, but page not found</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFoundScreen;
