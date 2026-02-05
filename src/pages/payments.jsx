import { Box } from "@mui/material";
import WithLayout from "../components/layout";
import PaymentHeader from "../components/paymentComponents/paymentHeader";
import PaymentCardsContainer from "../components/paymentComponents/paymentCardsConatiner";
import LastPaymentTable from "../components/paymentComponents/lastPaymentsTable";
import PaymentSearchBar from "../components/paymentComponents/paymentSearchBar";
import PaymentMethods from "../components/paymentComponents/paymentMethodCards";
const Payments = () => {
  return (
    <Box sx={{ ml: "20px", mt: "50px", mb: "50px" }}>
      <Box>
        <PaymentHeader />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <PaymentCardsContainer />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <LastPaymentTable />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <PaymentMethods />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <PaymentSearchBar />
      </Box>
    </Box>
  );
};
export default WithLayout(Payments);
