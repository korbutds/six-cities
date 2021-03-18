import {CityList, SortTypes} from "../../const";
import {setLocation, setSort} from "../action";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  location: CityList.Paris,
  sort: SortTypes.POPULAR
};

const screen = createReducer(initialState, (builder) => {
  builder.addCase(setLocation, (state, action) => {
    state.location = action.payload;
  });
  builder.addCase(setSort, (state, action) => {
    state.sort = action.payload;
  });
});

export default screen;
