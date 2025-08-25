import React, { useState } from 'react';
import {
    Box,
    Grid,
    Card,
    Typography,
    Button,
    Avatar,
    CircularProgress,
    styled,
    Divider
} from '@mui/material';
import {
    AccountBalanceWallet,
    Receipt,
    AccountBalance,
    QrCode,
} from '@mui/icons-material';
import cardImg from '../../assets/img/bill-payment- 2.png';

// Styled Components
const GradientBox = styled(Box)(({ theme }) => ({
    width: '70%',
    background: 'linear-gradient(90deg, #42794A 0%, #61CE70 100%)',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        width: '100%',
        clipPath: 'none',
    },
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: '50%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: theme.spacing(3),
    },
}));

const StatsCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    height: '140px',
    borderRadius: '12px',
    width: '234px',
}));

const DashboardContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
}));

const HeroCard = styled(Box)(({ theme }) => ({
    marginTop: '2px',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px 4px #E9E9E980',
    width: '1000px',
    height: 240,
    display: 'flex',
    overflow: 'hidden',
    border: "2px",
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        height: 'auto',
    },
    backgroundColor: "#FFFFFF",
}));

// Styled components for the profile and QR cards
const ProfileCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    height: 392,
    width: 490,
    borderRadius: '16px',
    border: '1px solid #E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const QrCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    height: 392,
    borderRadius: '16px',
    border: '1px solid #E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

// New styled components for Settlement and Transactions cards
const SettlementCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    border: '1px solid #E0E0E0',
    height: 396,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 490,

}));

const TransactionsCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    border: '1px solid #E0E0E0',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

// Component
const Dashboard = () => {
    const [progress, setProgress] = useState(30);

    const stats = [
        { title: 'Account Holders', value: '1.5k', icon: <AccountBalanceWallet /> },
        { title: 'Transactions', value: '2.1k', icon: <Receipt /> },
        { title: 'Settlement', value: '2.3k', icon: <AccountBalance /> },
        { title: 'QR Orders', value: '4.5k', icon: <QrCode /> },
    ];

    // Sample transaction data
    const transactions = [
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+90' },
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+90' },
        { name: 'Ibrahim', date: '23 Oct, 09:15 AM', amount: '+90' },
    ];

    return (
        <DashboardContainer>
            <Grid container spacing={3}>
                {/* Hero Banner Card */}
                <Grid item xs={12}>
                    <HeroCard >
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
                                    backgroundColor: '#FFFFFF',
                                    color: '#42794A',
                                    fontWeight: 'bold',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    width: 'fit-content',
                                    '&:hover': {
                                        backgroundColor: '#f0fdf4',
                                    },
                                }}
                            >
                                Download App Now!
                            </Button>
                        </GradientBox>

                        <ImageBox>
                            <Box
                                component="img"
                                src={cardImg}
                                alt="QPay Device"
                                sx={{
                                    width: { xs: '70%', md: '60%' },
                                    height: 'auto',
                                    margin: '0 auto',
                                }}
                            />
                        </ImageBox>
                    </HeroCard>
                </Grid>

                {/* Stats Section */}
                <Grid item xs={12}>
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        {stats.map((stat, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <StatsCard>

                                    <Typography variant="h4" fontWeight="bold" gutterBottom style={{ color: '#42794A', fontSize: "40px", letterSpacing: "-2%", forntweight: "700", lineHeight: "100%", horizontalAlign: "center" }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "20px", forntweight: "500", lineHeight: "100%", letterSpacing: "0%" }}>
                                        {stat.title}
                                    </Typography>
                                </StatsCard>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Profile and QR Cards */}
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {/* Profile Card */}
                        <Grid item xs={12} md={6}>
                            <ProfileCard>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontSize: "14px",
                                        color: "#999999",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        fontWeight: 600,
                                        lineHeight: "16px",
                                        letterSpacing: "12%",
                                        fontStyle: "SemiBold"
                                    }}
                                >
                                    PROFILE
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "inline-flex",
                                            mr: 3,
                                            width: 184,
                                            height: 184,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CircularProgress
                                            variant="determinate"
                                            value={100}
                                            size={184}
                                            thickness={5}
                                            sx={{ color: "#EEEEEE" }}
                                        />
                                        <CircularProgress
                                            variant="determinate"
                                            value={progress}
                                            size={184}
                                            thickness={5}
                                            sx={{
                                                color: "#4CAF50",
                                                position: "absolute",
                                                left: 0,
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                position: "absolute",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                component="div"
                                                fontWeight="bold"
                                                sx={{ color: "#4CAF50" }}
                                            >
                                                {`${progress}%`}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ width: 184, height: 184, gap: "16px" }}>
                                        <Typography variant="h6" sx={{ mb: 1, mt: 3, fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", fontWeight: "600", horizontalAlign: "Right" }} gutterBottom>
                                            Complete your profile
                                        </Typography>
                                        <Typography style={{ color: "#999999", fontWeight: 500, fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%" }} variant="body2" >• Personal KYC</Typography>
                                        <Typography style={{ color: "#999999", fontWeight: 500, fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%" }} variant="body2" >• Company KYC</Typography>
                                        <Typography style={{ color: "#999999", fontWeight: 500, fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%" }} variant="body2" >• Onboarding details</Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        bgcolor: '#42794A',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            bgcolor: '#42794A'
                                        },
                                        flexFlow: "HORIZONTAL",
                                        width: "426px",
                                        height: "56px",
                                        borderRadius: "12px",
                                        padding: "16px 24px 16px 24px",
                                    }}
                                >
                                    Next
                                </Button>
                            </ProfileCard>
                        </Grid>

                        {/* QR Card */}
                        <Grid item xs={12} md={6}>
                            <QrCard>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontSize: "14px",
                                        color: "#999999",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        fontWeight: 600,
                                        lineHeight: "16px",
                                        letterSpacing: "12%",
                                        fontStyle: "SemiBold"
                                    }}
                                >
                                    QR
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "inline-flex",
                                            mr: 3,
                                            width: 184,
                                            height: 184,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=184x184&data=Example"
                                            alt="QR Code"
                                            sx={{
                                                width: 184,
                                                height: 184,
                                                mb: 3,
                                                mx: 'auto',
                                                display: 'block'
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ width: 184, height: 184, gap: "16px" }}>
                                        <Typography variant="h6" sx={{ mb: 1, mt: 3, fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", fontWeight: "600", horizontalAlign: "Right" }} gutterBottom>
                                            Order QR
                                        </Typography>
                                        <Typography style={{ color: "#999999", fontWeight: 500, fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%" }} variant="body2" >• Receive Payment</Typography>
                                        <Typography style={{ color: "#999999", fontWeight: 500, fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%" }} variant="body2" >• Order new QRs</Typography>
                                        <Typography style={{ color: "#999999", fontWeight: 500, fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%" }} variant="body2" >• Download QR</Typography>
                                    </Box>
                                </Box>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        bgcolor: '#42794A',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            bgcolor: '#42794A'
                                        },
                                        flexFlow: "HORIZONTAL",
                                        height: "56px",
                                        borderRadius: "12px",
                                        padding: "16px 24px 16px 24px",
                                    }}
                                >
                                    Next
                                </Button>
                            </QrCard>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <SettlementCard>
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#999999",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            lineHeight: "16px",
                                            letterSpacing: "12%",
                                            fontStyle: "SemiBold"
                                        }}
                                    >
                                        SETTLEMENT
                                    </Typography>
                                    <Typography variant="h5" sx={{ mt: 1, mb: 2, fontWeight: "600", fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                        ¥1,23,816.19
                                    </Typography>
                                    <Divider />
                                    {transactions.map((transaction, index) => (
                                        <Box key={index}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontWeight: "600", fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                                        {transaction.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "500", fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                                        {transaction.date}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" sx={{ fontWeight: "600", fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                                    {transaction.amount}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    ))}
                                </Box>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        bgcolor: '#42794A',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            bgcolor: '#42794A'
                                        },
                                        flexFlow: "HORIZONTAL",
                                        width: "426px",
                                        height: "56px",
                                        borderRadius: "12px",
                                        padding: "16px 24px 16px 24px",
                                    }}
                                >
                                    Settle Now
                                </Button>
                            </SettlementCard>
                        </Grid>

                        {/* Transactions Card */}
                        <Grid item xs={12} md={6}>
                            <TransactionsCard>
                                <Box>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontSize: "14px",
                                            color: "#999999",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                            lineHeight: "16px",
                                            letterSpacing: "12%",
                                            fontStyle: "SemiBold"
                                        }}
                                    >
                                        TOTAL TRANSACTIONS
                                    </Typography>
                                    <Typography variant="h5" sx={{ mt: 1, mb: 2, fontWeight: "600", fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                        ¥1,23,816.19
                                    </Typography>
                                    <Divider />

                                    {transactions.map((transaction, index) => (
                                        <Box key={index}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontWeight: "600", fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                                        {transaction.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "500", fontStyle: "medium", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                                        {transaction.date}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body1" sx={{ fontWeight: "600", fontStyle: "SemiBold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "right" }}>
                                                    {transaction.amount}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        bgcolor: '#42794A',
                                        fontWeight: 'bold',
                                        mt: 2,
                                        '&:hover': {
                                            bgcolor: '#42794A'
                                        },
                                        flexFlow: "HORIZONTAL",
                                        height: "56px",
                                        borderRadius: "12px",
                                        padding: "16px 24px 16px 24px",
                                    }}
                                >
                                    View All
                                </Button>
                            </TransactionsCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </DashboardContainer>
    );
};

export default Dashboard;