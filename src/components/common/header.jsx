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
      zIndex:2
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

      <Box
        sx={{
          padding: '2px',
          borderRadius: '32px',
          background: 'linear-gradient(270deg, #FFE9DA 0%, #FFFFFF 100%)',
          display: 'flex',
          alignItems: 'center',
          mr: 2,
        }}
      >
        <Typography
          sx={{
            borderRadius: '32px',
            display: { xs: 'block', md: 'block' },
            backgroundColor: '#FDF9F6',
            alignContent: "center",
            px: 3,
            paddingY: "8px",
            color: "#214A32",

          }}
          variant="h6"
          noWrap
        >
          Cavin Infotech
        </Typography>
      </Box>
      <Box sx={{  display: { xs: "none", md: "flex" } }}>


        <TextField
          id="input-with-icon-textfield"
          size="small"
          placeholder="Search...."
         
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: '32px',
            justifyContent: 'center',
            '& .MuiOutlinedInput-root': {
              borderRadius: '32px',
              border: '1px solid #E9E9E9',
              backgroundColor: '#FAFAFA',
              padding: '0px',
              height: '32px',
              '& input': {

              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E9E9E9',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '32px',
              borderColor: "#E9E9E9",
            },

          }}
        />
      </Box>

     
      {/* <Box 
        sx={{ 
          border: '3px solid white',
          display:'flex', 
          borderRadius: '32px',
          // background: 'linear-gradient(135deg, #FF6B6B, #FFD93D)',
          background: 'linear-gradient(135deg, #FFE9DA, #FFFFFF)',
          backgroundClip: 'border-box'
        }}
      >  
        <Typography sx={{ borderRadius: '32px', alignContent: 'center',display:{xs:'block',md:'block'}, paddingX:'12px'}} variant="h6" noWrap > User Name </Typography>
        <IconButton sx={{p:0}}>
          <Avatar sx={{}} src={profile}></Avatar>

        </IconButton>
      </Box>  */}
      <Box sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          }}>
             <Box   sx={{ display: { xs: "none", md: "flex" },  }}>
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
            User Name
          </Typography>
          <IconButton sx={{ p: 0 }}>
            <Avatar src={profile} />
          </IconButton>
        </Box>
      </Box>

      </Box>
     



    </Box>
  </AppBar>
);

export default AppBarComponent;
