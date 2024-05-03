import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import HourglassBottom from "@mui/icons-material/HourglassBottom";
import "./JobCard.css";
import { Bolt } from "@mui/icons-material";
import ExperienceCard from "../experienceCard/ExperienceCard";
import ApplyButton from "../applyButton/ApplyButton";
import ReferralButton from "../referralButton/ReferralButton";
import Cta from "../cta/Cta";
import ViewJob from "../viewJob/ViewJob";
import SalaryCard from "../salaryCard/SalaryCard";
import JobDescription from "../jobDescription/JobDescription";
import PostedDateChip from "../postedDateChip/PostedDateChip";
import JobInfoCard from "../jobInfoCard/JobInfoCard";

const JobCard = ({jobRole,jobDescription,jobLocation,jobMinSalary,jobMaxSalary,jobCurrency,jobMinExp,companyName,logoUrl}) => {
  return (
    <Box
      className="job-card-container shadow"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "1rem",
      }}
    >
      <Card sx={{ borderRadius: "1rem" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "310px",
            gap: "0.4rem",
          }}
        >
          <PostedDateChip />
          <JobInfoCard companyName={companyName} logoUrl={logoUrl} jobRole={jobRole} jobLocation={jobLocation} />
          <SalaryCard jobMinSalary={jobMinSalary} jobMaxSalary={jobMaxSalary} jobCurrency={jobCurrency} />
          <JobDescription jobDescription={jobDescription} />
          <ExperienceCard jobMinExp={jobMinExp} />
          <Cta />
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
