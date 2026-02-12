import { Box } from "@mui/material";
import WithLayout from "../components/layout";
import CustomerCards from "../components/customerComponents/customerCards";
import CustomerSegment from "../components/customerComponents/CustomerSegments";
import CustomerHeader from "../components/customerComponents/customerHeader";
import TopCustomers from "../components/customerComponents/topCustomers";
import CustomerSearchBar from "../components/customerComponents/customerSearchBar";
import CustomerTable from "../components/customerComponents/customersTable";

const Customer = () => {
  return (
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
      <Box sx={{ mt: "50px", display: "flex", gap: 5 }}>
        <CustomerSegment />

        <TopCustomers />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <CustomerSearchBar />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <CustomerTable />
      </Box>
    </Box>
  );
};
export default WithLayout(Customer);
