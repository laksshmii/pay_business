// ResponsiveDrawer.js
import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBarComponent from "../components/common/header";
import DrawerComponent from "../components/common/sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = 92;
const appBarHeight = 64; // Assuming the AppBar height is 64px

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerTransitionEnd = () => {
    if (isClosing) {
      setIsClosing(false);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <DrawerComponent
      mobileOpen={mobileOpen}
      handleDrawerClose={handleDrawerClose}
      handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      container={container}
    />
  );

  return (
    <>
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
      {drawer}
      <Box
        component="main"
        sx={{
          width: { sm: `calc(100% - (${drawerWidth}px + 44px))` },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
