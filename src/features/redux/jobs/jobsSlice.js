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
    filters: {
      location: "",
      role: "",
      salary: null,
      experience: null,
    },
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
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    applyFilters: (state) => {
      const { location, role, salary, experience } = state.filters;
      let filteredJobs = state.jobs;
      
      if (location) {
        filteredJobs = filteredJobs.filter((job) => {
          return location.includes(job.location);
        });
      }

      if (role) {
        filteredJobs = filteredJobs.filter((job) => role?.includes(job.jobRole));
      }

      if (salary !== null) {
        filteredJobs = filteredJobs.filter((job) => job.minJdSalary >= salary);
      }

      if (experience !== null) {
        filteredJobs = filteredJobs.filter((job) => job.minExp >= experience);
      }

      state.jobs=filteredJobs;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  setFilters,
  applyFilters,
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
      
      const uniqueLocations = [];
      const uniqueLocationLabels = new Set();
      
      locations.forEach((item) => {
        const label = item.label.toLowerCase();
        if (!uniqueLocationLabels.has(label)) {
          uniqueLocationLabels.add(label);
          uniqueLocations.push(item);
        }
      });
      
      dispatch(fetchLocationDataSuccess(uniqueLocations));
      
      const roles = result.jdList.map((item) => {
        return { value: item?.jobRole, label: item?.jobRole };
      });
      
      // const uniqueRoles = [];
      // const uniqueRoleLabels = new Set();
      
      // roles.forEach((item) => {
      //   const label = item.label.toLowerCase();
      //   if (!uniqueRoleLabels.has(label)) {
      //     uniqueRoleLabels.add(label);
      //     uniqueRoles.push(item);
      //   }
      // });
      dispatch(fetchRolesDataSuccess(roles));
      dispatch(applyFilters());
    } catch (error) {
      console.error(error?.message);
      dispatch(fetchDataFailure());
      dispatch(fetchLocationDataFailure());
    }
  };

export default jobsSlice.reducer;
