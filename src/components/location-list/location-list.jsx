import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '../location-item/location-item';
import {CityList} from '../../const';

const LocationList = ({onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityList).map((city, i) => <LocationItem city={city} key={`${city}-${i}`} onClickHandle={onCityClick}/>)}
    </ul>
  );
};

LocationList.propTypes = {
  onCityClick: PropTypes.func.isRequired,
};

export default LocationList;

