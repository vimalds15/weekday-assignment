import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataStart,
  setFilterExperienceData,
} from "../../features/redux/jobs/jobsSlice";
import Select from "react-select";
import { experienceRange } from "../../constants/constant";

const ExperienceFilter = () => {
  const dispatch = useDispatch();

  const handleExperienceSelect = (selectedExperience) => {
    const experience = selectedExperience.value;
    dispatch(fetchDataStart());
    dispatch(setFilterExperienceData(experience));
  };

  return (
    <>
      <Select
        options={experienceRange}
        placeholder="Experience Level"
        onChange={handleExperienceSelect}
      />
    </>
  );
};

export default ExperienceFilter;
