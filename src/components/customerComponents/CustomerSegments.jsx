import { Box, Typography, LinearProgress } from "@mui/material";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const CustomerSegment = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#221F3A",
        width: "480px",
        height: "auto",
        minHeight: "600px",
        border: "1px solid #423A53",
        borderRadius: "20px",
        p: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#F0ECDB",
          fontSize: "25px",
          mb: "10px",
        }}
      >
        Customer Segments
      </Typography>
      <Box
        sx={{
          p: "20px",
          backgroundColor: "#2D2A4D",
          borderRadius: "16px",
          border: "1px solid #423A53",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                bgcolor: "#6A65F2",
                p: 1,
                borderRadius: "10px",
                display: "flex",
                color: "white",
              }}
            >
              <AutoAwesomeOutlinedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                VIP Customers
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "13px" }}>
                842 customers
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            $84.5k
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={65}
          sx={{
            height: 6,
            borderRadius: 5,
            bgcolor: "#334155",
            "& .MuiLinearProgress-bar": { bgcolor: "#F59E0B" },
          }}
        />
      </Box>
      <Box
        sx={{
          p: "20px",
          backgroundColor: "#2D2A4D",
          borderRadius: "16px",
          border: "1px solid #423A53",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                bgcolor: "#6A65F2",
                p: 1,
                borderRadius: "10px",
                display: "flex",
                color: "white",
              }}
            >
              <DoneOutlinedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                Premium
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "13px" }}>
                3,456 customers
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            $52.3k
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={45}
          sx={{
            height: 6,
            borderRadius: 5,
            bgcolor: "#334155",
            "& .MuiLinearProgress-bar": { bgcolor: "#8B5CF6" },
          }}
        />
      </Box>
      <Box
        sx={{
          p: "20px",
          backgroundColor: "#2D2A4D",
          borderRadius: "16px",
          border: "1px solid #423A53",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                bgcolor: "#6A65F2",
                p: 1,
                borderRadius: "10px",
                display: "flex",
                color: "white",
              }}
            >
              <PeopleOutlinedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                Regular
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "13px" }}>
                5,684 customers
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            $28.4k
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={30}
          sx={{
            height: 6,
            borderRadius: 5,
            bgcolor: "#334155",
            "& .MuiLinearProgress-bar": { bgcolor: "#6366F1" },
          }}
        />
      </Box>
      <Box
        sx={{
          p: "20px",
          backgroundColor: "#2D2A4D",
          borderRadius: "16px",
          border: "1px solid #423A53",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                bgcolor: "#6A65F2",
                p: 1,
                borderRadius: "10px",
                display: "flex",
                color: "white",
              }}
            >
              <PersonAddOutlinedIcon fontSize="small" />
            </Box>
            <Box>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                New Customers
              </Typography>
              <Typography sx={{ color: "#94A3B8", fontSize: "13px" }}>
                2,445 customers
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            $12.1k
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={15}
          sx={{
            height: 6,
            borderRadius: 5,
            bgcolor: "#334155",
            "& .MuiLinearProgress-bar": { bgcolor: "#10B981" },
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomerSegment;
