import { Typography } from "@mui/material";

const ProductStatus = ({ status }) => {
  let bgColor;
  let textColor;
  switch (status) {
    case "In Stock":
      bgColor = "rgba(40, 167, 69, 0.15)";
      textColor = "#28A745";
      break;
    case "Low Stock":
      bgColor = "rgba(255, 193, 7, 0.15)";
      textColor = "#FFC107";
      break;
    case "Out of Stock":
      bgColor = "rgba(220, 53, 69, 0.15)";
      textColor = "#DC3545";
      break;
  }
  const Status = [
    "In Stock",
    "Low Stock",
    "In Stock",
    "Out of Stock",
    "In Stock",
  ];
  return (
    <Typography sx={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}>
      {Status.map((status) => ({ status }))}
    </Typography>
  );
};
export default ProductStatus;
