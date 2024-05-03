import React from "react";
import Select from 'react-select';
import { useDispatch } from "react-redux";
import {salaryRange} from '../../constants/constant';
import { applyFilters, setFilters } from "../../features/redux/jobs/jobsSlice";

const SalaryFilter = () => {
  const dispatch = useDispatch();

  const handleSalarySelect = (selectedSalary) => {
    const salary = selectedSalary.value;
    dispatch(setFilters({salary}))
    dispatch(applyFilters())
  };

  return (
    <>
      <Select
        options={salaryRange}
        placeholder="Minimum Base Pay Salary"
        onChange={handleSalarySelect}
      />
    </>
  );
};

export default SalaryFilter;
