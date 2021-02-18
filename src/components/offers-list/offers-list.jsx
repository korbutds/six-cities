import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from '../offer-item/offer-item';

const OffersList = ({offers}) => {
  if (offers.length === 0) {
    return ``;
  }
  return (
    <ul className="property__inside-list">
      {offers.map((offer, i) => <OfferItem offer={offer} key={`${offer}-${i}`}/>)}
    </ul>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.string.isRequired
  )
};

export default OffersList;
