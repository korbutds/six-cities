import React from 'react';
import FavoritesItem from '../favorites-item/favorites-item';
import {getCitiesNames, getCitySortedPlaces} from '../../utils';
import cardsPropTypes from '../places/places.prop.js';

const FavotritesList = ({favoritesCards}) => {

  const favoriteLocationsCards = getCitySortedPlaces(favoritesCards);
  const favoritesCities = getCitiesNames(favoritesCards).sort();
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesCities.map((city, i) => <FavoritesItem cards={favoriteLocationsCards[city]} city={city} key={`${city}-${i}`}/>)}
      </ul>
    </section>
  );
};

FavotritesList.propTypes = {
  favoritesCards: cardsPropTypes
};

export default FavotritesList;
