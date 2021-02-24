import {CityList} from "../const";
import {Offers} from "../mocks/offers";
import {ActionType} from "./action";

const initialState = {
  location: CityList.Paris,
  cards: Offers,
  citySortedCards: []
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload
      };
  }

  return state;
};

export {reducer};
