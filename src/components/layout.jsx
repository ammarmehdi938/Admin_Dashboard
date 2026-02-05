import SideBar from "./sideBar";
import { Box } from "@mui/material";

const WithLayout = (WrappedComponent) => {
  const ComponentWithLayout = (props) => {
    return (
      <Box
        sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#131426" }}
      >
        <Box sx={{ display: "flex" }}>
          <SideBar />
        </Box>
        <WrappedComponent {...props} />
      </Box>
    );
  };

  return ComponentWithLayout;
};

export default WithLayout;
