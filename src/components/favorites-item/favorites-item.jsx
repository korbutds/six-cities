import React from 'react';
import cardsPropTypes from '../places/places.prop.js';
import PropTypes from 'prop-types';
import FavoritesCard from '../favorites-card/favorites-card';

const FavoritesItem = ({city, cards}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cards.map((card) => <FavoritesCard card={card} key={card[`id`]}/>) }
      </div>
    </li>

  );
};


FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  cards: cardsPropTypes
};

export default FavoritesItem;
