import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CitiesCard from '../cities-card/cities-card';
import PropTypes from 'prop-types';
import {createSelector} from 'reselect';
import cardPropTypes from '../cities-card/cities-card.prop';
import Map from '../map/map';
import Sort from '../sort/sort';
import NoPlaces from '../no-places/no-places';
import {getCurrentCityOffers} from '../../store/offers-data/selectors';

const CitiesList = () => {
  const [cardId, setCardId] = useState(null);
  const currentCity = useSelector((state) => state.SCREEN.location);
  const rootState = useSelector((state) => state);

  const getCards = (state) => state.DATA.cards;
  const getLocation = (state) => state.SCREEN.location;
  const getSortType = (state) => state.SCREEN.sort;

  const currentCityCards = createSelector(getCards, getLocation, getSortType, getCurrentCityOffers)(rootState);

  if (currentCityCards.length === 0) {
    return <NoPlaces />;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentCityCards.length} {currentCityCards.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">
            {currentCityCards.map((card) => <CitiesCard card={card} onCursorHandle={setCardId} key={card[`id`]} />) }
          </div>
        </section>
        <div className="cities__right-section">
          <Map cards={currentCityCards} cardId={cardId}/>
        </div>
      </div>
    </div>
  );
};

CitiesList.propTypes = {
  currentCityPlaces: PropTypes.arrayOf(cardPropTypes),
};

export default CitiesList;
