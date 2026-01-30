import { Box, Typography } from "@mui/material";
import RevenueChartActivityHeader from "./revenueActivityHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import RevenueChartActivityList from "./revenueChartList";

const RevenueChartActivity = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C2643",
        width: "300px",
        height: "600px",
        border: "1px solid #423A53",
        borderRadius: "20px",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <RevenueChartActivityHeader />
      <RevenueChartActivityList />
    </Box>
  );
};
export default RevenueChartActivity;
