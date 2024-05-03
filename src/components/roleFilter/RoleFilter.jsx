import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import { applyFilters, setFilters } from "../../features/redux/jobs/jobsSlice";

const RoleFilter = () => {
  const roles = useSelector((state) => state.roles.roles);
  const dispatch = useDispatch();

  const handleRoleMultiSelect = (selectionRole) => {
    const selectedRoles = selectionRole.map((item) => item.label);
    dispatch(setFilters({role: selectedRoles}))
    dispatch(applyFilters())
  };

  return (
    <>
      <Select
        options={roles}
        placeholder="Select Roles"
        onChange={handleRoleMultiSelect}
        isMulti
      />
    </>
  );
};

export default RoleFilter;
