import React from 'react';
import { Button } from '@mui/material';

const SettleNowButton = ({ onClick, disabled = false }) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            sx={{
                backgroundColor: '#2E7D32',
                color: 'white',
                borderRadius: '4px',
                textTransform: 'none',
                fontWeight: 'bold',
                padding: '8px 16px',
                fontSize: '14px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                '&:hover': {
                    backgroundColor: '#1B5E20',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                },
                '&:disabled': {
                    backgroundColor: '#A5D6A7',
                    color: '#E8F5E9',
                }
            }}
        >
            Settle Now
        </Button>
    );
};

export default SettleNowButton;