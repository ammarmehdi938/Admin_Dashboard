import { Box, Typography } from "@mui/material";
import PaymentMethodCardsHeader from "./paymentMethodCardHeader";
import AllPaymentCards from "./allPaymentCards";

const PaymentMethods = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#F8FAFC",
        width: "950px",
        paddingX: "20px",
        backgroundColor: "#262541",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <PaymentMethodCardsHeader />
      <AllPaymentCards />
    </Box>
  );
};

export default PaymentMethods;
