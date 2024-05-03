import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLocationDataFailure,
  fetchLocationDataStart,
  fetchLocationDataSuccess,
} from "./locationsFilterSlice";
import { fetchRolesDataStart, fetchRolesDataSuccess } from "./rolesFilterSlice";

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.jobs = [...state.jobs, ...action.payload];
      state.loading = false;
    },
    fetchDataFailure: (state) => {
      state.loading = false;
    },
    setFilterLocationData: (state, action) => {
      state.jobs = state.jobs.filter((job) =>
        action.payload.includes(job.location)
      );
      state.loading = false;
    },
    setFilterRoleData: (state, action) => {
      state.jobs = state.jobs.filter((job) =>
        action.payload.includes(job.jobRole)
      );
      state.loading = false;
    },
    setFilterSalaryData: (state, action) => {
      console.log(action.payload);
      state.jobs = state.jobs.filter(
        (job) => action.payload <= job.minJdSalary
      );
      state.loading = false;
    },
    setFilterExperienceData: (state, action) => {
      console.log(action.payload);
      state.jobs = state.jobs.filter(
        (job) => action.payload <= job.minExp
      );
      state.loading = false;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  setFilterLocationData,
  setFilterRoleData,
  setFilterSalaryData,
  setFilterExperienceData
} = jobsSlice.actions;

export const fetchData =
  ({ offset }) =>
  async (dispatch) => {
    dispatch(fetchDataStart());
    dispatch(fetchLocationDataStart());
    dispatch(fetchRolesDataStart());
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        limit: 10,
        offset: offset,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const result = await response?.json();
      dispatch(fetchDataSuccess(result.jdList));
      const locations = result.jdList.map((item) => {
        return { value: item?.location, label: item?.location };
      });
      dispatch(fetchLocationDataSuccess(locations));
      const roles = result.jdList.map((item) => {
        return { value: item?.jobRole, label: item?.jobRole };
      });
      dispatch(fetchRolesDataSuccess(roles));
    } catch (error) {
      console.error(error?.message);
      dispatch(fetchDataFailure());
      dispatch(fetchLocationDataFailure());
    }
  };

export default jobsSlice.reducer;
