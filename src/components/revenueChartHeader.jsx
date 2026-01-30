import { Box, Typography, Button } from "@mui/material";

const RevenueChartHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginX: "30px",
        marginY: "40px",
      }}
    >
      <Typography
        fontFamily="'Playfair Display', serif"
        sx={{ fontSize: "20px", fontWeight: 500, color: "#F8FAFC" }}
      >
        Revenue Chart
      </Typography>
      <Box
        sx={{
          border: "1px solid #423A53",
          borderRadius: "8px",
          //   ml: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            borderRadius: "10px",
            marginY: "2px",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#7F5FF4",
            },
          }}
        >
          7D
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            marginY: "2px",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#7F5FF4",
            },
          }}
        >
          30D
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            marginY: "2px",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#7F5FF4",
            },
          }}
        >
          90D
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            marginY: "2px",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#7F5FF4",
            },
          }}
        >
          1Y
        </Button>
      </Box>
    </Box>
  );
};
export default RevenueChartHeader;
