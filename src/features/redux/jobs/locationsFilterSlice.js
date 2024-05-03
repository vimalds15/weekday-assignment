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
      const uniqueLocations = new Set([...state.locations, ...action.payload]);
      state.locations = [...uniqueLocations];
      state.loading = false;
    },
    fetchLocationDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchLocationDataStart, fetchLocationDataSuccess, fetchLocationDataFailure } = locationFilterSlice.actions;

export default locationFilterSlice.reducer;
