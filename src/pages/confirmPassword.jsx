import { Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";

const ConfirmPassword = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Must include uppercase, lowercase, number & special character",
      ),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("New password:", values.password);
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
        // minHeight: "100vh",
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
        <Typography
          variant="h4"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#D2C3FD", mb: 3 }}
        >
          Atelier
        </Typography>

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
          <KeyOutlinedIcon sx={{ fontSize: 42, color: "#fff" }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{ color: "#F3F5F8", fontWeight: 700, mb: 1 }}
        >
          Set new password
        </Typography>

        <Typography sx={{ color: "#9CA3AF", fontSize: 14, mb: 4 }}>
          Create a strong password to secure your account password
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit}>
          <Typography
            sx={{
              textAlign: "left",
              color: "#F3F5F8",
              fontWeight: 600,
              mb: 1,
            }}
          >
            New Password
          </Typography>

          <TextField
            fullWidth
            type="password"
            placeholder="Enter new password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={textFieldStyles}
          />

          <Typography
            sx={{
              textAlign: "left",
              color: "#F3F5F8",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Confirm New Password
          </Typography>

          <TextField
            fullWidth
            type="password"
            placeholder="Confirm new password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
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
      </Box>
    </Box>
  );
};

export default ConfirmPassword;
