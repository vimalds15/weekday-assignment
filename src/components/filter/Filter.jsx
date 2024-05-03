import React from 'react'
import "./Filter.css";
import RoleFilter from '../roleFilter/RoleFilter';
import EmployeeFilter from '../employeeFilter/EmployeeFilter';
import ExperienceFilter from '../experienceFilter/ExperienceFilter';
import LocationFilter from '../locationFilter/LocationFilter';
import SalaryFilter from '../salaryFilter/SalaryFilter';
import { Grid } from '@mui/material';

const Filter = () => {
  return (
    <Grid container className="filter-wrapper">
        <Grid item>
            <RoleFilter />
        </Grid>
        <Grid item>
            <EmployeeFilter />
        </Grid>
        <Grid item>
            <ExperienceFilter />
        </Grid>
        <Grid item>
            <LocationFilter />
        </Grid>
        <Grid item>
            <SalaryFilter />
        </Grid>
      </Grid>
  )
}

export default Filter