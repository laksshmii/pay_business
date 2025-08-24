import React, { useState } from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
  IconButton,
  colors,
  Toolbar,
} from "@mui/material";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  QuestionMark as QuestionMarkIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
  ChevronRight as Rightarrow,
  ChevronLeft as Leftarrow,
  BuildOutlined,
  Diversity1Outlined,
  SmsOutlined,
  ThreePOutlined,
  ContactMailOutlined,
  SocialDistanceOutlined,
  MultipleStopOutlined,
  NextPlanOutlined,
  CalendarMonthOutlined,
  DescriptionOutlined,
  HolidayVillage as HolidayVillageIcon,
} from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import ModalWrapper from "@/components/forms/ModalWrapper";
import { type } from "@testing-library/user-event/dist/type";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "black",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "black",
    borderRadius: 0,
    maxWidth: "70px",
    whiteSpace: "normal",
    wordWrap: "break-word",
    textAlign: "center",
    padding: 5,
  },
}));

const DrawerComponent = ({
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
  container,
}) => {
  const location = useLocation(); // Get the current location
  const drawerWidth = 200;
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [submenutitle, setSubMenuTitle] = useState("");
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenuClick = (menu, submenu, title) => {
    setSelectedMenu(menu);
    setSubMenuTitle(title);
    setSubMenuOpen(submenu);
  };
  const handleOpenModal = (row = null) => {
    setOpen(true);
  };

  const handleSubMenuClose = () => {
    setSubMenuOpen(false);
    setSelectedMenu([]);
  };

  const fields = [
    {
      name: 'fromRange',
      label: 'Ticket Raised For',
      type: 'select',
      required: true,
      options: [
        { value: 'doc1', label: 'Document 1' },
        { value: 'doc2', label: 'Document 2' }
      ],
      placeholder: "Select Raised For"

    },
    {
      name: 'fromRange',
      label: 'Category',
      type: 'select',
      required: true,
      options: [
        { value: 'doc1', label: 'Document 1' },
        { value: 'doc2', label: 'Document 2' }
      ],
      placeholder: "Select Raised For"

    },

    {
      name: "reason",
      label: "Reason",
      type: "textArea",
      required: true,
      placeholder: "Enter Reason"
    },
    {
      name: "file",
      label: "File Upload",
      type: "file",
      required: false,
      placeholder: "Add Attachment"
    }
  ];
  const initialValues = {
    name: '',
  };
  const menuItems = [

    {
      text: "Home",
      path: "/dashboard",
      icon: <BuildOutlined />,

    },
    {
      text: "Home",
      path: "/manageQr",
      icon: <BuildOutlined />,

    },
    {
      text: "Home",
      path: "/profile",
      icon: <BuildOutlined />,
    },
    {
      text: "Home",
      path: "/history",
      icon: <BuildOutlined />,
    }





  ];

  const mainDrawer = (

    <Box
      sx={(theme) => {
        return {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: theme.palette.gradient.primary,
          borderTopRightRadius: "60px",
          overflow: "hidden",
        };
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <img
          src=""
          alt="Sidebar Logo"
          style={{ height: "48px", width: "56px" }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <List>
          {menuItems.map((item, index) => {
            const { text, path, submenu, icon } = item;
            const hasSubmenu = submenu?.length > 0;
            return (
              <ListItem key={index}>
                <ListItemButton
                  component={Link}
                  to={path}
                  // onClick={(e) => {
                  //   if (hasSubmenu) {
                  //     // e.preventDefault();
                  //     handleMenuClick(submenu, hasSubmenu, text);
                  //   } else {
                  //     handleMenuClick([], hasSubmenu, text);
                  //   }
                  // }}
                  sx={{
                    backgroundColor:
                      location.pathname === path ||
                        submenu?.some((sub) =>
                          sub.child.some(
                            (child) => child.path === location.pathname
                          )
                        )
                        ? "white"
                        : "transparent",
                    borderBottomRightRadius:
                      location.pathname === path ||
                        submenu?.some((sub) =>
                          sub.child.some(
                            (child) => child.path === location.pathname
                          )
                        )
                        ? "12px"
                        : "0px",
                    borderTopRightRadius:
                      location.pathname === path ||
                        submenu?.some((sub) =>
                          sub.child.some(
                            (child) => child.path === location.pathname
                          )
                        )
                        ? "12px"
                        : "0px",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    "&:hover": {
                      backgroundColor:
                        location.pathname === path ||
                          submenu?.some((sub) =>
                            sub.child.some(
                              (child) => child.path === location.pathname
                            )
                          )
                          ? "white"
                          : "transparent",
                      opacity: 1,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        location.pathname === path ||
                          submenu?.some((sub) =>
                            sub.child.some(
                              (child) => child.path === location.pathname
                            )
                          )
                          ? "black"
                          : "white",
                      minWidth: 0,
                    }}
                  >
                    <BootstrapTooltip title={text}>{text}</BootstrapTooltip>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "175px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          backgroundImage: `url()`,
          backgroundSize: "100% 105%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          padding={1}
          paddingBottom={2}
          paddingTop="12px"
          borderRadius={5}
          spacing={2}
          height="104px"
          sx={{ backgroundColor: "white", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "7px solid #214a32",
              backgroundColor: "transparent",
            }}
          >
            <QuestionMarkIcon onClick={() => setOpen(true)} sx={{ fontSize: "16px" }} />
          </Box>
          <LogoutIcon sx={{ fontSize: "20px" }} />
        </Stack>
      </Box>

    </Box>


  );

  return (
    <>
      <ModalWrapper
        open={open}
        handleClose={() => setOpen(false)}
        initialValues={initialValues}
        fields={fields}
        label={"Help Desk"}
      />

      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {mainDrawer}
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "100vh",
            overflow: "hidden",
            borderRight: "0px",
            backgroundColor: "#FDF9F6",
          },
        }}
        open
      >
        {mainDrawer}
      </Drawer>

    </>
  );
};

export default DrawerComponent;
