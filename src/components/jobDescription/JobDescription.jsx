import React from "react";
import ViewJob from "../viewJob/ViewJob";
import { Box, Typography } from "@mui/material";

const JobDescription = ({jobDescription}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography sx={{ fontWeight: "500" }}>About Company</Typography>
      <Box sx={{ maxHeight: "200px", overflow: "hidden" }}>
        <Typography variant="caption">{jobDescription}</Typography>
      </Box>
      <ViewJob />
    </Box>
  );
};

export default JobDescription;
