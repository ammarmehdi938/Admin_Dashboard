import { TextField, Box, Button } from "@mui/material";

const PaymentSearchBar = () => {
  const ButtonStyle = {
    borderRadius: "10px",
    marginY: "2px",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#64748B",
    },
    "&.active": {
      backgroundColor: "#7F5FF4",
    },
  };

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
            // marginRight: "10px",
            borderRadius: "8px",
            width: "400px",
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
          <Button sx={ButtonStyle}>All</Button>
          <Button sx={ButtonStyle}>Success</Button>
          <Button sx={ButtonStyle}>Pending</Button>
          <Button sx={ButtonStyle}>Failed</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentSearchBar;
