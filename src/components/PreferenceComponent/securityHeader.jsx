import { Box, Typography, Divider } from "@mui/material";

const SecurityHeader = () => {
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
        Security
      </Typography>

      <Typography
        sx={{
          color: "#878C9F",
        }}
      >
        Manage your password and security preferences.
      </Typography>

      <Divider sx={{ backgroundColor: "#2D294D" }} />
    </Box>
  );
};

export default SecurityHeader;
