import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBarComponent from "./header";
import DrawerComponent from "./sidebar";

import { Outlet,useRouteError} from "react-router-dom";
import ErrorPage from "@/components/Error/ErrorPage";
// import WorkLocation from "../../pages/master/workLocation/index"
// import RoleOfIntake from "../../pages/master/roleOfIntake/index"
// import Department from "../../pages/master/department/index"
// import Designation from "../../pages/master/designation/index"
// import Document from "../../pages/master/document/index"
// import Employee from "../../pages/master/employee/index"
// import EmployeeType from "../../pages/master/employeeType/index"

const drawerWidth = 200;

const ResponsiveDrawer = (props) => {


  const error = useRouteError();
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
      {window ? (
        <DrawerComponent
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          container={container}
        />
      ) : (
        <DrawerComponent
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          container={container}
        />
      )}
      <Box
        component="main"
        // position=""
        mt={6}
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >
       
        <Box>
          {error? <ErrorPage />:<Outlet/>}
        </Box>
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
