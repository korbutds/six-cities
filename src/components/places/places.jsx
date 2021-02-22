import React, {useState} from 'react';
import CitiesCard from '../cities-card/cities-card';
import cardPropTypes from '../cities-card/cities-card.prop';
import Map from '../map/map';
import {CitiesInfo} from '../../const.js';
import PropTypes from 'prop-types';


const Places = ({cards}) => {
  const [cardId, setCardId] = useState(null);
  const [currentCity, setCurrCity] = useState(CitiesInfo.Amsterdam);
  const getCardId = (id) => {
    setCardId(id);
  };

  const handleClickChange = (evt) => {
    evt.preventDefault();
    setCurrCity(CitiesInfo[evt.target.innerText]);
  };
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#" onClick={handleClickChange}>
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cards.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {cards.map((card) => <CitiesCard card={card} onCursor={getCardId} key={card[`id`]} />) }
            </div>
          </section>
          <div className="cities__right-section">
            <Map city={currentCity} points={cards} cardId={cardId}/>
          </div>
        </div>
      </div>
    </main>
  );
};

Places.propTypes = {
  cards: PropTypes.arrayOf(
      cardPropTypes
  )
};

export default Places;
