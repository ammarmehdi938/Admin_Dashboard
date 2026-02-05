import { Button, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AnalyticTableHeader from "./analyticTableHeader";

const CreateData = (PRODUCT, CATEGORY, REVENUE, GROWTH, TREND) => {
  (PRODUCT, CATEGORY, REVENUE, GROWTH, TREND);
};
const AnalyticTable = () => {
  const firstRow = [
    CreateData(
      <Box>
        <Typography>Premium Silk Blouse</Typography>
        <Typography>Women's Fashion</Typography>
        <Typography>$24,580</Typography>
        <Typography sx={{ color: "#32C28E" }}>+18.2%</Typography>
        <Typography>Premium Silk Blouse</Typography>
      </Box>,
    ),
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#2A294A",
        height: "100px",
      }}
    >
      <Box sx={{ paddingTop: "20px" }}>
        <AnalyticTableHeader />
      </Box>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#2A213D", color: "white", boxShadow: "none" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "#31284B",
              color: " #627289",
            }}
          >
            <TableRow>
              <TableCell sx={{ color: "#606F86", fontWeight: "600" }}>
                Product
              </TableCell>
              <TableCell sx={{ color: "#606F86", fontWeight: "600" }}>
                Category
              </TableCell>
              <TableCell sx={{ color: "#606F86", fontWeight: "600" }}>
                Revenue
              </TableCell>
              <TableCell sx={{ color: "#606F86", fontWeight: "600" }}>
                Stock
              </TableCell>
              <TableCell sx={{ color: "#606F86", fontWeight: "600" }}>
                Growth
              </TableCell>
              <TableCell sx={{ color: "#606F86", fontWeight: "600" }}>
                Trend
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              height: "120px",
              borderBottom: "1px solid #423A53",
              "&:hover": {
                backgroundColor: "#31284B",
                color: "red",
              },
            }}
          >
            {firstRow.map((row) => (
              <TableRow
                key={row.product}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.PRODUCT}
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "600" }}>
                  {row.CATEGORY}
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "600" }}>
                  {row.REVENUE}
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "600" }}>
                  {row.GROWTH}
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "600" }}>
                  {row.TREND}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AnalyticTable;
