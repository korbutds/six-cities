import PropTypes from 'prop-types';

export const cardPropTypes = {
  'preview_image': PropTypes.string.isRequired,
  'is_premium': PropTypes.bool.isRequired,
  'price': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'type': PropTypes.string.isRequired,
  'rating': PropTypes.number.isRequired
};

export const cardsPropTypes = PropTypes.arrayOf(
    PropTypes.shape(cardPropTypes)
);
