import {CityList} from "../../const";
import {ActionType} from "../action";

const initialState = {
  location: CityList.Paris,
  sort: `Popular`,
};

const screen = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default screen;
