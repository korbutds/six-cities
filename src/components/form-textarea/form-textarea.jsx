import PropTypes from 'prop-types';
import React, {memo} from 'react';

const FormTextarea = ({value, handleCommentChange}) => {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleCommentChange}
      value={value}
      required></textarea>
  );
};

FormTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  handleCommentChange: PropTypes.func.isRequired
};

export default memo(FormTextarea);
