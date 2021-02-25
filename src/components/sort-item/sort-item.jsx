import React from 'react';
import PropTypes from 'prop-types';

const SortItem = ({sortType}) => {
  return (
    <li className="places__option places__option--active" tabIndex="0">{sortType}</li>
  );
};

SortItem.propTypes = {
  sortType: PropTypes.string.isRequired
};

export default SortItem;
