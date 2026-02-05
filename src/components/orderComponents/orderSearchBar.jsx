import { TextField, Box, Button } from "@mui/material";

const OrderSearchBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#262541",
        borderRadius: "10px",
        mr: "50px",
        width: "950px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //   justifyContent: "space-between",
          gap: "20px",
          paddingY: "20px",
          paddingX: "20px",
        }}
      >
        <TextField
          placeholder="Search products, SKU or catagory"
          sx={{
            border: "1px solid #423A53",
            // marginRight: "10px",
            borderRadius: "8px",
            "&:hover": {
              border: "0px ",
            },
          }}
        ></TextField>
        <Box
          sx={{
            // width: "380px",
            border: "1px solid #423A53",
            borderRadius: "8px",
            // ml: "20px",
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
            Completed
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
            Processing
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
            Pending
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
            Cancelled
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderSearchBar;
