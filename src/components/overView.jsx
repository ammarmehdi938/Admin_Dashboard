import { Box } from "@mui/material";
import OverViewHeader from "./overViewHeadre";
import CardsContainer from "./cardsContainer";
import TopProducts from "./topProducts";
import RevenueChart from "./revenueChar";
const OverView = () => {
  return (
    <Box sx={{ mt: "50px", marginX: "50px" }}>
      <OverViewHeader />
      <Box>
        <CardsContainer />
      </Box>
      <Box sx={{ mt: "50px", marginLeft: "-20px" }}>
        <RevenueChart />
      </Box>
      <Box
        sx={{
          mt: "50px",
        }}
      >
        <TopProducts />
      </Box>
    </Box>
  );
};
export default OverView;
