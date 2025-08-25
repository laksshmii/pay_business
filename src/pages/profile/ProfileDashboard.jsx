import React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Avatar,
  styled,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  AccountBalanceOutlined,
  SpeakerOutlined,
  PointOfSaleOutlined,
  SettingsOutlined,
  PeopleOutlined,
  LanguageOutlined,
  ChevronRight,
} from "@mui/icons-material";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import profilLogo from '../../assets/img/profile_logo.png';

const GradientBox = styled(Box)(({ theme }) => ({
  width: "70%",
  background: "linear-gradient(90deg, #42794A 0%, #61CE70 100%)",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(4),
  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    width: "100%",
    clipPath: "none",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "50%",
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: theme.spacing(3),
  },
}));

const InfoCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "12px",
  backgroundColor: "#EEF8F2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  height: "100%",
  boxShadow: "none",
  position: "relative",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "16px",
  border: "1px solid #E0E0E0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "80px",
  width: "80px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  color: "#42794A",

  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
}));

const HeroCard = styled(Box)(({ theme }) => ({
  marginTop: "2px",
  borderRadius: "16px",
  boxShadow: "0px 4px 12px 4px #E9E9E980",
  width: "100%",
  height: 200,
  display: "flex",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "auto",
  },
  backgroundColor: "#FFFFFF",
}));

const DashboardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const ProfileDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ManagementCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    border: '1px solid #E0E0E0',
    height: '210px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: "24px 32px 32px 36px"
  }));
  const infoCards = [
    {
      icon: <AccountBalanceOutlined />,
      title: "XXXX 9820",
      subtitle: "ICICI Bank | Chennai Egmore Branch",
    },
    {
      icon: <BusinessCenterOutlinedIcon />,
      title: "Business Profile",
      subtitle: "View and edit your business details",
    },
    {
      icon: <GradingOutlinedIcon />,
      title: "KYC Verification",
      subtitle: "Unlock exclusive benefits with KYC",
    },
    {
      icon: <ShoppingCartOutlinedIcon />,
      title: "Order QR",
      subtitle: "Get paid, manage & order QRs",
    },
  ];

  const businessServices = [
    { icon: <SpeakerOutlined />, title: "Smart Speaker" },
    { icon: <PointOfSaleOutlined />, title: "POS Machine" },
  ];

  const manageBusiness = [
    { icon: <SettingsOutlined />, title: "Payment Settings" },
    { icon: <PeopleOutlined />, title: "Manage Staff" },
    { icon: <LanguageOutlined />, title: "Change Language" },
  ];

  return (
    <DashboardContainer>
      <Grid container spacing={3}>
        {/* Hero Banner */}
        <Grid item xs={12}>
          <HeroCard>
            <GradientBox>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                Pay ₹1/month* for the QPay POS Device
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                One device for accepting all modes of payments
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#42794A",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  textTransform: "none",
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "#f0fdf4",
                  },
                }}
              >
                Download App Now!
              </Button>
            </GradientBox>
            <ImageBox>
              <Box
                component="img"
                src={profilLogo}
                alt="QPay Device"
                sx={{ width: "70%", height: "auto" }}
              />
            </ImageBox>
          </HeroCard>
        </Grid>

        <Grid item xs={12} gap="16px">
          <Grid container spacing={3}>
            {infoCards.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <InfoCard>
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      color: "#2E7D32",
                    }}
                    size="small"
                  >
                    <ChevronRight />
                  </IconButton>
                  <Avatar
                    sx={{
                      bgcolor: "#42794A",
                      color: "#FFFFFF",
                      width: 48,
                      height: 48,
                      border: "2px solid #ffffff",
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography fontWeight="bold" color="#2E7D32">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                </InfoCard>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} gap="20px">
          <Grid container spacing={isMobile ? 2 : 3}>
            <Grid item xs={12} md={6}>
              <ManagementCard>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    sx={{ color: "#999", fontSize: "0.9rem" }}
                  >
                    BUSINESS SERVICES
                  </Typography>
                </Box>
                <Grid container spacing={isMobile ? 1 : 2}>
                  {businessServices.map((service, index) => (
                    <Grid item xs={3} key={index} gap={"8px"}>
                      <Box sx={{ display: "flex", mb: 2, flexDirection: "column", alignItems: "center" }}>

                        <ServiceCard>
                          {service.icon}

                        </ServiceCard>
                        <Typography
                          fontWeight="bold"
                          textAlign="center"
                          sx={{ mt: 1, wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          {service.title}
                        </Typography>
                      </Box>


                    </Grid>
                  ))}
                </Grid>
              </ManagementCard>
            </Grid>

            <Grid item xs={12} md={6}>

              <ManagementCard>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    sx={{ color: "#999", fontSize: "0.9rem" }}
                  >
                    MANAGE BUSINESS
                  </Typography>
                </Box>
                <Grid container spacing={isMobile ? 1 : 2}>
                  {manageBusiness.map((item, index) => (
                    <Grid item xs={3} md={4} key={index} gap={"8px"}>
                      <Box sx={{ display: "flex", mb: 2, flexDirection: "column", alignItems: "center" }}>
                        <ServiceCard>
                          {item.icon}
                        </ServiceCard>
                        <Typography
                          fontWeight="bold"
                          textAlign="center"
                          sx={{ mt: 1, wordWrap: "break-word", whiteSpace: "normal" }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                    </Grid>
                  ))}
                </Grid>
              </ManagementCard>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </DashboardContainer >
  );
};

export default ProfileDashboard;