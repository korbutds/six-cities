import React from 'react';
import {CityList} from '../../const';
import LocationItem from '../location-item/location-item';

const LocationList = ({currentCity, onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityList).map((city, i) => <LocationItem city={city} key={`${city}-${i}`} currentCity={currentCity} onClickHandle={onCityClick}/>)}
    </ul>
  );
};

export default LocationList;
