import React, {useCallback} from 'react';
import LocationItem from '../location-item/location-item';
import {CityList} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../../store/screen/actions';

const LocationList = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.SCREEN.location);

  const handleCityChange = useCallback((evt) => {
    const currentCity = evt.target.innerText;
    dispatch(setLocation(currentCity));
  }, [location]);
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(CityList).map((city, i) => <LocationItem city={city} key={`${city}-${i}`} onClickHandle={handleCityChange}/>)}
    </ul>
  );
};

export default LocationList;

