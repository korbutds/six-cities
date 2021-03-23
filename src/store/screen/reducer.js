import {CityList, SortTypes} from "../../const";
import * as actions from "./actions";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  location: CityList.Paris,
  sort: SortTypes.POPULAR
};

const screen = createReducer(initialState, (builder) => {
  builder.addCase(actions.setLocation, (state, action) => {
    state.location = action.payload;
  });
  builder.addCase(actions.setSort, (state, action) => {
    state.sort = action.payload;
  });
});

export default screen;
