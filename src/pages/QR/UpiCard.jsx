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

// Styled Components
const PageContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
}));

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
        <PageContainer maxWidth="sm">
            <ContentCard>
                <Box display="flex" flexDirection="column" alignItems="center">
                    {/* QR Code */}
                    <Box
                        component="img"
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=9876543210sqpay`}
                        alt="QR Code"
                        sx={{
                            width: 150,
                            height: 150,
                            mb: 3,
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px'
                        }}
                    />

                    {/* UPI ID with Copy Icon */}
                    <Box display="flex" alignItems="center" mb={1}>
                        <Typography variant="h6" fontWeight="bold">
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

                    {/* Additional Text */}
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        liuaiim Mohamraddi
                    </Typography>

                    {/* Buttons */}
                    <Box display="flex" gap={2} mt={3}>
                        <Button
                            variant="outlined"
                            startIcon={<Download />}
                            sx={{
                                borderColor: '#42794A',
                                color: '#42794A',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                textTransform: 'none',
                                px: 2,
                                '&:hover': {
                                    borderColor: '#42794A',
                                    backgroundColor: 'rgba(66, 121, 74, 0.04)'
                                }
                            }}
                        >
                            Download
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<Share />}
                            sx={{
                                borderColor: '#42794A',
                                color: '#42794A',
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                textTransform: 'none',
                                px: 2,
                                '&:hover': {
                                    borderColor: '#42794A',
                                    backgroundColor: 'rgba(66, 121, 74, 0.04)'
                                }
                            }}
                        >
                            Share
                        </Button>
                    </Box>
                </Box>
            </ContentCard>

            {/* Snackbar for copy confirmation */}
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
        </PageContainer>
    );
};

export default UpiCard;