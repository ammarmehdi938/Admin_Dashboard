import { Box } from "@mui/material";
import TotalCustomersCard from "./totalCustomersCard";
import CustomersLtvCard from "./customerLtvCard";
import RepeatCustomer from "./repeatCustomers";
import AvgTimeToPurchase from "./avgTimeToPurchaseCard";

const CustomerCards = () => {
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
      <TotalCustomersCard />
      <CustomersLtvCard />
      <RepeatCustomer />
      <AvgTimeToPurchase />
    </Box>
  );
};
export default CustomerCards;
