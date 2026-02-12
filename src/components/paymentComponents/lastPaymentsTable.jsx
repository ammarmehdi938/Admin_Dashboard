import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LastPaymentTableHeader from "./lastPaymentTableHeader";

const LastPaymentTable = () => {
  return (
    <Box sx={{ width: "950px" }}>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#262541",
          borderRadius: "16px",
          boxShadow: "none",
          padding: "20px", // Added padding to match container look
        }}
      >
        <LastPaymentTableHeader />
        <Table sx={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
          <TableHead sx={{ backgroundColor: "#2E2848" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  borderBottom: "1px solid #423A53",
                }}
              >
                TRANSACTION ID
              </TableCell>
              <TableCell
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  borderBottom: "1px solid #423A53",
                }}
              >
                CUSTOMER
              </TableCell>
              <TableCell
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  borderBottom: "1px solid #423A53",
                }}
              >
                AMOUNT
              </TableCell>
              <TableCell
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  borderBottom: "1px solid #423A53",
                }}
              >
                METHOD
              </TableCell>
              <TableCell
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  borderBottom: "1px solid #423A53",
                }}
              >
                STATUS
              </TableCell>
              <TableCell
                sx={{
                  color: "#9CA3AF",
                  fontWeight: 600,
                  borderBottom: "1px solid #423A53",
                }}
              >
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* ROW 1: Sarah Johnson */}
            <TableRow
              sx={{
                "& td": { borderBottom: "1px solid #423A53", py: 3 },
                "&:hover": {
                  backgroundColor: "#2E2848",
                },
              }}
            >
              <TableCell>
                <Typography color="white" fontWeight={600}>
                  TXN-8421
                </Typography>
                <Typography fontSize="12px" color="#94A3B8">
                  Feb 4, 2026 • 11:32 AM
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      height: 36,
                      width: 36,
                      borderRadius: "10px",
                      backgroundColor: "#7462F3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    SJ
                  </Box>
                  <Typography color="white" fontWeight={600}>
                    Sarah Johnson
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{ color: "#31C894", fontWeight: 600, fontSize: "1.1rem" }}
              >
                +$485.00
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#31284B",
                    px: 2,
                    py: 0.5,
                    borderRadius: "8px",
                    color: "#B7B9FF",
                    fontSize: "13px",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  Credit <br /> Card
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#1F3D36",
                    color: "#31C894",
                    px: 2,
                    py: 0.5,
                    borderRadius: "999px",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  ● Success
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    height: 36,
                    width: 36,
                    borderRadius: "8px",
                    border: "1px solid #423A53",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#7462F3" },
                  }}
                >
                  <VisibilityOffOutlinedIcon
                    sx={{ color: "white", fontSize: "20px" }}
                  />
                </Box>
              </TableCell>
            </TableRow>

            {/* ROW 2: Michael Chen */}
            <TableRow
              sx={{
                "& td": { borderBottom: "1px solid #423A53", py: 3 },
                "&:hover": {
                  backgroundColor: "#2E2848",
                },
              }}
            >
              <TableCell>
                <Typography color="white" fontWeight={600}>
                  TXN-8420
                </Typography>
                <Typography fontSize="12px" color="#94A3B8">
                  Feb 4, 2026 • 10:15 AM
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      height: 36,
                      width: 36,
                      borderRadius: "10px",
                      backgroundColor: "#7462F3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    MC
                  </Box>
                  <Typography color="white" fontWeight={600}>
                    Michael Chen
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{ color: "#31C894", fontWeight: 600, fontSize: "1.1rem" }}
              >
                +$322.00
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#31284B",
                    px: 2,
                    py: 0.5,
                    borderRadius: "8px",
                    color: "#B7B9FF",
                    fontSize: "13px",
                    display: "inline-block",
                  }}
                >
                  PayPal
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#1F3D36",
                    color: "#31C894",
                    px: 2,
                    py: 0.5,
                    borderRadius: "999px",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  ● Success
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    height: 36,
                    width: 36,
                    borderRadius: "8px",
                    border: "1px solid #423A53",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#7462F3" },
                  }}
                >
                  <VisibilityOffOutlinedIcon
                    sx={{ color: "white", fontSize: "20px" }}
                  />
                </Box>
              </TableCell>
            </TableRow>

            {/* ROW 3: Emma Brown (Pending) */}
            <TableRow
              sx={{
                "& td": { borderBottom: "1px solid #423A53", py: 3 },
                "&:hover": {
                  backgroundColor: "#2E2848",
                },
              }}
            >
              <TableCell>
                <Typography color="white" fontWeight={600}>
                  TXN-8419
                </Typography>
                <Typography fontSize="12px" color="#94A3B8">
                  Feb 3, 2026 • 04:42 PM
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Box
                    sx={{
                      height: 36,
                      width: 36,
                      borderRadius: "10px",
                      backgroundColor: "#7462F3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    EB
                  </Box>
                  <Typography color="white" fontWeight={600}>
                    Emma Brown
                  </Typography>
                </Box>
              </TableCell>
              <TableCell
                sx={{ color: "#31C894", fontWeight: 600, fontSize: "1.1rem" }}
              >
                +$185.00
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#31284B",
                    px: 2,
                    py: 0.5,
                    borderRadius: "8px",
                    color: "#B7B9FF",
                    fontSize: "13px",
                    display: "inline-block",
                  }}
                >
                  Credit <br /> Card
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#3A2F1F",
                    color: "#FACC15",
                    px: 2,
                    py: 0.5,
                    borderRadius: "999px",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  ● Pending
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    height: 36,
                    width: 36,
                    borderRadius: "8px",
                    border: "1px solid #423A53",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#7462F3" },
                  }}
                >
                  <VisibilityOffOutlinedIcon
                    sx={{ color: "white", fontSize: "20px" }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LastPaymentTable;
