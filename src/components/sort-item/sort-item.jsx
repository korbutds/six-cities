import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setSort} from '../../store/screen/actions';

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

