import {changeFavoriteStatus, changeFetchStatus, getCards} from "../action";
import {createReducer} from '@reduxjs/toolkit';
import {FetchStatus} from "../../const";

const initialState = {
  cards: [],
  isCardsLoaded: false,
  currentOffer: null,
  isOfferLoaded: false,
  fetchStatus: FetchStatus.PENDING
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
  builder.addCase(changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
});

export default offersData;
