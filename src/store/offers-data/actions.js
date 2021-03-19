import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_CARDS: `offers/loadData`,
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
