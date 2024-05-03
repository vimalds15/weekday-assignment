import { Box, Typography } from "@mui/material";
import React from "react";

const JobInfoCard = ({ jobRole, jobLocation }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "0.4rem",
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxJqlFEEfvA5VeDbGpRcv43F_edlFn7MB8iYsGyvF9w&s"
        width="50px"
        height="50px"
      />

      <Box>
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
          Weekday
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
