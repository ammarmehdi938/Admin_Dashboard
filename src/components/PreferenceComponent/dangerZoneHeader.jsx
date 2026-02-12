import { Box, Typography, Divider } from "@mui/material";

const DangerZoneHeader = () => {
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
        Danger Zone
      </Typography>

      <Typography sx={{ color: "#878C9F", mb: "10px" }}>
        Irreversible actions that affect your account.
      </Typography>

      <Divider sx={{ backgroundColor: "#2D294D" }} />
    </Box>
  );
};

export default DangerZoneHeader;
