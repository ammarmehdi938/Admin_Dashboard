import WithLayout from "../components/layout";
import ProductHeader from "../components/productHeader";
import { Box } from "@mui/material";
import ProductCards from "../components/productCards";
import ProductSearchBar from "../components/productSearchBar";
import AllProducts from "../components/allProducts";

const Products = () => {
  return (
    <Box sx={{ mt: "50px", marginX: "50px" }}>
      {/* <OverViewHeader /> */}
      <ProductHeader />
      <Box>
        <ProductCards />
      </Box>
      <Box sx={{ mt: "50px", marginLeft: "-20px" }}></Box>
      <Box
        sx={{
          mt: "50px",
        }}
      >
        <ProductSearchBar />
      </Box>
      <Box
        sx={{
          mt: "50px",
        }}
      >
        <AllProducts />
      </Box>
    </Box>
  );
};
export default WithLayout(Products);
