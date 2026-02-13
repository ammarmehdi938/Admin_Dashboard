import WithLayout from "../components/layout";
import ProductHeader from "../components/productComponents/productHeader";
import { Box } from "@mui/material";
import ProductCards from "../components/productComponents/productCards";
import ProductSearchBar from "../components/productComponents/productSearchBar";
import AllProducts from "../components/allProducts";

const Products = () => {
  return (
    <Box sx={{ mt: "20px", marginX: "50px" }}>
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
