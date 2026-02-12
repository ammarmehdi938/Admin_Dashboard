import { Box, TextField, Button } from "@mui/material";

const CustomerSearchBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#25253F",
        borderRadius: "10px",
        mr: "50px",
        width: "950px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          paddingY: "20px",
          paddingX: "20px",
        }}
      >
        <TextField
          placeholder="Search products, SKU or catagory"
          sx={{
            border: "1px solid #423A53",

            borderRadius: "8px",
            "&:hover": {
              border: "0px ",
            },
          }}
        ></TextField>
        <Box
          sx={{
            border: "1px solid #423A53",
            borderRadius: "8px",

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
            VIP
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
            Premium
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
            Regular
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
            New
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default CustomerSearchBar;
