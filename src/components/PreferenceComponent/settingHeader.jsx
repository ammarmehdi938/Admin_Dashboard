import { Box, Button, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
const SettingHeader = () => {
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
          Setting
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
            Reset to Default
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
            Save Changes
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 3, color: "#CBD5E1", mt: "20px" }}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          ⚙️ Manage your preferences
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          🔒 Last updated: 2 days ago
        </Typography>
      </Box>
    </Box>
  );
};

export default SettingHeader;
