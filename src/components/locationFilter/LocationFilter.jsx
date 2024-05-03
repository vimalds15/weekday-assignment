import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  setFilters,
} from "../../features/redux/jobs/jobsSlice";
import Select from "react-select";

const LocationFilter = () => {
  const locations = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();

  const handleLocationMultiSelect = (selectionLocation) => {
    const selectedLocations = selectionLocation.map((item) => item.label);
    dispatch(setFilters({location: selectedLocations}));
    dispatch(applyFilters())
  };

  return (
    <>
      <Select
        options={locations}
        placeholder="Select Location"
        onChange={handleLocationMultiSelect}
        isMulti
      />
    </>
  );
};

export default LocationFilter;
