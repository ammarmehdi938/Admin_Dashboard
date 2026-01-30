import SideBar from "../components/sideBar";
import { Box } from "@mui/material";
import OverView from "../components/overView";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#131426", display: "flex" }}>
      <SideBar />
      <OverView />
    </Box>
  );
};
export default Home;
