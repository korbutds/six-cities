import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '../location-item/location-item';
import {connect} from 'react-redux';

const LocationList = ({onCityClick, cities}) => {
  return (
    <ul className="locations__list tabs__list">
      {Object.keys(cities).map((city, i) => <LocationItem city={city} key={`${city}-${i}`} onClickHandle={onCityClick}/>)}
    </ul>
  );
};

LocationList.propTypes = {
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = ({cities}) => ({
  cities
});

export {LocationList};
export default connect(mapStateToProps)(LocationList);

