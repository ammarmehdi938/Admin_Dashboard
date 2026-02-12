import { Box, Typography } from "@mui/material";

const TopCustomerHeader = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: "#F1EEFE",
          fontWeight: "bold",
          mt: "20px",
          ml: "20px",
        }}
      >
        Top Customers
      </Typography>
    </Box>
  );
};
export default TopCustomerHeader;
