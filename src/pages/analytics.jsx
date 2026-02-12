import { Box, Typography } from "@mui/material";
import WithLayout from "../components/layout";
import AnalyticHeader from "../components/analyticComponents/analyticHeader";
import AnalyticCardsContainer from "../components/analyticComponents/analyticCardsCotaier";
import AnalyticChartContainer from "../components/analyticComponents/analyticChartContainer";
import AnalyticTable from "../components/analyticComponents/analyticTable";
// import TopPerformingAnalyticProducts from "../components/topPerformingAnalyticProducts";

const Analytics = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        marginX: "50px",
        minHeight: "100vh",
        backgroundColor: "#131426",
      }}
    >
      <AnalyticHeader />
      <Box>
        <AnalyticCardsContainer />
      </Box>
      <Box sx={{ mt: "50px", mb: "50px" }}>
        <AnalyticChartContainer />
      </Box>
      <Box>
        <AnalyticTable />
      </Box>
    </Box>
  );
};

export default WithLayout(Analytics);
