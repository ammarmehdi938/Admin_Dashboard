import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";

const ProfileInformationForm = () => {
  const inputStyles = {
    backgroundColor: "#252142",
    borderRadius: "10px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3A355C",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#766EF5",
    },
    "& .MuiInputBase-input": {
      color: "#F0ECFE",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minHeight: "400px",
        mx: "20px",
      }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#B8C0CE", mb: 1 }}>Full Name</Typography>
          <TextField
            fullWidth
            defaultValue="Admin User"
            variant="outlined"
            sx={inputStyles}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#B8C0CE", mb: 1 }}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            defaultValue="admin@atelier.com"
            variant="outlined"
            sx={inputStyles}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#B8C0CE", mb: 1 }}>Phone Number</Typography>
          <TextField
            fullWidth
            defaultValue="+1 (555) 123-4567"
            variant="outlined"
            sx={inputStyles}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: "#B8C0CE", mb: 1 }}>Time Zone</Typography>
          <TextField select fullWidth defaultValue="UTC-5" sx={inputStyles}>
            <MenuItem value="UTC-5">UTC-5 (Eastern Time)</MenuItem>
            <MenuItem value="UTC+0">UTC+0 (GMT)</MenuItem>
            <MenuItem value="UTC+5">UTC+5 (PKT)</MenuItem>
          </TextField>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ color: "#B8C0CE", mb: 1 }}>Bio</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          defaultValue="E-commerce administrator with 5+ years of experience in digital retail."
          sx={inputStyles}
        />
      </Box>

      {/* Actions */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#2D294D",
            color: "#B8C0CE",
            borderRadius: "10px",
            px: 3,
            "&:hover": { backgroundColor: "#36315E" },
          }}
        >
          Discard
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#766EF5",
            borderRadius: "10px",
            px: 3,
            "&:hover": { backgroundColor: "#5E57D9" },
          }}
        >
          Save All Changes
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileInformationForm;
