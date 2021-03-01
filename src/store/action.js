export const ActionType = {
  CHANGE_LOCATION: `city/changeLocation`,
  CHANGE_SORT: `places/changeSort`,
  LOAD_DATA: `data/loadData`
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});
export const setSort = (sort) => ({type: ActionType.CHANGE_SORT, payload: sort});
export const getCards = (cards) => ({type: ActionType.LOAD_DATA, payload: cards});

export const ActionCreators = {
  setLocation,
  setSort,
  getCards
};
