export const ActionType = {
  CHANGE_LOCATION: `screen/changeLocation`,
  CHANGE_SORT: `screen/changeSort`,
  LOAD_CARDS: `data/loadData`,
  LOAD_CURRENT_OFFER: `data/loadCurrentOffer`,
  LOAD_NEAR_PLACES: `data/loadNearPlaces`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  USER_AVATAR: ``,
  REDIRECT: `screen/redirect`,
  LOAD_COMMENTS: `data/loadCardComments`
};

export const setLocation = (location) => ({type: ActionType.CHANGE_LOCATION, payload: location});
export const setSort = (sort) => ({type: ActionType.CHANGE_SORT, payload: sort});
export const getCards = (cards) => ({type: ActionType.LOAD_CARDS, payload: cards});
export const getCurrentOffer = (card) => ({type: ActionType.LOAD_CURRENT_OFFER, payload: card});
export const getNearPlaces = (cards) => ({type: ActionType.LOAD_NEAR_PLACES, payload: cards});
export const requireAuthorization = (status) => ({type: ActionType.REQUIRED_AUTHORIZATION, payload: status});
export const setUserName = (userName) => ({type: ActionType.CHANGE_USERNAME, payload: userName});
export const setUserAvatar = (url) => ({type: ActionType.USER_AVATAR, payload: url});
export const redirect = (url) => ({type: ActionType.REDIRECT, payload: url});
export const getComments = (comments) => ({type: ActionType.LOAD_COMMENTS, payload: comments});

export const ActionCreators = {
  setLocation,
  setSort,
  getCards,
  getNearPlaces,
  requireAuthorization,
  setUserName,
  redirect,
  setUserAvatar,
  getComments,
  getCurrentOffer
};
