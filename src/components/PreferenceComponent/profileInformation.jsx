import {
  Box,
  Button,
  Divider,
  Typography,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

const ProfileInformation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1D1933",
        padding: "40px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box>
        <Typography
          fontFamily="'Playfair Display', serif"
          sx={{ fontSize: "32px", fontWeight: "bold", color: "#F0ECFE" }}
        >
          Profile Information
        </Typography>
        <Typography sx={{ color: "#B8C0CE" }}>
          Update your account profile information and email address.
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "#2D294D" }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <Box
          sx={{
            background: "#766EF5",
            height: "100px",
            width: "100px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily="'Playfair Display', serif"
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#F0ECFE" }}
          >
            AM
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2D294D",
              textTransform: "none",
              borderRadius: "8px",
              border: "1px solid #423A53",
              width: "fit-content",
            }}
          >
            Change Avatar
          </Button>
          <Typography sx={{ color: "#636E81", fontSize: "14px" }}>
            JPG, GIF or PNG. Max size of 2MB.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileInformation;
