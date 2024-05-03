import { createSlice } from "@reduxjs/toolkit";

export const locationFilterSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
    loading: false,
  },
  reducers: {
    fetchLocationDataStart: (state) => {
      state.loading = true;
    },
    fetchLocationDataSuccess: (state, action) => {
      state.locations = [...state.locations, ...action.payload];
      state.loading = false;
    },
    fetchLocationDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchLocationDataStart, fetchLocationDataSuccess, fetchLocationDataFailure } = locationFilterSlice.actions;

export default locationFilterSlice.reducer;
