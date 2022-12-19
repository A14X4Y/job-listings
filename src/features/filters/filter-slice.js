import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "@@filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      !state.includes(action.payload) ? state.push(action.payload) : state;
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => [],
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilters = (state) => state.filters;
