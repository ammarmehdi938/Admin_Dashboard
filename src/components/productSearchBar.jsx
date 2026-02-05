import { TextField, Box, Button } from "@mui/material";

const ProductSearchBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2A213D",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingY: "20px",
        }}
      >
        <TextField
          placeholder="Search products, SKU or catagory"
          sx={{
            width: "400px",
            border: "1px solid #423A53",
            marginRight: "10px",
            borderRadius: "8px",
            "&:hover": {
              border: "0px ",
            },
          }}
        ></TextField>
        <Box
          sx={{
            width: "380px",
            border: "1px solid #423A53",
            borderRadius: "8px",
            ml: "20px",
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
            All
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
            Active
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
            Low Stock
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
            out of Stock
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSearchBar;
