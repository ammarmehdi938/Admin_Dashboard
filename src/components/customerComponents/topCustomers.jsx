import { Box, Typography, Avatar, Divider } from "@mui/material";
import TopCustomerHeader from "./topCustomerHeader";

const Row = ({ initials, name, email, amount, orders }) => (
  <>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: "#7562F3",
            width: 44,
            height: 44,
            fontWeight: 600,
            fontSize: "14px",
            borderRadius: "10px",
          }}
        >
          {initials}
        </Avatar>

        <Box>
          <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography
            sx={{
              color: "#A7AFBF",
              fontSize: "13px",
            }}
          >
            {email}
          </Typography>
        </Box>
      </Box>

      <Box textAlign="right">
        <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>
          {amount}
        </Typography>
        <Typography
          sx={{
            color: "#A7AFBF",
            fontSize: "13px",
          }}
        >
          {orders}
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ borderColor: "#423A53" }} />
  </>
);

const TopCustomers = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C2643",
        width: 450,
        borderRadius: "20px",
        border: "1px solid #423A53",
        px: 3,
        py: 2,
        "&:hover": {
          borderColor: "#7562F3",
          boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
        },
      }}
    >
      <TopCustomerHeader />

      <Box mt={2}>
        <Row
          initials="SJ"
          name="Sarah Johnson"
          email="sarah.j@email.com"
          amount="$12,450"
          orders="24 orders"
        />

        <Row
          initials="MC"
          name="Michael Chen"
          email="m.chen@email.com"
          amount="$10,280"
          orders="18 orders"
        />

        <Row
          initials="EB"
          name="Emma Brown"
          email="emma.b@email.com"
          amount="$9,640"
          orders="16 orders"
        />

        <Row
          initials="DW"
          name="David Wilson"
          email="d.wilson@email.com"
          amount="$8,920"
          orders="15 orders"
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "#7562F3",
                width: 44,
                height: 44,
                fontWeight: 600,
                fontSize: "14px",
                borderRadius: "10px",
              }}
            >
              OM
            </Avatar>

            <Box>
              <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>
                Olivia Martinez
              </Typography>
              <Typography sx={{ color: "#A7AFBF", fontSize: "13px" }}>
                o.martinez@email.com
              </Typography>
            </Box>
          </Box>

          <Box textAlign="right">
            <Typography sx={{ color: "#F8FAFC", fontWeight: 600 }}>
              $7,850
            </Typography>
            <Typography sx={{ color: "#A7AFBF", fontSize: "13px" }}>
              12 orders
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopCustomers;
