import React from 'react';
import Review from '../review/review';
import {useSelector} from 'react-redux';

const Reviews = () => {
  const comments = useSelector((state) => state.CURRENT_OFFER.comments);

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

export default Reviews;
