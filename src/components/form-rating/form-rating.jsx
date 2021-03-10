import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {RATTING_COUNT} from '../../const';

const FormRating = ({handleRatingChange, rating}) => {

  return (
    <div className="reviews__rating-form form__rating">
      {Array(RATTING_COUNT).fill(Math.random()).map((value, i) => (
        <React.Fragment key={`${value}-${i}-rating-score`} >
          <input
            className="form__rating-input visually-hidden"
            name="rating" value={`${RATTING_COUNT - i}`}
            id={`${RATTING_COUNT - i}-stars`}
            type="radio"
            onChange={handleRatingChange}
            checked={rating === i + 1}
            required/>
          <label htmlFor={`${RATTING_COUNT - i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

FormRating.propTypes = {
  handleRatingChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired
};

export default memo(FormRating);
