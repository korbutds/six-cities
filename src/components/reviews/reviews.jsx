import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import commentsPropTypes from './comments.prop.js';
import Review from '../review/review';
import {connect} from 'react-redux';
import LoaderScreensaver from '../loading/loading.jsx';
import {fetchCommentsList} from '../../store/api-actions.js';
import {useParams} from 'react-router';

const Reviews = ({comments, isCommentsLoaded, onLoad}) => {
  const {id} = useParams();
  useEffect(() => {
    onLoad(id);

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

Reviews.propTypes = {
  comments: commentsPropTypes,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  isCommentsLoaded: DATA.isCommentsLoaded,
  comments: DATA.comments
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchCommentsList(id));
  }
});


export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
