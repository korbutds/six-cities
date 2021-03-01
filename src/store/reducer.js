import {AuthorizationStatus, CityList} from "../const";
import {ActionType} from "./action";

const initialState = {
  location: CityList.Paris,
  cities: CityList,
  sort: `Popular`,
  cards: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isCardsLoaded: false,
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
    case ActionType.LOAD_DATA:
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

    default:
      return state;
  }
};

export {reducer};
