import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "@fontsource/playfair-display";
import {
  HomeOutlined,
  AssessmentOutlined,
  Inventory2Outlined,
  FilterFramesOutlined,
  AccountBoxOutlined,
  PaymentsOutlined,
  SettingsOutlined,
  HelpOutlineOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const menuItemStyle = {
  height: 48,
  mx: 1.5,
  mb: 0.5,
  borderRadius: "12px",
  color: "#A7AFBF",
  "& .MuiListItemIcon-root": {
    color: "#A7AFBF",
    minWidth: 40,
  },
  "&:hover": {
    backgroundColor: "#2C284A",
  },
  "&.active": {
    backgroundColor: "#7F5FF4",
    color: "#FFFFFF",
    "& .MuiListItemIcon-root": {
      color: "#FFFFFF",
    },
  },
};

const SectionTitle = ({ title }) => (
  <Typography
    sx={{
      fontSize: 13,
      color: "#5A687F",
      px: 3,
      mt: 4,
      mb: 1,
      letterSpacing: "0.08em",
    }}
  >
    {title}
  </Typography>
);

const SideBar = () => {
  return (
    <Box
      sx={{
        width: 300,
        minHeight: "100vh",
        backgroundColor: "#1C1C36",
      }}
    >
      {/* Logo */}
      <Box sx={{ px: 3, pt: 5, pb: 6 }}>
        <Typography
          variant="h4"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#D2C3FD" }}
        >
          Atelier
        </Typography>
        <Typography sx={{ color: "#5A687F", fontSize: 14, mt: 1 }}>
          COMMERCE
        </Typography>
      </Box>

      <List disablePadding>
        <SectionTitle title="MAIN" />

        <ListItemButton component={NavLink} to="/" sx={menuItemStyle}>
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/analytics" sx={menuItemStyle}>
          <ListItemIcon>
            <AssessmentOutlined />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>

        <SectionTitle title="MANAGEMENT" />

        <ListItemButton component={NavLink} to="/products" sx={menuItemStyle}>
          <ListItemIcon>
            <Inventory2Outlined />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/orders" sx={menuItemStyle}>
          <ListItemIcon>
            <FilterFramesOutlined />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/customers" sx={menuItemStyle}>
          <ListItemIcon>
            <AccountBoxOutlined />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/payments" sx={menuItemStyle}>
          <ListItemIcon>
            <PaymentsOutlined />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItemButton>

        <SectionTitle title="SETTINGS" />

        <ListItemButton
          component={NavLink}
          to="/preferences"
          sx={menuItemStyle}
        >
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Preferences" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/signup" sx={menuItemStyle}>
          <ListItemIcon>
            <SettingsOutlined />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default SideBar;
