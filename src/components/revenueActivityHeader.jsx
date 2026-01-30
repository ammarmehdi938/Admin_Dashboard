import { Box, Typography } from "@mui/material";

const RevenueChartActivityHeader = () => {
  return (
    <Box>
      <Typography
        fontFamily="'Playfair Display', serif"
        sx={{
          color: "#F8FAEB",
          fontSize: "25px",
          fontWeight: "500px",
          paddingTop: "30px",
          paddingLeft: "30px",
        }}
      >
        Recent Activity
      </Typography>
    </Box>
  );
};
export default RevenueChartActivityHeader;
