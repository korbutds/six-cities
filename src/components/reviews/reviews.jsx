import React, {useEffect} from 'react';
import Review from '../review/review';
import {useDispatch, useSelector} from 'react-redux';
import LoaderScreensaver from '../loading/loading.jsx';
import {fetchCommentsList} from '../../store/api-actions.js';
import {useParams} from 'react-router';

const Reviews = () => {
  const comments = useSelector((state) => state.CURRENT_OFFER.comments);
  const isCommentsLoaded = useSelector((state) => state.CURRENT_OFFER.isCommentsLoaded);
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(fetchCommentsList(id));

  }, [id]);

  if (!isCommentsLoaded) {
    return <LoaderScreensaver />;
  }
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
