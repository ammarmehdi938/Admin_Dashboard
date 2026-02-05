import { Box, Typography } from "@mui/material";

const customerSegmentCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#30294C",
        border: "1px solid #35356F",
        height: "180px",
        width: "280px",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ ml: "10px", mt: "20px" }}>
        <Typography sx={{ color: "#9C9A7F" }}>Average Order Value</Typography>
        <Typography
          sx={{ color: "#F3F5F7", fontSize: "20px", fontWeight: "700px" }}
        >
          $156.32
        </Typography>
        <Typography
          sx={{
            color: "#33C492",
            fontSize: "18px",
            marginTop: "5px",
            fontWeight: "500",
          }}
        >
          +14.2% from last month
        </Typography>
      </Box>
    </Box>
  );
};
export default customerSegmentCard;
