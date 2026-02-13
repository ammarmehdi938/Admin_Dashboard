import {
  Typography,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const OrderTable = () => {
  // Common style for action icon boxes
  const actionButtonStyle = {
    height: "35px",
    width: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid #423A53",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#8A8AA0",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#7462F3",
      color: "#ffffff",
    },
  };

  return (
    <Box sx={{ width: "980px", overflow: "hidden", p: 2 }}>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#1A1932", boxShadow: "none" }}
      >
        <Table sx={{ minWidth: 900 }}>
          <TableHead sx={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}>
            <TableRow>
              {[
                "Order ID",
                "Customer",
                "Items",
                "Total",
                "Status",
                "Payment",
                "Actions",
              ].map((text) => (
                <TableCell
                  key={text}
                  sx={{
                    color: "#627289",
                    borderBottom: "1px solid #2D2C4D",
                    fontWeight: 600,
                  }}
                >
                  {text}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody
            sx={{ "& td": { borderBottom: "1px solid #2D2C4D", py: 2 } }}
          >
            <TableRow
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.03)" },
              }}
            >
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 700 }}>
                  #ORD-4580
                </Typography>
                <Typography sx={{ color: "#627289", fontSize: "0.75rem" }}>
                  Feb 3, 2026 • 04:28 PM
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#7462F3",
                      width: 32,
                      height: 32,
                      fontSize: "0.8rem",
                    }}
                  >
                    EB
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      Emma Brown
                    </Typography>
                    <Typography sx={{ color: "#627289", fontSize: "0.75rem" }}>
                      emma.b@email.com
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
                  1 item
                </Typography>
                <Typography sx={{ color: "#627289", fontSize: "0.75rem" }}>
                  Vanilla Noir Parfum
                </Typography>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700 }}>
                $185.00
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "20px",
                    backgroundColor: "rgba(255, 184, 0, 0.1)",
                    color: "#FFB800",
                    fontSize: "0.75rem",
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "#FFB800",
                    }}
                  />{" "}
                  Pending
                </Box>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    color: "#FFB800",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    bgcolor: "rgba(255, 184, 0, 0.05)",
                    px: 1,
                    py: 0.3,
                    borderRadius: "4px",
                    display: "inline-block",
                  }}
                >
                  Pending
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box sx={actionButtonStyle}>
                    <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Box sx={actionButtonStyle}>
                    <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>

            {/* ROW 2: DAVID WILSON */}
            <TableRow
              sx={{
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.03)" },
              }}
            >
              <TableCell>
                <Typography sx={{ color: "white", fontWeight: 700 }}>
                  #ORD-4579
                </Typography>
                <Typography sx={{ color: "#627289", fontSize: "0.75rem" }}>
                  Feb 3, 2026 • 02:14 PM
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#3498db",
                      width: 32,
                      height: 32,
                      fontSize: "0.8rem",
                    }}
                  >
                    DW
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      David Wilson
                    </Typography>
                    <Typography sx={{ color: "#627289", fontSize: "0.75rem" }}>
                      d.wilson@email.com
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
                  4 items
                </Typography>
                <Typography sx={{ color: "#627289", fontSize: "0.75rem" }}>
                  Dinnerware Set, Wallet...
                </Typography>
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 700 }}>
                $624.00
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "20px",
                    backgroundColor: "rgba(49, 200, 148, 0.1)",
                    color: "#31C894",
                    fontSize: "0.75rem",
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: "#31C894",
                    }}
                  />{" "}
                  Completed
                </Box>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    color: "#31C894",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    bgcolor: "rgba(49, 200, 148, 0.05)",
                    px: 1,
                    py: 0.3,
                    borderRadius: "4px",
                    display: "inline-block",
                  }}
                >
                  Paid
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box sx={actionButtonStyle}>
                    <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Box sx={actionButtonStyle}>
                    <FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
