import React from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/system';

const StyledBadge = styled(Chip)(({ status, chipBgColor, labelColor }) => ({
    backgroundColor: chipBgColor,
    '& .MuiChip-label': {
        color: labelColor, 
        display: 'flex',
        alignItems: 'center',
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: status ? 'green' : 'red',
            marginRight: '8px',
        },
    },
}));

const BadgeWrapper = styled('div')(({ overallBgColor }) => ({
    backgroundColor: overallBgColor,
    padding: '8px',
    borderRadius: '4px',
}));

const Badge = ({ name, status, overallBgColor, chipBgColor, labelColor }) => (
    <BadgeWrapper overallBgColor={overallBgColor}>
        <StyledBadge 
            label={name} 
            status={status} 
            chipBgColor={chipBgColor} 
            labelColor={labelColor} 
            variant="outlined" 
        />
    </BadgeWrapper>
);

export default Badge;
