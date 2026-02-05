import { Box, Typography } from "@mui/material";
import SwitchAccessShortcutAddOutlinedIcon from "@mui/icons-material/SwitchAccessShortcutAddOutlined";
const CustomerSegment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C2643",
        width: "400px",
        height: "600px",
        border: "1px solid #423A53",
        borderRadius: "20px",
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

      <Box sx={{ marginTop: "20px", mx: "30px" }}>
        <Box
          sx={{
            backgroundColor: "#2B283F",
            border: "1px solid #423A53",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#7562F3",
              boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
            },
          }}
        >
          <Box
            sx={{
              color: "#F0ECDB",
              backgroundColor: "#6D64F2",
              height: "40px",
              width: "40px",
            }}
          >
            <SwitchAccessShortcutAddOutlinedIcon />
          </Box>
          <Box
            sx={{
              fontWeight: "bold",
              color: "#F0ECDB",
              fontSize: "16px",
              mt: "20px",
              ml: "20px",
            }}
          >
            <Typography sx={{}}>VIP Customers</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CustomerSegment;
