import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// Keeping your preferred createRow structure
const createRow = (
  id,
  name,
  email,
  country,
  location,
  orders,
  spent,
  tier,
) => ({
  id,
  name,
  email,
  country,
  location,
  orders,
  spent,
  tier,
});

const rows = [
  createRow(
    "SJ",
    "Sarah Johnson",
    "sarah.j@email.com",
    "US",
    "New York, USA",
    24,
    "$12,450",
    "VIP",
  ),
  createRow(
    "MC",
    "Michael Chen",
    "m.chen@email.com",
    "CA",
    "Toronto, Canada",
    18,
    "$10,280",
    "VIP",
  ),
  createRow(
    "EB",
    "Emma Brown",
    "emma.b@email.com",
    "GB",
    "London, UK",
    16,
    "$9,640",
    "Premium",
  ),
  createRow(
    "DW",
    "David Wilson",
    "d.wilson@email.com",
    "AU",
    "Sydney, Australia",
    15,
    "$8,920",
    "Premium",
  ),
  createRow(
    "OM",
    "Olivia Martinez",
    "o.martinez@email.com",
    "ES",
    "Barcelona, Spain",
    12,
    "$7,850",
    "Regular",
  ),
  createRow(
    "JD",
    "James Davis",
    "james.d@email.com",
    "US",
    "Los Angeles, USA",
    8,
    "$5,240",
    "Regular",
  ),
];

const CustomerTable = () => {
  const getTierColor = (tier) => {
    if (tier === "VIP") return "#FFB547";
    if (tier === "Premium") return "#A389F4";
    return "#6B7AFF";
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#25253F",
        borderRadius: "12px",
        width: "980px",
        boxShadow: "none",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {[
              "CUSTOMER",
              "EMAIL",
              "LOCATION",
              "ORDERS",
              "TOTAL SPENT",
              "TIER",
              "ACTIONS",
            ].map((header) => (
              <TableCell
                key={header}
                sx={{
                  color: "#6C6B80",
                  fontWeight: 700,
                  fontSize: "12px",
                  borderBottom: "1px solid #2D2A4A",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:hover": { backgroundColor: "#251F3D" } }}
            >
              {/* Customer Column */}
              <TableCell sx={{ borderBottom: "1px solid #2D2A4A" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#5C59F1",
                      width: 35,
                      height: 35,
                      fontSize: "14px",
                    }}
                  >
                    {row.id}
                  </Avatar>
                  <Typography sx={{ color: "white", fontWeight: 600 }}>
                    {row.name}
                  </Typography>
                </Box>
              </TableCell>

              {/* Email Column */}
              <TableCell
                sx={{ color: "#A6B0CF", borderBottom: "1px solid #2D2A4A" }}
              >
                {row.email}
              </TableCell>

              {/* Location Column */}
              <TableCell sx={{ borderBottom: "1px solid #2D2A4A" }}>
                <Typography
                  component="span"
                  sx={{ color: "#6C6B80", fontSize: "12px", mr: 1 }}
                >
                  {row.country}
                </Typography>
                <Typography component="span" sx={{ color: "white" }}>
                  {row.location}
                </Typography>
              </TableCell>

              {/* Orders Column */}
              <TableCell
                sx={{ color: "white", borderBottom: "1px solid #2D2A4A" }}
              >
                {row.orders}
              </TableCell>

              {/* Total Spent Column */}
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  borderBottom: "1px solid #2D2A4A",
                }}
              >
                {row.spent}
              </TableCell>

              {/* Tier Column */}
              <TableCell sx={{ borderBottom: "1px solid #2D2A4A" }}>
                <Box
                  sx={{
                    color: getTierColor(row.tier),
                    backgroundColor: `${getTierColor(row.tier)}15`, // 15 is transparency
                    padding: "4px 12px",
                    borderRadius: "20px",
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {row.tier}
                </Box>
              </TableCell>

              {/* Actions Column */}
              <TableCell sx={{ borderBottom: "1px solid #2D2A4A" }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    size="small"
                    sx={{
                      color: "#6C6B80",
                      border: "1px solid #2D2A4A",
                      borderRadius: "8px",
                    }}
                  >
                    <VisibilityOutlinedIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      color: "#6C6B80",
                      border: "1px solid #2D2A4A",
                      borderRadius: "8px",
                    }}
                  >
                    <MailOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
