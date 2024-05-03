import { Box, Typography } from "@mui/material";
import React from "react";

const SalaryCard = ({jobMinSalary,jobMaxSalary,jobCurrency}) => {
  return (
    <Box>
      <Typography variant="body2">
        Estimated Salary: {jobCurrency === "INR" ? "₹" : "$"}
        {jobMinSalary} - {jobMaxSalary}{jobCurrency === "INR" ? " LPA" : "K USD"} ✅
      </Typography>
    </Box>
  );
};

export default SalaryCard;
