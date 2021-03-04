export const ActionType = {
  CHANGE_LOCATION: `screen/changeLocation`,
  CHANGE_SORT: `screen/changeSort`,
  LOAD_CARDS: `data/loadData`,
  LOAD_NEAR_PLACES: `data/loadNearPlaces`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  USER_AVATAR: ``,
  REDIRECT: `scree/redirect`
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});
export const setSort = (sort) => ({type: ActionType.CHANGE_SORT, payload: sort});
export const getCards = (cards) => ({type: ActionType.LOAD_CARDS, payload: cards});
export const getNearPlaces = (cards) => ({type: ActionType.LOAD_NEAR_PLACES, payload: cards});
export const requireAuthorization = (status) => ({type: ActionType.REQUIRED_AUTHORIZATION, payload: status});
export const setUserName = (userName) => ({type: ActionType.CHANGE_USERNAME, payload: userName});
export const setUserAvatar = (url) => ({type: ActionType.USER_AVATAR, payload: url});
export const redirect = (url) => ({type: ActionType.REDIRECT, payload: url});

export const ActionCreators = {
  setLocation,
  setSort,
  getCards,
  getNearPlaces,
  requireAuthorization,
  setUserName,
  redirect,
  setUserAvatar
};
