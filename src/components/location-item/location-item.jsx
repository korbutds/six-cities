import React from 'react';
import loactionItemPropTypes from './location-item.props';

const LocationItem = ({city, currentCity}) => {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#" >
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = loactionItemPropTypes;

export default LocationItem;
