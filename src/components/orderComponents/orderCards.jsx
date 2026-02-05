import { Box } from "@mui/material";
import TotalRevenueCard from "./totalRevenueCard";
import AvgOrderCard from "./avgOrderCard";
import PendingOrderCard from "./pendingOrderCard";
import CompletedOrderCard from "./completedOrderCard";

const OrderCards = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 3,
      }}
    >
      <TotalRevenueCard />
      <AvgOrderCard />
      <PendingOrderCard />
      <CompletedOrderCard />
    </Box>
  );
};

export default OrderCards;
