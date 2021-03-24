import React from 'react';
import Review from '../review/review';
import {useSelector} from 'react-redux';
import {getCurrentCityComments} from '../../utils';

const Reviews = () => {
  const comments = useSelector((state) => state.CURRENT_OFFER.comments);
  const commentsNew = getCurrentCityComments(comments);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsNew.length}</span></h2>
      <ul className="reviews__list">
        {commentsNew.map((review) => {
          return <Review review={review} key={review.id}/>;
        })}
      </ul>
    </>
  );
};

export default Reviews;
