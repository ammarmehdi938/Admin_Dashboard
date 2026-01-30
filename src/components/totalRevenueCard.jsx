import { Box, Typography } from "@mui/material";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const TotalRevenueCard = () => {
  return (
    <Box
      sx={{
        height: "280px",
        width: "280px",
        p: 3,
        background: "linear-gradient(180deg, #2E2444 0%, #241C35 100%)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #423A53",
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
          {/* <span
          style={{
            border: "2px solid white",
            
            borderRadius: "50%",
          }}
        > */}
          <AttachMoneyOutlinedIcon sx={{ color: "#F8FAFC" }} />
          {/* </span> */}
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(34, 197, 94, 0.15)",
            width: "70px",
            height: "30px",
            //   padding: "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Typography sx={{ fontSize: "15px", color: "#34C894" }}>
            ↑ 18.2%
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
          Total Revenue
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            color: "#F8FAFC",
            fontWeight: "bold",
          }}
        >
          $142,580
        </Typography>
        <Typography fontSize="13px" color="#71717A">
          vs. $120,450 last month
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalRevenueCard;
