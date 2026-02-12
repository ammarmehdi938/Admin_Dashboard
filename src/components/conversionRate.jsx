import { Box, Typography, Button } from "@mui/material";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
const ConversionRate = () => {
  return (
    <Box
      sx={{
        height: "280px",
        width: "280px",
        p: 3,
        background: "#25253F",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#7562F3",
            width: "45px",
            height: "45px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShowChartOutlinedIcon sx={{ color: "#F8FAFC" }} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#4B324D",
            width: "70px",
            height: "30px",
            //   padding: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Typography sx={{ fontSize: "15px", color: "#EF6E70" }}>
            ↑ 12.5%
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#B8C0CE",
            fontSize: "14px",
            mb: "50px",
          }}
        >
          Total Orders
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            color: "#F8FAFC",
            fontWeight: "bold",
          }}
        >
          2,845
        </Typography>
        <Typography fontSize="13px" color="#71717A">
          vs. 2,530 last month
        </Typography>
      </Box>
    </Box>
  );
};
export default ConversionRate;
