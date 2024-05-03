import { HourglassBottom } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const PostedDateChip = () => {
  return (
    <Box className="posted-date-container shadow">
      <HourglassBottom
        className="hour-glass-icon"
        style={{ height: "20px", width: "10px" }}
      />
      <Typography variant="body1" sx={{ fontSize: "0.6rem" }}>
        Posted 12 days ago
      </Typography>
    </Box>
  );
};

export default PostedDateChip;
