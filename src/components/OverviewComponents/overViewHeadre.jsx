import { Box, Typography, Button } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";

const OverViewHeader = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: 4,
        }}
      >
        <Typography
          variant="h3"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#F0ECFE" }}
        >
          Overview
        </Typography>

        <Box sx={{ display: "flex", gap: 2, ml: "350px" }}>
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
            Export Report
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
            <Typography>+ New Product</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 3, color: "#CBD5E1", mt: "20px" }}>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarTodayOutlinedIcon sx={{ fontSize: "20px" }} />
          Jan 27, 2026
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AccessTimeOutlinedIcon sx={{ fontSize: "20px" }} />
          Real-time data
        </Typography>
      </Box>
    </Box>
  );
};

export default OverViewHeader;
