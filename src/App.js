import * as React from "react";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@/themes";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material";
import { ToastContainer } from "material-react-toastify";
import rootRoutes from "@/router";
function App() {
  const theme = useTheme();
  return (
    <ThemeProvider>
      <CssBaseline />
      <ToastContainer/>
      <RouterProvider router={rootRoutes} />
    </ThemeProvider>
  );
}

export default App;
