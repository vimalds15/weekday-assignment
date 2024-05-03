import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import HourglassBottom from "@mui/icons-material/HourglassBottom";
import "./JobCard.css";
import { Bolt } from "@mui/icons-material";

const JobCard = ({jobRole,jobDescription,jobLocation,jobMinSalary,jobMaxSalary,jobCurrency,jobMinExp}) => {
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
          <Box className="posted-date-container shadow">
            <HourglassBottom
              className="hour-glass-icon"
              style={{ height: "20px", width: "10px" }}
            />
            <Typography variant="body1" sx={{ fontSize: "0.6rem" }}>
              Posted 12 days ago
            </Typography>
          </Box>
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
                  cursor:'pointer',
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
          <Box>
            <Typography variant="body2">
              Estimated Salary: {jobCurrency === 'INR' ? '₹' : '$'}{jobMinSalary} - {jobMaxSalary} {jobCurrency === 'INR'?'LPA':'K'} ✅
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ fontWeight: "500" }}>About Company</Typography>
            <Box sx={{ maxHeight: "200px", overflow: "hidden" }}>
              <Typography variant="caption">
                {jobDescription}
                </Typography>
            </Box>
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
          </Box>
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
              <Bolt sx={{color:"#FF822D"}} />
              Easy Apply
            </Button>
            <Button
              sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor: "#4943DA",
                width: "100%",
                color: "white",
                fontWeight: "500",
                textTransform: "none",
                padding: "0.2rem 0,",
              }}
            >
                <Box sx={{
                    display:'flex',
                    marginRight: '0.5rem',
                    gap: '0.3rem'
                }}>
                    <img style={{height: '25px',width:'25px', borderRadius:"50px", objectFit:"cover", filter: 'blur(1px)'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZh8i-Gf6xWEoJw0d0S7fPvDmxSNJoGF-bw&s"  />
                    <img style={{height: '25px',width:'25px', borderRadius:"50px", objectFit:"cover", filter: 'blur(1px)'}} src="data:image/jpeg;base64,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" />
                </Box>
              Unlock referral asks
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobCard;
