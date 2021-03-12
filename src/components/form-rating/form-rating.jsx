import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {RatingTitles} from '../../const';

const FormRating = ({handleRatingChange, rating}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingTitles.map((value, i) => {
        const starRating = RatingTitles.length - i;
        return (
          <React.Fragment key={`${value}-${i}-rating-score`} >
            <input
              className="form__rating-input visually-hidden"
              name="rating" value={`${starRating}`}
              id={`${starRating}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={rating === starRating}
              required/>
            <label htmlFor={`${RatingTitles.length - i}-stars`} className="reviews__rating-label form__rating-label" title={value}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

FormRating.propTypes = {
  handleRatingChange: PropTypes.func.isRequired,
  rating: PropTypes.number
};

export default memo(FormRating);
