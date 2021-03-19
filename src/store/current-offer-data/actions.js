import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_CURRENT_OFFER: `current/loadCurrentOffer`,
  LOAD_NEAR_PLACES: `current/loadNearPlaces`,
  LOAD_COMMENTS: `current/loadCardComments`,
  CHANGE_FAVORITE_STATUS: `offers/changeFavoriteStatus`,
  CLEAR_CURRENT_STATE: `current/clearCurrentState`,
  CHANGE_LOCATION: `screen/changeLocation`,
  CHANGE_FETCH_STATUS: `data/changeFetchStatus`
};

export const getCurrentOffer = createAction(ActionType.LOAD_CURRENT_OFFER, (card) => ({
  payload: card
}));

export const getNearPlaces = createAction(ActionType.LOAD_NEAR_PLACES, (cards) => ({
  payload: cards
}));

export const getComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments
}));

export const setLocation = createAction(ActionType.CHANGE_LOCATION, (location) => ({
  payload: location
}));

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (card) => ({
  payload: card
}));

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (fetchStatus) => ({
  payload: fetchStatus
}));

export const clearCurrentOffer = createAction(ActionType.CLEAR_CURRENT_STATE);
