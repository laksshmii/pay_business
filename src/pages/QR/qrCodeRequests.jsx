import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,

    styled,
    Chip
} from '@mui/material';

import QrStatusAccordion from './qrStatusAccordion';
// Styled Components
const RequestCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    borderRadius: '12px',
    border: '1px solid #E0E0E0',
    boxShadow: 'none',
    width: '100%',
    maxWidth: '600px',
}));





const QrCodeRequests = () => {
    const requests = [
        {
            id: 1,
            title: "All Marketing Sales",
            address: "45, Binomini Nagan, VOC Port Authority, Turkenth, 626002",
            date: "Requested on 26.04.202",
            status: "Accepted",
        },
        {
            id: 2,
            title: "All Marketing Sales",
            address: "45, Binomini Nagan, VOC Port Authority, Turkenth, 626002",
            date: "Requested on 26.04.202",
            status: "Accepted",
        },
    ];

    return (
        <Box sx={{ padding: '16px' }}>
            {requests.map((request) => (
                <RequestCard key={request.id} variant="outlined">
                    <CardContent sx={{ padding: '16px !important' }}>
                        <Box sx={{ display: 'flex' }}>
                            {/* QR Code Container */}
                            <Box
                                sx={{
                                    width: "96px",
                                    height: "96px",
                                    border: '1.33px solid #e0e0e0',
                                    borderRadius: '10.67px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '16px',
                                    flexShrink: 0
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=74x74&data=Request-${request.id}`}
                                    alt="QR Code"
                                    sx={{
                                        width: "74.67px",
                                        height: "74.67px",
                                    }}
                                />
                            </Box>

                            {/* Text Content */}
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    {request.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {request.address}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {request.date}
                                </Typography>

                            </Box>
                        </Box>

                        {/* Status Accordion */}
                        <QrStatusAccordion />
                    </CardContent>
                </RequestCard>
            ))}
        </Box>
    );
};

export default QrCodeRequests;