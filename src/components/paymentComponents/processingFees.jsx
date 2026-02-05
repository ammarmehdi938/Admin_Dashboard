import { Box, Typography } from "@mui/material";

const ProcessingFees = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2A284C",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        pl: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ color: "#AAB1C2" }}>Processing Fees</Typography>
      <Typography
        sx={{ color: "#F8FAFC", fontSize: "20px", fontWeight: "bolder" }}
      >
        $3,248
      </Typography>
      <Typography sx={{ color: "#34C793" }}>2.28% of revenue</Typography>
    </Box>
  );
};

export default ProcessingFees;
