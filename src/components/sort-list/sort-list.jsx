import React from 'react';
import {SortTypes} from '../../const';
import SortItem from '../sort-item/sort-item';

const SortList = () => {
  const sortTypesList = Object.values(SortTypes);
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortTypesList.map((sortType, i) => <SortItem sortType={sortType} key={`${sortType}-${i}`}/>)}
    </ul>
  );
};

export default SortList;
