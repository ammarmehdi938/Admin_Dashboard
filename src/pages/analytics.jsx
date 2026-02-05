import { Box, Typography } from "@mui/material";
import WithLayout from "../components/layout";
import AnalyticHeader from "../components/analyticHeader";
import AnalyticCardsContainer from "../components/analyticCardsCotaier";
import AnalyticChartContainer from "../components/analyticChartContainer";
import AnalyticTable from "../components/analyticTable";
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
        {/* <AnalyticTable /> */}
      </Box>
    </Box>
  );
};

export default WithLayout(Analytics);
