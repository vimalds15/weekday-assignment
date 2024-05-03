import { Box, Typography } from "@mui/material";
import React from "react";

const JobInfoCard = ({ jobRole, jobLocation, companyName, logoUrl }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "0.4rem",
      }}
    >
      <img
        src={logoUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxJqlFEEfvA5VeDbGpRcv43F_edlFn7MB8iYsGyvF9w&s"}
        width="50px"
        height="50px"
      />

      <Box
        sx={{
            marginLeft: "0.6rem"
        }}
      >
        <Typography
          gutterBottom
          variant="body2"
          sx={{
            color: "#8b8b8b",
            fontWeight: "600",
            fontSize: "0.7rem",
            cursor: "pointer",
          }}
        >
          {companyName || 'Weekday'}
        </Typography>
        <Typography gutterBottom variant="body2">
          {jobRole}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.6rem",
          }}
        >
          {jobLocation}
        </Typography>
      </Box>
    </Box>
  );
};

export default JobInfoCard;
