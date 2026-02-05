import "./App.css";
import { Box } from "@mui/material";
import AppRoutes from "./routes/routes.jsx";

function App() {
  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
      }}
    >
      <AppRoutes />
    </Box>
  );
}

export default App;
