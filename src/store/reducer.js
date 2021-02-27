import {CityList} from "../const";
import {Offers} from "../mocks/offers";
import {ActionType} from "./action";

const initialState = {
  location: CityList.Paris,
  cities: CityList,
  sort: `Popular`,
  cards: Offers,
  isLogged: false
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
  }

  return state;
};

export {reducer};
