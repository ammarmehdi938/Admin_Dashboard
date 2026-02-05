import { Box, Typography } from "@mui/material";

const PaymentMethodCardsHeader = () => {
  return (
    <Box sx={{ backgroundColor: "#262541" }}>
      <Typography
        fontFamily="'Playfair Display', serif"
        sx={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Payment Methods
      </Typography>

      
    </Box>
  );
};

export default PaymentMethodCardsHeader;
