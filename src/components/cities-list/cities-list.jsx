import React from 'react';
import CitiesCard from '../cities-card/cities-card';
import Map from '../map/map';

const CitiesList = ({cards, onCursorHandle, currentCity, cardId}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cards.length} {cards.length > 1 ? `places` : `place`} to stay in {currentCity.name}</b>
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
            {cards.map((card) => <CitiesCard card={card} onCursorHandle={onCursorHandle} key={card[`id`]} />) }
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={currentCity} points={cards} cardId={cardId}/>
        </div>
      </div>
    </div>
  );
};

export default CitiesList;
