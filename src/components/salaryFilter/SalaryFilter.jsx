import React from "react";
import { fetchDataStart, setFilterSalaryData } from "../../features/redux/jobs/jobsSlice";
import Select from 'react-select';
import { useDispatch } from "react-redux";
import {salaryRange} from '../../constants/constant';

const SalaryFilter = () => {
  const dispatch = useDispatch();

  const handleSalarySelect = (selectedSalary) => {
    const salary = selectedSalary.value;
    dispatch(fetchDataStart());
    dispatch(setFilterSalaryData(salary));
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
