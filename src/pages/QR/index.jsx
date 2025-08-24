

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
    Tabs,
    Tab,
    Divider
} from '@mui/material';
import {
    QrCode,
    Download,
    Share,
    Add,
    CheckCircle
} from '@mui/icons-material';
import ScrollableTabsButtonVisible from "../../components/tab/Tab";
import UpiCard from './upiCard';
import ActiveQrList from './activeQrList';
import QrCodeRequests from './qrCodeRequests';

// Styled Components
const PageContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#f5f5f5',
}));

const HeaderCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    marginBottom: theme.spacing(3),
    background: 'linear-gradient(90deg, #42794A 0%, #61CE70 100%)',
    color: 'white',
}));

const ContentCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    marginBottom: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    border: '1px solid #E0E0E0',
}));

const RequestCard = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: '1px solid #E0E0E0',
    borderRadius: '8px',
}));

const StatusChip = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
    padding: '4px 8px',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
}));

// Component
const ManageQrPos = () => {
    const tabs = [
        { label: 'Active QR Codes', component: <ActiveQrList /> },
        { label: 'QR Code Requests', component: <QrCodeRequests /> },
    ];

    const [tabValue, setTabValue] = useState(1); // Start with QR Code Requests tab

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const qrRequests = [
        {
            title: "All Marketing Sales",
            address: "A. Binomin Hogos, VOC Port Authority, Tufkent, 620604",
            date: "Requested on 26.04.202",
            status: "QR Request Accepted"
        },
        {
            title: "All Marketing Sales",
            address: "A. Binomin Hogos, VOC Port Authority, Tufkent, 620604",
            date: "Requested on 26.04.202",
            status: "QR Request Accepted"
        }
    ];

    return (
        <PageContainer>
            {/* Header Section */}
            <HeaderCard>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <QrCode sx={{ fontSize: 32, mr: 1.5 }} />
                        <Box>
                            <Typography variant="h5" fontWeight="bold">
                                Manage QR/POS
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </HeaderCard>

            {/* Two-column layout for Tabs and UPI ID */}
            <Grid container spacing={1}>
                {/* Left Column - Tabs */}
                <Grid item xs={12} md={6}>
                    <UpiCard />
                </Grid>

                {/* Right Column - UPI ID and Actions */}
                <Grid item xs={12} md={6}>

                    <ContentCard>
                        <ScrollableTabsButtonVisible tabs={tabs} />


                    </ContentCard>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default ManageQrPos;