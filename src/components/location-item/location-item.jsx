import React from 'react';
import loactionItemPropTypes from './location-item.props';

const LocationItem = ({city, currentCity, onClickHandle}) => {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity.name === city ? `tabs__item--active` : ``}`} href="#" onClick={onClickHandle}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = loactionItemPropTypes;

export default LocationItem;
