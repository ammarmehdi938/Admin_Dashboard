import { Box } from "@mui/material";
import RevenueTrends from "../revenueTrends";
import AnalyticCustomerSegment from "./analyticCustomerSegment";

const AnalyticChartContainer = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <RevenueTrends />
      <AnalyticCustomerSegment />
    </Box>
  );
};
export default AnalyticChartContainer;
