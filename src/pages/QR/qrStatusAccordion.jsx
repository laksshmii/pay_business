import React, { useState } from 'react';
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    styled
} from '@mui/material';
import {
    ExpandMore,
    CheckCircle
} from '@mui/icons-material';

// Styled Components
const StatusAccordion = styled(Accordion)(({ theme }) => ({
    marginTop: theme.spacing(1),
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
}));

const SelectedStatus = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: '6px',
    backgroundColor: '#E8F5E9',
    marginRight: theme.spacing(1),
}));

const StatusText = styled(Typography)({
    fontWeight: 'bold',
    color: '#2E7D32',
    marginLeft: '8px',
});

const StatusOption = styled(FormControlLabel)(({ theme }) => ({
    marginLeft: 0,
    marginRight: 0,
    padding: theme.spacing(1),
    borderRadius: '4px',
    width: '100%',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    },
    '& .MuiFormControlLabel-label': {
        fontSize: '14px',
    },
}));

const QrStatusAccordion = () => {
    const [expanded, setExpanded] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('QR Request Accepted');

    const handleAccordionChange = (event, isExpanded) => {
        setExpanded(isExpanded);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const statuses = [
        { id: 'qr-accepted', label: 'QR Request Accepted' },
        { id: 'awaiting-production', label: 'Awaiting Production' },
        { id: 'awaiting-dispatch', label: 'Awaiting Dispatch' },
        { id: 'awaiting-delivery', label: 'Awaiting Delivery' },
    ];

    return (
        <StatusAccordion expanded={expanded} onChange={handleAccordionChange}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="status-content"
                id="status-header"
                sx={{ minHeight: 'auto', padding: '8px 16px' }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>

                    <SelectedStatus>
                        <CheckCircle sx={{ color: '#4CAF50', fontSize: 20 }} />
                        <StatusText variant="body2">
                            {selectedStatus}
                        </StatusText>
                    </SelectedStatus>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 16px 16px' }}>
                <RadioGroup
                    value={selectedStatus}
                    onChange={handleStatusChange}
                >
                    {statuses.map((status) => (
                        <StatusOption
                            key={status.id}
                            value={status.label}
                            control={<Radio size="small" />}
                            label={status.label}
                        />
                    ))}
                </RadioGroup>
            </AccordionDetails>
        </StatusAccordion>
    );
};

export default QrStatusAccordion;