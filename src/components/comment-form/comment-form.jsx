import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FetchStatus} from '../../const';
import {changeFetchStatus} from '../../store/current-offer-data/actions';
import {sendComment} from '../../store/current-offer-data/api-actions';
import {CommentSettings} from '../../utils';
import FormRating from '../form-rating/form-rating';
import FormTextarea from '../form-textarea/form-textarea';

const CommentForm = ({id}) => {
  const commentForm = useRef();
  const [comment, setComment] = useState({
    rating: null,
    commentText: ``
  });

  const fetchStatus = useSelector((state) => state.DATA.fetchStatus);

  useEffect(() => {
    if (fetchStatus === FetchStatus.DONE) {
      setComment({
        rating: null,
        commentText: ``
      });
    }
  }, [fetchStatus]);


  const isFormDisabled = (comment.rating === null || comment.commentText === `` || fetchStatus === FetchStatus.SENDING || comment.commentText.length <= CommentSettings.MIN_SIZE);

  const handleRatingChange = useCallback((evt) => {
    const value = parseFloat(evt.target.value);
    setComment((prevState) => ({
      ...prevState,
      rating: value,
    }));
  }, [comment.rating]);

  const handleCommentChange = useCallback((evt) => {
    const value = evt.target.value;
    setComment((prevState) => ({
      ...prevState,
      commentText: value,
    }));
  }, [comment.commentText]);

  const dispatch = useDispatch();

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();
    dispatch(changeFetchStatus(FetchStatus.SENDING));
    dispatch(sendComment(id, comment));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleCommentSubmit}
      ref={commentForm}
      disabled={isFormDisabled}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating rating={comment.rating} handleRatingChange={handleRatingChange}/>
      <FormTextarea value={comment.commentText} handleCommentChange={handleCommentChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormDisabled} >Submit</button>
        {fetchStatus === FetchStatus.ERROR ? <span className="review-error">Oops, ERROR. Try again</span> : ``}
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CommentForm;
