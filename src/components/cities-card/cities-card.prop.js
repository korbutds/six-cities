import PropTypes from 'prop-types';

export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'preview_image': PropTypes.string.isRequired,
  'is_premium': PropTypes.bool.isRequired,
  'price': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'type': PropTypes.string.isRequired,
  'rating': PropTypes.number.isRequired,
  'is_favorite': PropTypes.bool.isRequired
});
