import React from "react";
import Select from "react-select";
import { companySize } from "../../constants/constant";

const EmployeeFilter = () => {
  return (
    <>
      <Select options={companySize} placeholder="Number of Employees" />
    </>
  );
};

export default EmployeeFilter;
