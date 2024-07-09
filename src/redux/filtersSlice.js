import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.all,
};
const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const filtersReducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;

// export const filtersReducer = createReducer(filtersInitialState, (builder) => {
//   builder.addCase(setStatusFilter, (state, action) => {
//     state.status = action.payload;
//   });
// });
