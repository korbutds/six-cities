export const ActionType = {
  CHANGE_LOCATION: `/changeLocation`,
  CHANGE_SORT: `/changeSort`
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});
export const setSort = (sort) => ({type: ActionType.CHANGE_SORT, payload: sort});
