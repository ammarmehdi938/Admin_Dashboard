import { Box, Typography } from "@mui/material";
import NotificationHeader from "./notificationHeader";
import Switch from "@mui/material/Switch";

const Notification = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#272949",
        borderRadius: "10px",
        paddingBottom: "20px",
      }}
    >
      <NotificationHeader />

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          mx: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Email Notifications
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Receive email updates about your account
          </Typography>
        </Box>
        <Box>
          <Switch
            defaultChecked
            sx={{
              background:
                "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              "& .MuiSwitch-switchBase.Mui-checked": {
                background:
                  "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6C5DD3",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#7063F2",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          mx: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Order Updates
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Get notified when orders are placed or updated
          </Typography>
        </Box>
        <Box>
          <Switch
            defaultChecked
            sx={{
              background:
                "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              "& .MuiSwitch-switchBase.Mui-checked": {
                background:
                  "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6C5DD3",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#7063F2",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          mx: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Payment Alerts
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Receive alerts for successful and failed payments
          </Typography>
        </Box>
        <Box>
          <Switch
            defaultChecked
            sx={{
              background:
                "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              "& .MuiSwitch-switchBase.Mui-checked": {
                background:
                  "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6C5DD3",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#7063F2",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          mx: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Low Stock Alerts
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Get notified when products are running low
          </Typography>
        </Box>
        <Box>
          <Switch
            defaultChecked
            sx={{
              background:
                "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              "& .MuiSwitch-switchBase.Mui-checked": {
                background:
                  "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6C5DD3",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#7063F2",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          mx: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Marketing Emails
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Receive tips and promotional content
          </Typography>
        </Box>
        <Box>
          <Switch
            defaultChecked
            sx={{
              background:
                "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              "& .MuiSwitch-switchBase.Mui-checked": {
                background:
                  "linear-gradient(135deg, var(--royal-purple), var(--soft-purple))",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#6C5DD3",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#7063F2",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Notification;
