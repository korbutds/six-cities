import React from 'react';
import PropTypes from 'prop-types';

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

Review.propTypes = {
  review: PropTypes.object
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  )
};

export default Reviews;
