import { Box } from "@mui/material";
import WithLayout from "../components/layout";
import CustomerCards from "../components/customerComponents/customerCards";
import CustomerSegment from "../components/customerComponents/CustomerSegments";
import CustomerHeader from "../components/customerComponents/customerHeader";
import TopCustomers from "../components/customerComponents/topCustomers";

const Customer = () => {
  return (
    // <Box>
    <Box
      sx={{
        mt: "50px",
        mx: "50px",
      }}
    >
      <CustomerHeader />
      <Box>
        <CustomerCards />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <CustomerSegment />
      </Box>
      <Box>
        <TopCustomers />
      </Box>
    </Box>
  );
};
export default WithLayout(Customer);
