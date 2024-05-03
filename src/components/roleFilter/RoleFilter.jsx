import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataStart, setFilterRoleData } from "../../features/redux/jobs/jobsSlice";
import Select from 'react-select';

const RoleFilter = () => {
  const roles = useSelector((state) => state.roles.roles);
  const dispatch = useDispatch();

  const handleRoleMultiSelect = (selectionRole) => {
    const selectedRoles = selectionRole.map((item) => item.label);
    dispatch(fetchDataStart());
    dispatch(setFilterRoleData(selectedRoles));
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
