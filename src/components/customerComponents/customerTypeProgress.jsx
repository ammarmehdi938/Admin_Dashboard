import { Box, Typography, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";

const CustomerTypeProgress = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <LinearProgress
        variant="determinate"
        value="60"
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

export default CustomerTypeProgress;
