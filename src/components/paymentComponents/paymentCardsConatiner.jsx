import { Box } from "@mui/material";
import TotalRevenueCard from "./totalRevenueCard";
import SuccessfullPaymentCard from "./successfullPaymentCard";
import PendingPaymentCard from "./pendingPaymentCard";
import AVGTransectionsCard from "./avgTransectionsCard";

// import TotalRevenueCards
const PaymentCardsContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      <TotalRevenueCard />
      <SuccessfullPaymentCard />
      <PendingPaymentCard />
      <AVGTransectionsCard />
    </Box>
  );
};

export default PaymentCardsContainer;
