import {changeFavoriteFlag, changeFavoriteStatus, getCards} from "../action";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  isCardsLoaded: false,
  currentOffer: null,
  isOfferLoaded: false,
  isFavoriteStatusChanged: true,
};

const newCardList = (stateCards, currentCard) => {
  const cardIndex = stateCards.findIndex((card) => card.id === currentCard.id);
  if (cardIndex === -1) {
    return stateCards;
  }
  return [...stateCards.slice(0, cardIndex), currentCard, ...stateCards.slice(cardIndex + 1)];
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(getCards, (state, action) => {
    state.cards = action.payload;
    state.isCardsLoaded = true;
  });
  builder.addCase(changeFavoriteStatus, (state, action) => {
    state.cards = newCardList(state.cards, action.payload);
    state.isFavoriteStatusChanged = true;
  });
  builder.addCase(changeFavoriteFlag, (state) => {
    state.isFavoriteStatusChanged = !state.isFavoriteStatusChanged;
  });
});

export default offersData;
