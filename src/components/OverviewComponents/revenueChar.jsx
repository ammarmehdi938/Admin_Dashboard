import { Box } from "@mui/material";
import RevenueChartHeader from "../revenueChartHeader";
import RevenueChartActivity from "../revenueChartActivity";
import DataChart from "../dataChart";
const RevenueChart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#25253F",
          width: "600px",
          height: "600px",
          border: "1px solid #423A53",
          borderRadius: "20px",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <RevenueChartHeader />
        <Box>
          <DataChart />
        </Box>
      </Box>
      <Box>
        <RevenueChartActivity />
      </Box>
    </Box>
  );
};
export default RevenueChart;
