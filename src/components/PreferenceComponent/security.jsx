import { Box, Typography, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import SecurityHeader from "./securityHeader";

const Security = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#272949",
        borderRadius: "10px",
        paddingBottom: "20px",
      }}
    >
      <SecurityHeader />

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          borderRadius: "10px",
          px: "20px",
          py: "16px",
        }}
      >
        <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
          Current Password
        </Typography>
        <TextField
          fullWidth
          type="password"
          placeholder="Enter current password"
          variant="outlined"
          sx={{
            backgroundColor: "#272949",
            borderRadius: "8px",
            color: "#F3F5F8",
          }}
        />
      </Box>

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: "10px",
            px: "20px",
            py: "16px",
          }}
        >
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
            New Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="Enter new password"
            sx={{
              backgroundColor: "#272949",
              borderRadius: "8px",
              color: "#F3F5F8",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            borderRadius: "10px",
            px: "20px",
            py: "16px",
          }}
        >
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
            Confirm Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="Confirm new password"
            sx={{
              backgroundColor: "#272949",
              borderRadius: "8px",
              color: "#F3F5F8",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Two-Factor Authentication
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Add an extra layer of security to your account
          </Typography>
        </Box>
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

      <Box
        sx={{
          mx: "20px",
          my: "20px",
          backgroundColor: "#312E4B",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "90px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ px: "20px" }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
            Session Timeout
          </Typography>
          <Typography sx={{ color: "#5A647C" }}>
            Automatically log out after 30 minutes of inactivity
          </Typography>
        </Box>
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
  );
};

export default Security;
