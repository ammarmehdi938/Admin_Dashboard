import { Box, Divider, Typography, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const AllProducts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          height: "570px",
          width: "400px",
          backgroundColor: "#202038",
          borderRadius: "20px",
          border: "1px solid #4B465D",
          mb: "20px",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#5F51C8",
            height: "50%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#F0ECFE",
              fontWeight: "bolder",
            }}
          >
            SB
          </Typography>
        </Box>
        <Box sx={{ mt: "20px", ml: "10px" }}>
          <Typography sx={{ color: "#56637A" }}>Women's Fashion</Typography>
          <Typography sx={{ color: "#F0ECFE" }}>Premium Silk Blouse</Typography>
          <Typography sx={{ color: "#56637A" }}>SKU: PRD-2845</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#403A50",
            width: "90%",
            ml: "5%",
            mt: "20px",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: "20px",
            mt: "20px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#56637A" }}>Price</Typography>
            <Typography>$156</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#56637A" }}>Stock</Typography>
            <Typography>89 units</Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 4, mt: "20px" }}
        >
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <VisibilityOutlinedIcon />
              View
            </Typography>
          </Button>
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EditOutlinedIcon />
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "570px",
          width: "400px",
          backgroundColor: "#202038",
          borderRadius: "20px",
          border: "1px solid #4B465D",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#5F51C8",
            height: "50%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#F0ECFE",
              fontWeight: "bolder",
            }}
          >
            SB
          </Typography>
        </Box>
        <Box sx={{ mt: "20px", ml: "10px" }}>
          <Typography sx={{ color: "#56637A" }}>Women's Fashion</Typography>
          <Typography sx={{ color: "#F0ECFE" }}>Premium Silk Blouse</Typography>
          <Typography sx={{ color: "#56637A" }}>SKU: PRD-2845</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#403A50",
            width: "90%",
            ml: "5%",
            mt: "20px",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: "20px",
            mt: "20px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#56637A" }}>Price</Typography>
            <Typography>$156</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#56637A" }}>Stock</Typography>
            <Typography>89 units</Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 4, mt: "20px" }}
        >
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <VisibilityOutlinedIcon />
              View
            </Typography>
          </Button>
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EditOutlinedIcon />
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "570px",
          width: "400px",
          backgroundColor: "#202038",
          borderRadius: "20px",
          border: "1px solid #4B465D",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#5F51C8",
            height: "50%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#F0ECFE",
              fontWeight: "bolder",
            }}
          >
            SB
          </Typography>
        </Box>
        <Box sx={{ mt: "20px", ml: "10px" }}>
          <Typography sx={{ color: "#56637A" }}>Women's Fashion</Typography>
          <Typography sx={{ color: "#F0ECFE" }}>Premium Silk Blouse</Typography>
          <Typography sx={{ color: "#56637A" }}>SKU: PRD-2845</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#403A50",
            width: "90%",
            ml: "5%",
            mt: "20px",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: "20px",
            mt: "20px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#56637A" }}>Price</Typography>
            <Typography>$156</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#56637A" }}>Stock</Typography>
            <Typography>89 units</Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 4, mt: "20px" }}
        >
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <VisibilityOutlinedIcon />
              View
            </Typography>
          </Button>
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EditOutlinedIcon />
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: "570px",
          width: "400px",
          backgroundColor: "#202038",
          borderRadius: "20px",
          border: "1px solid #4B465D",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#5F51C8",
            height: "50%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#F0ECFE",
              fontWeight: "bolder",
            }}
          >
            SB
          </Typography>
        </Box>
        <Box sx={{ mt: "20px", ml: "10px" }}>
          <Typography sx={{ color: "#56637A" }}>Women's Fashion</Typography>
          <Typography sx={{ color: "#F0ECFE" }}>Premium Silk Blouse</Typography>
          <Typography sx={{ color: "#56637A" }}>SKU: PRD-2845</Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#403A50",
            width: "90%",
            ml: "5%",
            mt: "20px",
          }}
        ></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: "20px",
            mt: "20px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#56637A" }}>Price</Typography>
            <Typography>$156</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#56637A" }}>Stock</Typography>
            <Typography>89 units</Typography>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 4, mt: "20px" }}
        >
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <VisibilityOutlinedIcon />
              View
            </Typography>
          </Button>
          <Button
            sx={{
              width: "35%",
              border: "1px solid #4B465D",
              borderRadius: "10px",
              backgroundColor: "#39304C",
              color: "#F0ECFE",
              "&:hover": {
                backgroundColor: "#5F51C8",
              },
            }}
          >
            <Typography
              sx={{
                color: "#F0ECFE",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <EditOutlinedIcon />
              Edit
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default AllProducts;
