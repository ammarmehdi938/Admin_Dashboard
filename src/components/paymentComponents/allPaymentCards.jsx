import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import TimelineIcon from "@mui/icons-material/Timeline";

const AllPaymentCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        paddingTop: "30px",
        flexWrap: "wrap",
        my: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#25253F",
          height: "200px",
          width: "280px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", mt: "30px" }}
        >
          <Box
            sx={{
              backgroundColor: "#7562F3",
              width: "45px",
              height: "45px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CreditCardIcon sx={{ color: "#F8FAFC" }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              Credit <br /> Card
            </Typography>
            <Typography sx={{ color: "#627188" }}>Visa, Mastercard</Typography>
          </Box>
          <Box>
            <Typography>58%</Typography>
          </Box>
        </Box>
        <LinearProgress
          value={38}
          variant="determinate"
          sx={{
            height: 8,
            borderRadius: 8,
            mx: "20px",
            backgroundColor: "rgba(255,255,255,0.08)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 8,
              background: "linear-gradient(90deg, #7c6cff, #a58bff)",
            },
          }}
        />
      </Box>
      {/* PayPa; */}
      <Box
        sx={{
          backgroundColor: "#25253F",
          height: "200px",
          width: "280px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", mt: "30px" }}
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
            <PaymentsIcon sx={{ color: "#F8FAFC" }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>PayPal</Typography>
            <Typography sx={{ color: "#627188" }}>
              Online <br /> payment
            </Typography>
          </Box>
          <Box>
            <Typography>28%</Typography>
          </Box>
        </Box>
        <LinearProgress
          value={28}
          variant="determinate"
          sx={{
            height: 8,
            borderRadius: 8,
            mx: "20px",
            backgroundColor: "rgba(255,255,255,0.08)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 8,
              background: "linear-gradient(90deg, #7c6cff, #a58bff)",
            },
          }}
        />
      </Box>
      {/* Stripe */}
      <Box
        sx={{
          backgroundColor: "#25253F",
          height: "200px",
          width: "280px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
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
            }}
          >
            <TimelineIcon sx={{ color: "#F8FAFC" }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>Stripe</Typography>
            <Typography sx={{ color: "#627188" }}>Instant payment</Typography>
          </Box>
          <Box>
            <Typography>14%</Typography>
          </Box>
        </Box>
        <LinearProgress
          value={14}
          variant="determinate"
          sx={{
            height: 8,
            borderRadius: 8,
            mx: "20px",
            backgroundColor: "rgba(255,255,255,0.08)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 8,
              background: "linear-gradient(90deg, #7c6cff, #a58bff)",
            },
          }}
        />
      </Box>
      {/* Processing Fees */}
      <Box
        sx={{
          backgroundColor: "#25253F",
          height: "200px",
          width: "280px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Typography sx={{ color: "#ADB4C4" }}>Processing Fees</Typography>
        <Typography
          sx={{ color: "#F8FAFC", fontWeight: "bolder", fontSize: "20px" }}
        >
          $3,248
        </Typography>
        <Typography sx={{ color: "#33CC95" }}>2.28% of revenue</Typography>
      </Box>
    </Box>
  );
};
export default AllPaymentCards;
