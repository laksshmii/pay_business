import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    styled
} from '@mui/material';
import QrStatusAccordion from './QrStatusAccordion';

// Styled Components
const RequestCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    borderRadius: '12px',
    border: '1px solid #E0E0E0',
    boxShadow: 'none',
}));

const QrCodeRequests = () => {
    const requests = [
        {
            id: 1,
            title: "All Marketing Sales",
            address: "45, Broomth Nagar, VOC Port Authority, Tulscahn, 628004.",
            date: "Requested on 26.04.202",
        },
        {
            id: 2,
            title: "All Marketing Sales",
            address: "45, Broomth Nagar, VOC Port Authority, Tulscahn, 628004.",
            date: "Requested on 26.04.202",
        }
    ];

    return (
        <Box>
            {requests.map((request) => (
                <RequestCard key={request.id} variant="outlined">
                    <CardContent sx={{ padding: '16px' }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            {request.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {request.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {request.date}
                        </Typography>

                        {/* Add the status accordion component here */}
                        <QrStatusAccordion />
                    </CardContent>
                </RequestCard>
            ))}
        </Box>
    );
};

export default QrCodeRequests;