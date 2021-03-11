import {ActionType} from "../action";

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

const offersData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_CARDS:
      return {
        ...state,
        cards: action.payload,
        isCardsLoaded: true
      };

    case ActionType.LOAD_CURRENT_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
        isOfferLoaded: true,
      };

    case ActionType.LOAD_NEAR_PLACES:
      return {
        ...state,
        nearPlaces: action.payload,
        isNearPlacesLoaded: true,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
      };

    default:
      return state;
  }
};

export default offersData;
