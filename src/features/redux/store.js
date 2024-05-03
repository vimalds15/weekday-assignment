import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobs/jobsSlice'; 
import locationsFilterReducer from './jobs/locationsFilterSlice'; 
import rolesFilterSlice from './jobs/rolesFilterSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    locations: locationsFilterReducer,
    roles: rolesFilterSlice,
  },
});

export default store;
