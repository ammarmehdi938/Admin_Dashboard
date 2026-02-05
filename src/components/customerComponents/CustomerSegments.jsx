import { Box, Typography } from "@mui/material";
import SwitchAccessShortcutAddOutlinedIcon from "@mui/icons-material/SwitchAccessShortcutAddOutlined";
import CustomerTypeProgress from "./customerTypeProgress";
const CustomerSegment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C2643",
        width: "490px",
        height: "600px",
        border: "1px solid #423A53",
        borderRadius: "20px",
        px: "20px",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#F0ECDB",
          fontSize: "25px",
          mt: "20px",
          ml: "20px",
        }}
      >
        Customer Segments
      </Typography>

      <Box sx={{ backgroundColor: "#2E2E4F" }}>
        <Box>
          <Box
            sx={{
              backgroundColor: "#6A65F2",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F8FAFC",
              borderRadius: "8px",
            }}
          >
            <SwitchAccessShortcutAddOutlinedIcon />
          </Box>
          <Box
            sx={{
              ml: "70px",
              mb: "10px",
            }}
          >
            <Typography sx={{ color: "#F8FAFC", fontWeight: "bold" }}>
              VIP Customers
            </Typography>
            <Typography sx={{ color: "#5D6A82" }}>842 Customers</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CustomerSegment;
