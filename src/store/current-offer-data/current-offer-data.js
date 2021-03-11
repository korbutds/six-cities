import {clearCurrentOffer, getComments, getCurrentOffer, getNearPlaces} from "../action";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  currentOffer: null,
  isOfferLoaded: false,
  nearPlaces: [],
  isNearPlacesLoaded: false,
  comments: [],
  isCommentsLoaded: false,
};

const currentOfferData = createReducer(initialState, (builder) => {
  builder.addCase(getCurrentOffer, (state, action) => {
    state.currentOffer = action.payload;
    state.isOfferLoaded = true;
  });
  builder.addCase(getNearPlaces, (state, action) => {
    state.nearPlaces = action.payload;
    state.isNearPlacesLoaded = true;
  });
  builder.addCase(getComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });
  builder.addCase(clearCurrentOffer, (state) => {
    state.currentOffer = null;
    state.isOfferLoaded = false;
    state.nearPlaces = [];
    state.isNearPlacesLoaded = false;
    state.comments = [];
    state.isCommentsLoaded = false;
  });
});

export default currentOfferData;
