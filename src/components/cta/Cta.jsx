import React from "react";
import ApplyButton from "../applyButton/ApplyButton";
import ReferralButton from "../referralButton/ReferralButton";
import { Box } from "@mui/material";

const Cta = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "0.4rem",
        gap: "0.6rem",
      }}
    >
      <ApplyButton />
      <ReferralButton />
    </Box>
  );
};

export default Cta;
