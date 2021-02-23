import {CityList} from "../const";
import {Offers} from "../mocks/offers";
import {ActionType} from "./action";

const initialState = {
  city: CityList.Amsterdam,
  cards: Offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
  }

  return state;
};

export {reducer};
