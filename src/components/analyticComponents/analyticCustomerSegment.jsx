import AnalyticCustomerSegmentHeader from "./analyticCustomerSegmentHeader";
import { Box, LinearProgress, Typography } from "@mui/material";

const AnalyticCustomerSegment = () => {
  return (
    <Box
      sx={{
        background: "#25253F",
        borderRadius: "15px",
        padding: "24px",
        width: "100%",
        maxWidth: "420px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <AnalyticCustomerSegmentHeader />
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography sx={{ color: "#c7c7ff" }}>Premium</Typography>
            <Typography sx={{ color: "#fff", fontWeight: 500 }}>68%</Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value="68"
            sx={{
              height: 8,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.08)",
              "& .MuiLinearProgress-bar": {
                borderRadius: 8,
                background: "linear-gradient(90deg, #7c6cff, #a58bff)",
              },
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography sx={{ color: "#c7c7ff" }}>Regular</Typography>
            <Typography sx={{ color: "#fff", fontWeight: 500 }}>85%</Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value="85"
            sx={{
              height: 8,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.08)",
              "& .MuiLinearProgress-bar": {
                borderRadius: 8,
                background: "linear-gradient(90deg, #7c6cff, #a58bff)",
              },
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography sx={{ color: "#c7c7ff" }}>New</Typography>
            <Typography sx={{ color: "#fff", fontWeight: 500 }}>42%</Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value="42"
            sx={{
              height: 8,
              borderRadius: 8,
              backgroundColor: "rgba(255,255,255,0.08)",
              "& .MuiLinearProgress-bar": {
                borderRadius: 8,
                background: "linear-gradient(90deg, #7c6cff, #a58bff)",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "14px",
          background:
            "linear-gradient(180deg, rgba(124,108,255,0.15), rgba(124,108,255,0.05))",
          border: "1px solid rgba(124,108,255,0.25)",
        }}
      >
        <Typography sx={{ color: "#c7c7ff", mb: 1 }}>
          Average Order Value
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          $156.32
        </Typography>

        <Typography sx={{ color: "#2dd4bf", mt: 1 }}>
          ↑ +14.2% from last month
        </Typography>
      </Box>
    </Box>
  );
};

export default AnalyticCustomerSegment;
