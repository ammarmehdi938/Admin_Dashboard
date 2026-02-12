import { Box, Typography } from "@mui/material";

const ProductCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        paddingTop: "30px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          height: "125px",
          width: "280px",
          p: 3,
          background: "#25253F",
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
        <Typography
          sx={{
            color: "#5E6C84",
            fontSize: "16px",
          }}
        >
          Product Name
        </Typography>
        <Typography
          sx={{
            color: "#F8FAFC",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          $284,450{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "125px",
          width: "280px",
          p: 3,
          background: "#25253F",
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
        <Typography
          sx={{
            color: "#5E6C84",
            fontSize: "16px",
          }}
        >
          Categories
        </Typography>
        <Typography
          sx={{
            color: "#F8FAFC",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          12
        </Typography>
      </Box>
      <Box
        sx={{
          height: "125px",
          width: "280px",
          p: 3,
          background: "#25253F",
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
        <Typography
          sx={{
            color: "#5E6C84",
            fontSize: "16px",
          }}
        >
          Low Stock
        </Typography>
        <Typography
          sx={{
            color: "#F8FAFC",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          8
        </Typography>
      </Box>
      <Box
        sx={{
          height: "125px",
          width: "280px",
          p: 3,
          background: "#25253F",
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
        <Typography
          sx={{
            color: "#5E6C84",
            fontSize: "16px",
          }}
        >
          Out Of Stock
        </Typography>
        <Typography
          sx={{
            color: "#F8FAFC",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          6
        </Typography>
      </Box>
    </Box>
  );
};
export default ProductCards;
