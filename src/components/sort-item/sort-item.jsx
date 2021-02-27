import React from 'react';
import PropTypes from 'prop-types';
import {setSort} from '../../store/action';
import {connect} from 'react-redux';

const SortItem = ({sortType, handleSortChange}) => {
  return (
    <li className="places__option places__option--active" tabIndex="0" onClick={handleSortChange}>{sortType}</li>
  );
};

SortItem.propTypes = {
  sortType: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  handleSortChange(evt) {
    const sortType = evt.target.innerText;
    dispatch(setSort(sortType));
  }
});

export {SortItem};

export default connect(null, mapDispatchToProps)(SortItem);

