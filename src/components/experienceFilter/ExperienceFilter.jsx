import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { experienceRange } from "../../constants/constant";
import { applyFilters, setFilters } from "../../features/redux/jobs/jobsSlice";

const ExperienceFilter = () => {
  const dispatch = useDispatch();

  const handleExperienceSelect = (selectedExperience) => {
    const experience = selectedExperience.value;
    dispatch(setFilters({experience}))
    dispatch(applyFilters());
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
