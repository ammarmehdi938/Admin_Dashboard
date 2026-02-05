import { Box, Typography } from "@mui/material";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const TotalRevenueCard = () => {
  return (
    <Box
      sx={{
        paddingX: "20px",
        backgroundColor: "#262541",
        width: "300px",
        height: "190px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <Box>
        <Typography sx={{ color: "#64748B", pt: "20px" }}>
          Total Revenue
        </Typography>
        <Typography
          sx={{
            color: "#F8FAFC",
            fontWeight: "bolder",
            fontSize: "30px",

            pt: "40px",
          }}
        >
          $142,580
        </Typography>
        <Typography sx={{ color: "#34D399" }}>+18.2% vs last month</Typography>
      </Box>
      <Box
        sx={{
          mt: "20px",
          backgroundColor: "#7562F3",
          width: "45px",
          height: "45px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AttachMoneyOutlinedIcon sx={{ color: "#F8FAFC" }} />
      </Box>
    </Box>
  );
};
export default TotalRevenueCard;
