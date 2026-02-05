import { Box } from "@mui/material";
import RevenueChartActivity from "./revenueChartActivity";
import DataChart from "./dataChart";
import RevenueTrendHeader from "./revenueTrendHeader";
// import CustomerSegment from "./customerSegments";
const RevenueTrends = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2C2643",
          width: "600px",
          height: "600px",
          border: "1px solid #423A53",
          borderRadius: "20px",
          mt: "50px",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <RevenueTrendHeader />

        <Box>
          <DataChart />
        </Box>
      </Box>
      <Box sx={{ ml: "50px" , mt:'50px'}}>
        {/* <CustomerSegment /> */}
      </Box>
    </Box>
  );
};
export default RevenueTrends;
