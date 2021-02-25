import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SortList from '../sort-list/sort-list';

const Sort = (props) => {
  const {sortType} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList />
    </form>
  );
};

Sort.propTypes = {
  sortType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  sortType: state.sort
});

export {Sort};
export default connect(mapStateToProps)(Sort);

