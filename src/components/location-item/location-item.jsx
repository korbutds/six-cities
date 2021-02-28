import React from 'react';
import {connect} from 'react-redux';
import loactionItemPropTypes from './location-item.props';

const LocationItem = (props) => {
  const {city, currentCity, onClickHandle} = props;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`} href="#" onClick={onClickHandle}>
        <span>{city}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = loactionItemPropTypes;

const mapStateToProps = ({location}) => ({
  currentCity: location
});

export {LocationItem};
export default connect(mapStateToProps)(LocationItem);
