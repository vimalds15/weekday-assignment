import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataStart,
  setFilterLocationData,
} from "../../features/redux/jobs/jobsSlice";
import Select from "react-select";

const LocationFilter = () => {
  const locations = useSelector((state) => state.locations.locations);
  const dispatch = useDispatch();

  const handleLocationMultiSelect = (selectionLocation) => {
    const selectedLocations = selectionLocation.map((item) => item.label);
    dispatch(fetchDataStart());
    dispatch(setFilterLocationData(selectedLocations));
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
