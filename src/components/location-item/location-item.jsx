import React from 'react';
import {useSelector} from 'react-redux';
import loactionItemPropTypes from './location-item.props';

const LocationItem = (props) => {
  const {city, onClickHandle} = props;
  const {location: currentCity} = useSelector((state) => state.SCREEN);
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#" onClick={onClickHandle}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = loactionItemPropTypes;

export default LocationItem;
