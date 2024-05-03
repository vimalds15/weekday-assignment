import { Box, Typography } from "@mui/material";
import React from "react";

const ExperienceCard = ({jobMinExp}) => {
  return (
    <Box sx={{ marginTop: "0.7rem" }}>
      <Typography
        sx={{
          fontSize: "0.8rem",
          color: "#8B8B8B",
          fontWeight: "bold",
          letterSpacing: "0.075rem",
        }}
        variant="body2"
      >
        Minimum Experience
      </Typography>
      <Typography variant="body2">{jobMinExp} years</Typography>
    </Box>
  );
};

export default ExperienceCard;
