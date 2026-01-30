import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Box, Divider } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

const RevenueChartActivityList = () => {
  return (
    <Box>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem sx={{ marginY: "20px" }}>
          <Box
            sx={{
              backgroundColor: "#7562F3",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <ShoppingBagOutlinedIcon sx={{ color: "#F8FAFC" }} />
          </Box>

          <ListItemText
            primary="New order received"
            secondary="Order #4582 from Sarah"
            sx={{
              color: "#F8FAEB",
              "& .MuiListItemText-secondary": { color: "#A7AFBF" },
            }}
          />
        </ListItem>
        <Divider sx={{}} />
        <ListItem sx={{ marginY: "30px" }}>
          <Box
            sx={{
              backgroundColor: "#7562F3",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <PeopleOutlinedIcon sx={{ color: "#F8FAFC" }} />
          </Box>
          <ListItemText
            primary="New customer registered"
            secondary={`Michael Chen joined  
                      `}
            sx={{
              color: "#F8FAEB",
              color: "#F8FAEB",
              "& .MuiListItemText-secondary": { color: "#A7AFBF" },
            }}
          />
        </ListItem>
        <Divider sx={{ my: 2, borderColor: "#423A53" }} />
        <ListItem sx={{ marginY: "20px" }}>
          <Box
            sx={{
              backgroundColor: "#7562F3",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <Inventory2OutlinedIcon sx={{ color: "#F8FAFC" }} />
          </Box>
          <ListItemText
            primary="Product updated"
            secondary={`Silk Blouse inventory restocked 
                 1 hour ago`}
            sx={{
              color: "#F8FAEB",
              color: "#F8FAEB",
              "& .MuiListItemText-secondary": { color: "#A7AFBF" },
            }}
          />
        </ListItem>
        <Divider sx={{ my: 2, borderColor: "#423A53" }} />
        <ListItem sx={{ marginY: "20px" }}>
          <Box
            sx={{
              backgroundColor: "#7562F3",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <PaymentsOutlinedIcon sx={{ color: "#F8FAFC" }} />
          </Box>
          <ListItemText
            primary="Payment processed"
            secondary={`$2,450 received from Stripe <br/> 3 hours ago`}
            sx={{
              color: "#F8FAEB",
              color: "#F8FAEB",
              "& .MuiListItemText-secondary": { color: "#A7AFBF" },
            }}
          />
        </ListItem>
        <Divider sx={{ my: 2, borderColor: "#423A53" }} />
      </List>
    </Box>
  );
};
export default RevenueChartActivityList;
