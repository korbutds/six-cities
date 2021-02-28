export const ActionType = {
  CHANGE_LOCATION: `city/changeLocation`,
  CHANGE_SORT: `places/changeSort`
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});
export const setSort = (sort) => ({type: ActionType.CHANGE_SORT, payload: sort});

export const ActionCreators = {
  setLocation(location) {
    return {type: ActionType.CHANGE_LOCATION, payload: location};
  },
  setSort(sort) {
    return {type: ActionType.CHANGE_SORT, payload: sort};
  }
};
