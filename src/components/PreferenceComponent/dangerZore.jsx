import { Box, Typography, Button } from "@mui/material";
import DangerZoneHeader from "./dangerZoneHeader";

const DangerZone = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#241931",
        borderRadius: "10px",
        paddingBottom: "20px",
        border: "1px solid #54324C",
      }}
    >
      <DangerZoneHeader />

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#241931",
          border: "1px solid #51314A",
          borderRadius: "10px",
          height: "90px",
          px: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Export Account Data
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Download all your account data in JSON format
          </Typography>
        </Box>

        <Button
          variant="outlined"
          sx={{
            color: "#F3F5F8",
            borderColor: "#5A647C",
            textTransform: "none",
            "&:hover": {
              borderColor: "#6C5DD3",
              backgroundColor: "rgba(108,93,211,0.1)",
            },
          }}
        >
          Export Data
        </Button>
      </Box>

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#241931",
          border: "1px solid #5A2A3A",
          borderRadius: "10px",
          height: "90px",
          px: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Delete Account
          </Typography>
          <Typography sx={{ color: "#9A5A6A" }}>
            Permanently delete your account and all associated data
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#53304C",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#B63636",
            },
          }}
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
};

export default DangerZone;
