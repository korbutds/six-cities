import React from 'react';
import {CityList} from '../../const';
import LocationItem from '../location-item/location-item';

const LocationList = () => {
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityList).map((city, i) => <LocationItem city={city} key={`${city}-${i}`} currentCity={`Amsterdam`}/>)}
    </ul>
  );
};

export default LocationList;
