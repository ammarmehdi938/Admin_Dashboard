import { Box, Typography } from "@mui/material";
import "@fontsource/playfair-display";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
const SideBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C1C36",
        minHeight: "100vh",
        width: "400px",
        overflowY: "scroll",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          mt: "50px",
          mb: "60px",
        }}
      >
        <Box sx={{ paddingLeft: "30px" }}>
          <Typography
            variant="h4"
            fontFamily="'Playfair Display', serif"
            sx={{
              color: "#D2C3FD",
              fontSize: "200",
              // fontFamily: "'Playfair Display', serif",
            }}
          >
            Atelier
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#5A687F", fontSize: "15px", marginTop: "12px" }}
          >
            COMMERECE
          </Typography>
          {/* <hr /> */}
        </Box>
        <Box
          sx={{
            mt: "60px",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", color: "#5A687F", pl: "30px", mb: "10px" }}
          >
            MAIN
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",

              width: "280px",
              height: "45px",
              boxShadow: "none",
              marginBottom: "10px",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<HomeOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            Dashboard
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<AssessmentOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            Analytics
          </Button>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#5A687F",
              pl: "30px",
              mb: "10px",
              mt: "60px",
            }}
          >
            MANAGEMENT
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<Inventory2OutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            Products
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<FilterFramesOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            Orders
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<AccountBoxOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            Customer
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<PaymentsOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            Payments
          </Button>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#5A687F",
              pl: "30px",
              mb: "10px",
              mt: "60px",
            }}
          >
            SETTINGS
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<SettingsOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            PREFERENCE
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C1C36",
              mt: "5px",
              width: "280px",
              height: "45px",
              boxShadow: "none",
              "&:hover": { boxShadow: "none", backgroundColor: "#7F5FF4" },
            }}
            startIcon={<HelpOutlineOutlinedIcon sx={{ color: "#A7AFBF" }} />}
          >
            HELP & SUPPORT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
