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

// Styled Components
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
  backgroundColor: "#EEF8F2", // Light green background
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
  padding: theme.spacing(3),
  borderRadius: "12px",
  border: "1px solid #E0E0E0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  textAlign: "center",
  height: "100%",
  boxShadow: "none",
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
}));

const DashboardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

// Component
const ProfileDashboard = () => {
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
                src="https://via.placeholder.com/200x150/42794A/FFFFFF?text=QPay+Device"
                alt="QPay Device"
                sx={{ width: "70%", height: "auto" }}
              />
            </ImageBox>
          </HeroCard>
        </Grid>

        {/* Info Cards */}
        <Grid item xs={12}>
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

        {/* Business Services & Manage Business */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {/* Business Services */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{ color: "#999" }}
                >
                  BUSINESS SERVICES
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {businessServices.map((service, index) => (
                  <Grid item xs={6} key={index}>
                    <ServiceCard>
                      <Avatar
                        sx={{
                          bgcolor: "#E8F5E9",
                          color: "#2E7D32",
                          width: 56,
                          height: 56,
                        }}
                      >
                        {service.icon}
                      </Avatar>
                      <Typography fontWeight="bold">
                        {service.title}
                      </Typography>
                    </ServiceCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Manage Business */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{ color: "#999" }}
                >
                  MANAGE BUSINESS
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {manageBusiness.map((item, index) => (
                  <Grid item xs={6} md={4} key={index}>
                    <ServiceCard>
                      <Avatar
                        sx={{
                          bgcolor: "#E8F5E9",
                          color: "#2E7D32",
                          width: 56,
                          height: 56,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <Typography fontWeight="bold">{item.title}</Typography>
                    </ServiceCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default ProfileDashboard;