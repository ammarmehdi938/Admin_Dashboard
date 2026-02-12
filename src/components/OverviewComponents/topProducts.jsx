import { Box } from "@mui/material";
import TopProductSearchBar from "../topProductSearchBar";
import TopProductTable from "../topProductTable";

const TopProducts = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#25253F",
        color: "white",
        minHeight: "60px",
        minWidth: "900px",
        border: "1px solid #423A53",
        borderRadius: "10px",
        mb: "100px",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <Box>
        <TopProductSearchBar />
        <TopProductTable />
      </Box>
    </Box>
  );
};
export default TopProducts;
