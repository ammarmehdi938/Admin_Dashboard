import { Box } from "@mui/material";
import TotalOrdersCard from "../totalOrdersCard";
import ActiveCustomers from "../activeCustomers";
import ConversionRate from "../conversionRate";
import TotalRevenueCard from "../totalRevenueCard";

const AnalyticCardsContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        paddingTop: "30px",
        flexWrap: "wrap",
      }}
    >
      <TotalRevenueCard />
      <TotalOrdersCard />
      <ActiveCustomers />
      <ConversionRate />
    </Box>
  );
};
export default AnalyticCardsContainer;
