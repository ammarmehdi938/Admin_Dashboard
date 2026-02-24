import {
  Box,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { SignUpValidationSchema } from "../schema/validationSchema";
import { useNavigate } from "react-router-dom";
import api from "../axios/axios";

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const payload = {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        };

        await api.post("/users", payload);

        navigate("/login");
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            setErrors({ email: "Email already registered" });
          } else {
            setErrors({ apiError: "Signup failed. Try again." });
          }
        } else {
          setErrors({ apiError: "Network error. Try again." });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });
  const textFieldStyles = {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
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
        boxShadow: "0 0 0 1px rgba(117, 98, 243, 0.4)",
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
        backgroundColor: "#131426",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#282949",
          width: "420px",
          borderRadius: "15px",
          border: "1px solid #3F405D",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          pt: "50px",
          "&:hover": {
            borderColor: "#7562F3",
            boxShadow: "0 10px 30px rgba(117, 98, 243, 0.25)",
          },
        }}
      >
        <Typography
          variant="h4"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#D2C3FD", mb: "20px" }}
        >
          Atelier
        </Typography>
        <Typography
          variant="h5"
          fontFamily="'Playfair Display', serif"
          sx={{ color: "#F8FAFC", fontWeight: "bold" }}
        >
          Create your account
        </Typography>
        <Typography sx={{ color: "#C2CBD8" }}>
          Start managing your e-commerce business today
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
            Current Password
          </Typography>
          <TextField
            fullWidth
            name="fullName"
            label="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
            Email Address
          </Typography>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
            password
          </Typography>
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Typography sx={{ color: "#F3F5F8", fontWeight: "bold", mb: 1 }}>
            Confirm password
          </Typography>
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
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
          />

          <FormControlLabel
            sx={{ display: "flex" }}
            control={
              <Checkbox
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
                sx={{
                  color: "#9CA3AF",
                  "&.Mui-checked": {
                    color: "#7562F3",
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "#C2CBD8", fontSize: "14px" }}>
                I agree to the Terms of Service and Privacy Policy
              </Typography>
            }
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#6864F1",
              width: "100%",
              height: "50px",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ color: "#F3F5F8", fontWeight: "bold" }}>
              Create Account
            </Typography>
          </Button>
        </Box>
        <Typography>
          Already have an account?{" "}
          <Typography
            component="span"
            sx={{
              color: "#7562F3",
              cursor: "pointer",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => navigate("/login")}
          >
            Sign in
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
