import { createSlice } from "@reduxjs/toolkit";

export const rolesFilterSlice = createSlice({
  name: "roles",
  initialState: {
    roles: [],
    loading: false,
  },
  reducers: {
    fetchRolesDataStart: (state) => {
      state.loading = true;
    },
    fetchRolesDataSuccess: (state, action) => {
      state.roles = [...state.roles, ...action.payload];
      state.loading = false;
    },
    fetchRolesDataFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchRolesDataStart, fetchRolesDataSuccess, fetchRolesDataFailure } = rolesFilterSlice.actions;

export default rolesFilterSlice.reducer;
