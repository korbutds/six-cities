import {getCards} from "../action";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  isCardsLoaded: false,
  currentOffer: null,
  isOfferLoaded: false,
  nearPlaces: [],
  isNearPlacesLoaded: false,
  comments: [],
  isCommentsLoaded: false,
};

const offersData = createReducer(initialState, (builder) => {
  builder.addCase(getCards, (state, action) => {
    state.cards = action.payload;
    state.isCardsLoaded = true;
  });
});

export default offersData;
