import React from 'react';
import {CityList} from '../../const';
import LocationItem from '../location-item/location-item';

const LocationList = (props) => {
  const {onCityClick} = props;
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityList).map((city, i) => <LocationItem city={city} key={`${city}-${i}`} onClickHandle={onCityClick}/>)}
    </ul>
  );
};

export default LocationList;
