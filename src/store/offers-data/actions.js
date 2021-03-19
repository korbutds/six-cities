import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_LOCATION: `screen/changeLocation`,
  CHANGE_SORT: `screen/changeSort`,
  REDIRECT: `screen/redirect`,
  LOAD_CARDS: `offers/loadData`,
  LOAD_CURRENT_OFFER: `current/loadCurrentOffer`,
  LOAD_NEAR_PLACES: `current/loadNearPlaces`,
  LOAD_COMMENTS: `current/loadCardComments`,
  CLEAR_CURRENT_STATE: `current/clearCurrentState`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USERNAME: `user/changeName`,
  SET_USER_AVATAR: `user/changeAvatar`,
  SET_USER_INFO: `user/changeUserInfo`,
  CHANGE_FAVORITE_STATUS: `offers/changeFavoriteStatus`,
  CHANGE_FETCH_STATUS: `data/changeFetchStatus`

};

export const getCards = createAction((ActionType.LOAD_CARDS), (cards) => ({
  payload: cards
}));

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (card) => ({
  payload: card
}));

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (fetchStatus) => ({
  payload: fetchStatus
}));
