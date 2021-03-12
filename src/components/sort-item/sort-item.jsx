import React from 'react';
import PropTypes from 'prop-types';
import {setSort} from '../../store/action';
import {useDispatch} from 'react-redux';

const SortItem = ({sortType}) => {
  const dispatch = useDispatch();

  const handleSortChange = (evt) => {
    const sort = evt.target.innerText;
    dispatch(setSort(sort));
  };

  return (
    <li className="places__option places__option--active" tabIndex="0" onClick={handleSortChange}>{sortType}</li>
  );
};

SortItem.propTypes = {
  sortType: PropTypes.string.isRequired,
};

export default SortItem;

