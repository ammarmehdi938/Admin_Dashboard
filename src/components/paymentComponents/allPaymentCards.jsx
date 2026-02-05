import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { Box, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ProcessingFees from "./processingFees";

const AllPaymentCards = () => {
  return (
    <Box>
      <Box
        sx={{
          my: "20px",
          py: "20px",
          backgroundColor: "#262541",

          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                backgroundColor: "#6F63F3",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                ml: "10px",
              }}
            >
              <CreditCardOutlinedIcon sx={{ fontSize: "30px" }} />
            </Box>
            <Box>
              <Typography>Credit Card</Typography>
              <Typography>Visa, Mastercard</Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ color: "#F8FAFC" }}>58%</Typography>
          </Box>
        </Box>
        <LinearProgress value={58} />
      </Box>
      <Box>
        <ProcessingFees />
      </Box>
    </Box>
  );
};
export default AllPaymentCards;
