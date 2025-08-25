import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  SvgIcon,
  Avatar,
  Chip,
  InputBase,
  TextField, InputAdornment
} from "@mui/material";
import {
  Menu as MenuIcon,
  GppGoodOutlined as GppGoodOutlinedIcon,
  DashboardOutlined as DashboardOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  Height, Search as SearchIcon
} from '@mui/icons-material';
import profile from '../../assets/img/profile.png';
import { styled, alpha } from '@mui/material/styles';


const drawerWidth = 200;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "#E9E9E9",
  border: "1px solid black",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    margin: "-4px",
  },
}));

const AppBarComponent = ({ handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - (${drawerWidth}px + 44px))` },
      marginTop: "10px",
      marginRight: { xs: 0, sm: "24px" },
      borderRadius: 30,
      height: "48px",
      backgroundColor: "white",
      color: "black",
      zIndex: 2
    }}
  >
    <Box sx={{ padding: 0, display: "flex" }}>
      <IconButton
        color="default"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>





      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        <Box sx={{ display: { xs: "none", md: "flex" }, }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <GppGoodOutlinedIcon />
          </IconButton>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <DashboardOutlinedIcon />
          </IconButton>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
          {/* <Typography sx={{ border: '3px solid black', borderRadius: '32px', alignContent: 'center',p:1 }} variant="h6" noWrap > User Name </Typography> */}
        </Box>
        <Box
          sx={{
            padding: '2px',
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #FFE9DA, #FFFFFF)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '29px',
              backgroundColor: 'white',
              padding: '2px',

            }}
          >
            <IconButton sx={{ p: 0 }}>
              <Avatar src={profile} />
            </IconButton>
            <Typography
              sx={{
                borderRadius: '32px',
                alignContent: 'center',
                display: { xs: 'block', md: 'block' },
                paddingX: '12px',
              }}
              variant="h6"
              noWrap
            >
              Thomas Shelby
            </Typography>

          </Box>
        </Box>

      </Box>




    </Box>
  </AppBar>
);

export default AppBarComponent;
