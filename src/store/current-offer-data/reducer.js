import * as actions from "./actions";
import {createReducer} from '@reduxjs/toolkit';

export const initialState = {
  currentOffer: null,
  nearPlaces: [],
  comments: [],
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
  });
  builder.addCase(actions.getNearPlaces, (state, action) => {
    state.nearPlaces = action.payload;
  });
  builder.addCase(actions.getComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(actions.changeFavoriteStatus, (state, action) => {
    state.nearPlaces = newCardList(state.nearPlaces, action.payload);
  });
  builder.addCase(actions.clearCurrentOffer, (state) => {
    state.currentOffer = null;
    state.nearPlaces = [];
    state.comments = [];
  });
});

export default currentOfferData;
