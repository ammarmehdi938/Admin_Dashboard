import { Box } from "@mui/material";
import OverView from "../components/overView";
import WithLayout from "../components/layout";

const Home = () => {
  return (
    // <Box sx={{ backgroundColor: "#131426", display: "flex" }}>
    <OverView />
  );

  {
    /* </Box> */
  }
};
// export default Home;
export default WithLayout(Home);
