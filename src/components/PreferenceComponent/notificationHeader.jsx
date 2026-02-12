import { Box, Typography, Divider } from "@mui/material";

const NotificationHeader = () => {
  return (
    <Box sx={{ pt: "30px", ml: "30px" }}>
      <Typography
        fontFamily="'Playfair Display', serif"
        sx={{
          color: "#F3F5F8",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Notifications
      </Typography>
      <Typography
        sx={{
          color: "#878C9F",
        }}
      >
        Manage how you receive notifications and updates.
      </Typography>
      <Divider sx={{ backgroundColor: "#2D294D" }} />
    </Box>
  );
};
export default NotificationHeader;
