import PropTypes from 'prop-types';


export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'user': PropTypes.shape({
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool.isRequired,
    'name': PropTypes.string.isRequired,
    'avatar_url': PropTypes.string.isRequired
  }),
  'rating': PropTypes.number.isRequired,
  'comment': PropTypes.string.isRequired,
  'date': PropTypes.string.isRequired,
});
