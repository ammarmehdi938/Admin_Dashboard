import { Box, Button, Typography } from "@mui/material";

const AnalyticTableHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginX: "30px",
      }}
    >
      <Typography
        variant="h4"
        fontFamily="'Playfair Display', serif"
        sx={{ color: "#EAECF0" }}
      >
        Top Performing Products
      </Typography>
      <Button
        sx={{
          fontWeight: "bold",
          color: "#EAECF0",
          backgroundColor: "#37364A",
          paddingY: "15px",
          paddingX: "20px",
          borderRadius: "10px",
          border: "1px solid #504C5F",
        }}
      >
        View All
      </Button>
    </Box>
  );
};
export default AnalyticTableHeader;
