import { Box, Typography } from "@mui/material";
import React from "react";

const ViewJob = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        marginTop: "-45px",
        position: "absolute",
        height: "50px",
        width: "100%",
        background: "linear-gradient(transparent,white, white)",
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          cursor: "pointer",
          fontSize: "0.8rem",
        }}
      >
        View Job
      </Typography>
    </Box>
  );
};

export default ViewJob;
