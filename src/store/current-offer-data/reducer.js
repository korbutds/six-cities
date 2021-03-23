import * as actions from "./actions";
import {createReducer} from '@reduxjs/toolkit';

export const initialState = {
  currentOffer: null,
  isOfferLoaded: false,
  nearPlaces: [],
  isNearPlacesLoaded: false,
  comments: [],
  isCommentsLoaded: false
};

const newCardList = (stateCards, currentCard) => {
  const cardIndex = stateCards.findIndex((card) => card.id === currentCard.id);
  if (cardIndex === -1) {
    return stateCards;
  }
  return [...stateCards.slice(0, cardIndex), currentCard, ...stateCards.slice(cardIndex + 1)];
};

const currentOfferData = createReducer(initialState, (builder) => {
  builder.addCase(actions.getCurrentOffer, (state, action) => {
    state.currentOffer = action.payload;
    state.isOfferLoaded = true;
  });
  builder.addCase(actions.getNearPlaces, (state, action) => {
    state.nearPlaces = action.payload;
    state.isNearPlacesLoaded = true;
  });
  builder.addCase(actions.getComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });
  builder.addCase(actions.changeFavoriteStatus, (state, action) => {
    state.nearPlaces = newCardList(state.nearPlaces, action.payload);
  });
  builder.addCase(actions.clearCurrentOffer, (state) => {
    state.currentOffer = null;
    state.isOfferLoaded = false;
    state.nearPlaces = [];
    state.isNearPlacesLoaded = false;
    state.comments = [];
    state.isCommentsLoaded = false;
  });
});

export default currentOfferData;
