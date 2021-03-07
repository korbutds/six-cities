import PropTypes from 'prop-types';
import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {sendComment} from '../../store/api-actions';

const CommentForm = ({id, onSubmit}) => {
  const commentForm = useRef();
  const [comment, setComment] = useState({
    rating: null,
    commentText: ``
  });

  const handleRatingChange = (evt) => {
    const value = parseFloat(evt.target.value);
    setComment({
      ...comment,
      rating: value,
    });
  };

  const handleCommentChange = (evt) => {
    const value = evt.target.value;
    setComment({
      ...comment,
      commentText: value,
    });
  };

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(id, comment);
    setComment({
      commentText: ``,
      rating: null
    });
    commentForm.current.reset();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleCommentSubmit} ref={commentForm}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleRatingChange} required/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleCommentChange} value={comment.commentText} required></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    dispatch(sendComment(id, comment));
  }
});

export {CommentForm};
export default connect(null, mapDispatchToProps)(CommentForm);
