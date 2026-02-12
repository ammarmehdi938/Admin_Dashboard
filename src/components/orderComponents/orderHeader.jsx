import { Box, Button, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";

const OrderHeader = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          // gap: 20,
        }}
      >
        <Typography
          variant="h3"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#F0ECFE" }}
        >
          Orders
        </Typography>

        <Box sx={{ display: "flex", gap: 2, ml: "300px" }}>
          <Button
            sx={{
              backgroundColor: "#2C294B",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#EDEFF3",
              fontWeight: "bold",
              px: 3,
              py: 1,
              width: "200px",
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <BrowserUpdatedOutlinedIcon sx={{ mr: 1 }} />
            Export
          </Button>

          <Button
            sx={{
              backgroundColor: "#6A64F2",
              color: "#EDEFF3",
              fontWeight: "bold",
              px: 3,
              py: 1,
              width: "200px",
              height: "50px",
              borderRadius: "10px",
            }}
          >
            <Typography>+ Create Order</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 3, color: "#CBD5E1", mt: "20px" }}>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Inventory2OutlinedIcon sx={{ fontSize: "20px" }} />
          156 Total Products
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* <AccessTimeOutlinedIcon sx={{ fontSize: "20px" }} /> */}✅ 152 in
          stocks
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderHeader;
