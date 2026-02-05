import { Box, Typography, Button } from "@mui/material";

const LastPaymentTableHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginX: "30px",
        marginY: "40px",
      }}
    >
      <Typography
        fontFamily="'Playfair Display', serif"
        sx={{ fontSize: "20px", fontWeight: 500, color: "#F8FAFC" }}
      >
        Recent Transactions
      </Typography>

      <Button
        sx={{
          borderRadius: "10px",
          marginY: "2px",
          color: "white",
          fontWeight: "bold",
          border: "1px solid #423A53",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#7F5FF4",
          },
        }}
      >
        View All
      </Button>
    </Box>
  );
};
export default LastPaymentTableHeader;
