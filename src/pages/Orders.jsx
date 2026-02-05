import { Box } from "@mui/material";
import WithLayout from "../components/layout";
import OrderHeader from "../components/orderComponents/orderHeader";
import OrderCards from "../components/orderComponents/orderCards";
import OrderSearchBar from "../components/orderComponents/orderSearchBar";
import OrderTable from "../components/orderComponents/orderTable";

const Orders = () => {
  return (
    <Box
      sx={{
        ml: "50px",
      }}
    >
      <Box sx={{ mt: "50px" }}>
        <OrderHeader />
      </Box>
      <Box>
        <OrderCards />
      </Box>
      <Box
        sx={{
          mt: "50px",
        }}
      >
        <OrderSearchBar />
      </Box>
      <Box sx={{ mt: "50px" }}>
        <OrderTable />
      </Box>
    </Box>
  );
};
export default WithLayout(Orders);
