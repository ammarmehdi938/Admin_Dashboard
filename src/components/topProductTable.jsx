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

const createData = (product, Category, Price, Stock, Status, Actions) => {
  return { product, Category, Price, Stock, Status, Actions };
};

const TopProductTable = () => {
  const rows = [
    createData(
      "Premium silk boluse",
      "Womens Fashion",
      "$245",
      " 342 units",
      <Box
        sx={{
          backgroundColor: "rgba(52, 211, 153, 0.15)",
          color: "#319E56",
          height: "50px",
          width: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        In <br /> Stock
      </Box>,
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(117, 98, 243, 0.15)",
            border: "1px solid #423A53",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "#7462F3",
            },
          }}
        >
          <EditOutlinedIcon
            sx={{ cursor: "pointer", color: "#ffffff", fontWeight: "normal" }}
          />
        </Box>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(117, 98, 243, 0.15)",
            border: "1px solid #423A53",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "#7462F3",
            },
          }}
        >
          <VisibilityOffOutlinedIcon
            sx={{ cursor: "pointer", color: "#ffffff", fontWeight: "normal" }}
          />
        </Box>
      </Box>,
    ),
  ];
  const rowNoTwo = [
    createData(
      "Premium silk boluse",
      "Womens Fashion",
      "$245",
      " 342 units",
      <Box
        sx={{
          backgroundColor: "rgba(52, 211, 153, 0.15)",
          color: "#319E56",
          height: "50px",
          width: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        Low <br /> Stock
      </Box>,
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            backgroundColor: "rgba(117, 98, 243, 0.15)",
            border: "1px solid #423A53",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "#7462F3",
            },
          }}
        >
          <EditOutlinedIcon
            sx={{ cursor: "pointer", color: "#ffffff", fontWeight: "normal" }}
          />
        </Box>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: "rgba(117, 98, 243, 0.15)",
            border: "1px solid #423A53",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "#7462F3",
            },
          }}
        >
          <VisibilityOffOutlinedIcon
            sx={{ cursor: "pointer", color: "#ffffff", fontWeight: "normal" }}
          />
        </Box>
      </Box>,
    ),
  ];
  const rowNoThree = [
    createData(
      "Premium silk boluse",
      "Womens Fashion",
      "$245",
      " 342 units",
      <Box
        sx={{
          backgroundColor: "rgba(52, 211, 153, 0.15)",
          color: "#319E56",
          height: "50px",
          width: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        Out of <br /> Stock
      </Box>,
      <Box sx={{ display: "flex", gap: "8px" }}>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(117, 98, 243, 0.15)",
            border: "1px solid #423A53",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "#7462F3",
            },
          }}
        >
          <EditOutlinedIcon
            sx={{ cursor: "pointer", color: "#ffffff", fontWeight: "normal" }}
          />
        </Box>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(117, 98, 243, 0.15)",
            border: "1px solid #423A53",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "#7462F3",
            },
          }}
        >
          <VisibilityOffOutlinedIcon
            sx={{ cursor: "pointer", color: "#ffffff", fontWeight: "normal" }}
          />
        </Box>
      </Box>,
    ),
  ];

  return (
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
            <TableCell sx={{ color: "white", fontWeight: "600" }}>
              Product
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "600" }}>
              Category
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "600" }}>
              Price
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "600" }}>
              Stock
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "600" }}>
              Status
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "600" }}>
              Actions
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
          {rows.map((row) => (
            <TableRow
              key={row.product}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Category}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Price}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Stock}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Status}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Actions}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody
          sx={{
            height: "120px",
            "&:hover": {
              backgroundColor: "#31284B",
            },
          }}
        >
          {rowNoTwo.map((row) => (
            <TableRow
              key={row.product}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Category}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Price}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Stock}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Status}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Actions}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody
          sx={{
            height: "120px",
            "&:hover": {
              backgroundColor: "#31284B",
            },
          }}
        >
          {rowNoThree.map((row) => (
            <TableRow
              key={row.product}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Category}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Price}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Stock}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Status}
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "600" }}>
                {row.Actions}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopProductTable;
