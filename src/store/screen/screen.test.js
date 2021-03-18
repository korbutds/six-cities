import {SortTypes} from "../../const";
import {ActionType} from "../action";
import screen from "./screen";

describe(`Screen reducer should work correctly`, () => {
  it(`Reducer for change location work correctly`, () => {
    const initialState = {
      location: `Amsterdam`
    };
    const changeLocationAction = {
      type: ActionType.CHANGE_LOCATION,
      payload: `Paris`
    };
    const expectedState = {
      location: `Paris`
    };
    expect(screen(initialState, changeLocationAction)).toEqual(expectedState);
  });

  it(`Reducer for change sort type work correctly`, () => {
    const initialState = {
      sort: `Amsterdam`
    };
    const changeLocationAction = {
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.PRICE_HIGH_TO_LOW
    };
    const expectedState = {
      sort: SortTypes.PRICE_HIGH_TO_LOW
    };
    expect(screen(initialState, changeLocationAction)).toEqual(expectedState);
  });
});
