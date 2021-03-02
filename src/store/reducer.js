import {AuthorizationStatus, CityList} from "../const";
import {ActionType} from "./action";

const initialState = {
  location: CityList.Paris,
  cities: CityList,
  sort: `Popular`,
  cards: [],
  isCardsLoaded: false,
  nearPlaces: [],
  isNearPlacesLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload
      };

    case ActionType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      };

    case ActionType.LOAD_CARDS:
      return {
        ...state,
        cards: action.payload,
        isCardsLoaded: true
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.LOAD_NEAR_PLACES:
      return {
        ...state,
        nearPlaces: action.payload,
        isNearPlacesLoaded: true,
      };

    default:
      return state;
  }
};

export {reducer};
