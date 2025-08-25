import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    styled,
    IconButton,
    Snackbar,
    Alert
} from '@mui/material';
import {
    QrCode,
    Download,
    Share,
    ContentCopy
} from '@mui/icons-material';
import logo from "../../assets/img/Group 17.png";

// Styled Components


const ContentCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    marginBottom: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    border: '1px solid #E0E0E0',
}));

const UpiCard = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopyUpiId = () => {
        navigator.clipboard.writeText('9876543210sqpay');
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <ContentCard>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                        component="img"
                        src={logo}
                        alt="logo"
                        sx={{
                            width: "72.00029754638672px",
                            height: "62.000267028808594",
                            mb: 3,


                        }}
                    />
                    <Box
                        component="img"
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=9876543210sqpay`}
                        alt="QR Code"
                        sx={{
                            width: "426px",
                            height: "426px",
                            mb: 3,

                        }}
                    />

                    <Box display="flex" alignItems="center" mb={1}>
                        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: "700", fontStyle: "bold", lineHeight: "100%", letterSpacing: "0%" }}>
                            UPI ID: 9876543210sqpay
                        </Typography>
                        <IconButton
                            onClick={handleCopyUpiId}
                            size="small"
                            sx={{ ml: 1, color: '#42794A' }}
                        >
                            <ContentCopy fontSize="small" />
                        </IconButton>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "500", fontStyle: "medium", fontSize: "16px", lineHeight: "18px", letterSpacing: "0%" }} gutterBottom>
                        liuaiim Mohamraddi
                    </Typography>

                    <Box display="flex" gap={2} mt={3}>
                        <Button
                            variant="outlined"
                            startIcon={<Download />}
                            sx={{
                                borderColor: '#EEEEEE',
                                color: '#252525',
                                backgroundColor: '#EEEEEE',
                                borderRadius: '8px',
                                textTransform: 'none',
                                height: "56px",
                                width: "204px",
                                px: 2,
                                '&:hover': {
                                    borderColor: '#EEEEEE',
                                    backgroundColor: 'rgba(66, 121, 74, 0.04)'
                                },
                                padding: '16px 12px 16px 12px'
                            }}
                        >
                            Download
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<Share />}
                            sx={{
                                borderColor: '#EEEEEE',
                                color: '#252525',
                                backgroundColor: '#EEEEEE',
                                borderRadius: '8px',
                                textTransform: 'none',
                                height: "56px",
                                width: "204px",
                                px: 2,
                                '&:hover': {
                                    borderColor: '#EEEEEE',
                                    backgroundColor: 'rgba(66, 121, 74, 0.04)'
                                },
                                padding: '16px 12px 16px 12px'
                            }}
                        >
                            Share
                        </Button>
                    </Box>
                </Box>
            </ContentCard>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    UPI ID copied to clipboard!
                </Alert>
            </Snackbar>
        </>
    );
};

export default UpiCard;