import React from 'react';
import PropTypes from 'prop-types';

const OfferItem = ({offer}) => {
  return (
    <li className="property__inside-item">{offer}</li>
  );
};

OfferItem.propTypes = {
  offer: PropTypes.string.isRequired
};

export default OfferItem;
