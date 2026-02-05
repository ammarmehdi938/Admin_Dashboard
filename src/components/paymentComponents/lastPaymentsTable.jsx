import { Button, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LastPaymentTableHeader from "./lastPaymentTableHeader";

const createData = (
  TransactionID,
  Customer,
  Amount,
  Method,
  Status,
  Actions,
) => {
  return { TransactionID, Customer, Amount, Method, Status, Actions };
};

const rows = [
  {
    id: "TXN-8421",
    date: "Feb 4, 2026",
    time: "11:32 AM",
    customer: "Sarah Johnson",
    initials: "SJ",
    amount: "+$485.00",
    method: "Credit Card",
    status: "success",
  },
  {
    id: "TXN-8420",
    date: "Feb 4, 2026",
    time: "10:15 AM",
    customer: "Michael Chen",
    initials: "MC",
    amount: "+$322.00",
    method: "PayPal",
    status: "success",
  },
];

const LastPaymentTable = () => {
  return (
    <Box
      sx={{
        width: "950px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#262541",
          borderRadius: "16px",
          boxShadow: "none",
        }}
      >
        <LastPaymentTableHeader />
        <Table>
          <TableHead sx={{ backgroundColor: "#31284B", height: "100px" }}>
            <TableRow>
              {[
                "Transaction",
                "Customer",
                "Amount",
                "Method",
                "Status",
                "Actions",
              ].map((head) => (
                <TableCell
                  key={head}
                  sx={{ color: "#9CA3AF", fontWeight: 600 }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody sx={{ height: "100px" }}>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  borderBottom: "1px solid #423A53",
                  height: "100px",
                  "&:hover": { backgroundColor: "#31284B" },
                }}
              >
                {/* Transaction */}
                <TableCell>
                  <Typography color="white" fontWeight={600}>
                    {row.id}
                  </Typography>
                  <Typography fontSize="12px" color="#94A3B8">
                    {row.date} • {row.time}
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
                      {row.initials}
                    </Box>
                    <Typography color="white" fontWeight={600}>
                      {row.customer}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell sx={{ color: "#31C894", fontWeight: 600 }}>
                  {row.amount}
                </TableCell>

                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: "#31284B",
                      px: 2,
                      py: 0.5,
                      borderRadius: "999px",
                      display: "inline-block",
                      color: "#B7B9FF",
                      fontSize: "13px",
                    }}
                  >
                    {row.method}
                  </Box>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor:
                        row.status === "success" ? "#1F3D36" : "#3A2F1F",
                      color: row.status === "success" ? "#31C894" : "#FACC15",
                      px: 2,
                      py: 0.5,
                      borderRadius: "999px",
                      fontSize: "13px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    ● {row.status}
                  </Box>
                </TableCell>

                {/* Actions */}
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
                    <VisibilityOffOutlinedIcon sx={{ color: "white" }} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LastPaymentTable;
