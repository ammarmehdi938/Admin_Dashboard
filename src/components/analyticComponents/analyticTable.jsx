import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AnalyticTableHeader from "./analyticTableHeader";

const createRow = (product, category, revenue, growth, trend) => ({
  product,
  category,
  revenue,
  growth,
  trend,
});

const rows = [
  createRow(
    "Premium Silk Blouse",
    "Women's Fashion",
    "$24,580",
    "+18.2%",
    <ShoppingBagOutlinedIcon sx={{ color: "#32C28E" }} />,
  ),
  createRow(
    "Leather Handbag",
    "Accessories",
    "$18,120",
    "+12.5%",
    <ShoppingBagOutlinedIcon sx={{ color: "#FFC107" }} />,
  ),
  createRow(
    "Men’s Formal Shoes",
    "Footwear",
    "$32,940",
    "-4.3%",
    <ShoppingBagOutlinedIcon sx={{ color: "#F44336" }} />,
  ),
];

const AnalyticTable = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2A294A",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <AnalyticTableHeader />

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#2A213D",
          boxShadow: "none",
          marginTop: "20px",
        }}
      >
        <Table aria-label="analytics table">
          <TableHead sx={{ backgroundColor: "#302E58" }}>
            <TableRow>
              {["Product", "Category", "Revenue", "Growth", "Trend"].map(
                (heading) => (
                  <TableCell
                    key={heading}
                    sx={{
                      color: "#606F86",
                      fontWeight: 600,
                      borderBottom: "1px solid #423A53",
                    }}
                  >
                    {heading}
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": {
                    backgroundColor: "#302E58",
                  },
                }}
              >
                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  {row.product}
                </TableCell>

                <TableCell sx={{ color: "#A6B0CF" }}>{row.category}</TableCell>

                <TableCell sx={{ color: "white", fontWeight: 600 }}>
                  {row.revenue}
                </TableCell>

                <TableCell
                  sx={{
                    color: row.growth.startsWith("-") ? "#F44336" : "#32C28E",
                    fontWeight: 600,
                  }}
                >
                  {row.growth}
                </TableCell>

                <TableCell>{row.trend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AnalyticTable;
