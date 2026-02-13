import { Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Reset email:", values.email);
    },
  });

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#2E2F4F",
      color: "#F3F5F8",

      "& fieldset": {
        borderColor: "#3F405D",
      },
      "&:hover fieldset": {
        borderColor: "#7562F3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#7562F3",
        boxShadow: "0 0 0 1px rgba(117,98,243,.4)",
      },
    },
    "& input::placeholder": {
      color: "#9CA3AF",
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#131426",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "420px",
          backgroundColor: "#1F203A",
          borderRadius: "20px",
          border: "1px solid #3F405D",
          px: 4,
          py: 5,
          textAlign: "center",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 20px 40px rgba(117,98,243,.25)",
          },
        }}
      >
        {/* Brand */}
        <Typography
          variant="h4"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#D2C3FD", mb: 3 }}
        >
          Atelier
        </Typography>

        {/* Icon */}
        <Box
          sx={{
            mx: "auto",
            mb: 3,
            height: 72,
            width: 72,
            borderRadius: "20px",
            backgroundColor: "#6864F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 42, color: "#fff" }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{ color: "#F3F5F8", fontWeight: 700, mb: 1 }}
        >
          Reset your password
        </Typography>

        <Typography sx={{ color: "#9CA3AF", fontSize: 14, mb: 4 }}>
          Enter your email address and we’ll send you a link to reset your
          password
        </Typography>

        {/* Form */}
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Typography
            sx={{
              textAlign: "left",
              color: "#F3F5F8",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Email Address
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={textFieldStyles}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              height: 52,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #7562F3, #6864F1)",
              fontWeight: 700,
              textTransform: "none",
              color: "#F3F5F8",
              "&:hover": {
                background: "linear-gradient(135deg, #8674FF, #7562F3)",
              },
            }}
          >
            Send Reset Link
          </Button>
        </Box>

        <Typography
          sx={{
            mt: 3,
            color: "#FFFFFF",
            fontSize: 14,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Remember your password?{" "}
          <Box
            sx={{
              color: "#7562F3",
              cursor: "pointer",
              fontWeight: 600,
            }}
            onClick={() => navigate("/login")}
          >
            Sign in
          </Box>
        </Typography>
        <Typography onClick={() => navigate("/confirmPassword")}>
          confirmPassword
        </Typography>
      </Box>
    </Box>
  );
};

export default ResetPassword;
