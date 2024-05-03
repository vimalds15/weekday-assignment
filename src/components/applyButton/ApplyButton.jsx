import React from "react";
import { Button  } from "@mui/material";
import { Bolt } from "@mui/icons-material";

const ApplyButton = ({ctaText}) => {
  return (
    <Button
      sx={{
        backgroundColor: "#55EFC4",
        width: "100%",
        color: "black",
        fontWeight: "500",
        textTransform: "none",
        padding: "0.2rem 0,",
      }}
    >
      <Bolt sx={{ color: "#FF822D" }} />
      Easy Apply
    </Button>
  );
};

export default ApplyButton;
