import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import commentsPropTypes from './comments.prop.js';
import Review from '../review/review';
import {connect} from 'react-redux';
import LoaderScreensaver from '../loading/loading.jsx';
import {fetchCommentsList} from '../../store/api-actions.js';

const Reviews = ({comments, isCommentsLoaded, onLoad, id}) => {
  useEffect(() => {
    onLoad(id);
  }, [comments]);

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
  id: PropTypes.number.isRequired
};

const mapStateToProps = ({isCommentsLoaded, comments}) => ({
  isCommentsLoaded,
  comments
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchCommentsList(id));
  }
});


export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
