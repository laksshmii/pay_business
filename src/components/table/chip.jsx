import React from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/system';

// StyledChip with dynamic styles based on props
const StyledChip = styled(Chip)(({ backgroundColor, color, borderColor, dotColor }) => ({
    '& .MuiChip-label': {
        display: 'flex',
        alignItems: 'center',
        
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: dotColor,
            marginRight: '8px',
        },
    },
    backgroundColor: backgroundColor || 'transparent',
    color: color || 'inherit', // Use color prop directly
    fontWeight: 500,
    lineHeight: '15.64px',
    alignItems: 'center',
    borderColor: borderColor || 'transparent',
    borderWidth: '1px', // Ensure border is visible if using outlined variant
}));

const StatusChip = ({
  label,
  backgroundColor,
  color,
  borderColor,
  dotColor,
  ...props
}) => (
  <StyledChip
    label={label}
    labelColor={color}
    backgroundColor={backgroundColor}
    color={color} // Pass color directly
    borderColor={borderColor}
    dotColor={dotColor}
    variant="outlined"
    {...props}
  />
);

export default StatusChip;
