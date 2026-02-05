import { Box } from "@mui/material";
import RevenueTrends from "./revenueTrends";

const AnalyticChartContainer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <RevenueTrends />
    </Box>
  );
};
export default AnalyticChartContainer;
