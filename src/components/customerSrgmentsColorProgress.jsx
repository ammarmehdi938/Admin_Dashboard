import { Box, Typography, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const CustomerSegmentProgress = ({ label, value }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography sx={{ color: "#E6E1FF", fontSize: 14 }}>{label}</Typography>
        <Typography sx={{ color: "#FFFFFF", fontWeight: 600 }}>
          {value}%
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 999,
          backgroundColor: "#3A335A",
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 999,
            backgroundColor: "#7C6CF6",
          },
        }}
      />
    </Box>
  );
};

export default CustomerSegmentProgress;
