import React from 'react';
import commentPropTypes from './comment.prop.js';

const Review = ({review}) => {
  const {
    user,
    rating,
    comment,
    date
  } = review;
  const commentDate = new Date(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user[`avatar_url`]} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: `${rating * 20}%`
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={commentDate.toISOString()}>{`${commentDate.toLocaleDateString(`en`, {month: `long`})} ${commentDate.toLocaleDateString(`en`, {year: `numeric`})}`}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: commentPropTypes
};

export default Review;
