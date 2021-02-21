import React from 'react';
import commentsPropTypes from './comments.prop.js';
import Review from '../review/review';

const Reviews = ({comments}) => {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => {
          return <Review review={review} key={review.id}/>;
        })}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  comments: commentsPropTypes
};

export default Reviews;
