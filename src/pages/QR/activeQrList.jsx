import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  styled
} from '@mui/material';
import {
  ChevronRight
} from '@mui/icons-material';

// Styled Components
const QrListCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '16px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E0E0E0',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-2px)'
  },
}));

const ActiveQrList = () => {
  const qrCodes = [
    {
      id: 'Q201946579',
      description: 'All Marketing Sales-MS1903041i55331648980231',
      terminal: 'Terminal 1'
    },
    {
      id: 'Q201946580',
      description: 'All Marketing Sales-MS1903041i55331648980232',
      terminal: 'Terminal 2'
    },
    {
      id: 'Q201946581',
      description: 'All Marketing Sales-MS1903041i55331648980233',
      terminal: 'Terminal 3'
    },
    {
      id: 'Q201946582',
      description: 'All Marketing Sales-MS1903041i55331648980234',
      terminal: 'Terminal 4'
    }
  ];

  return (
    <Box>
      {qrCodes.map((qr, index) => (
        <QrListCard key={index} variant="outlined">
          <CardContent sx={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '16px !important',
            '&:last-child': { paddingBottom: '16px' }
          }}>
            {/* QR Code Image */}
            <Box
              component="img"
              src={`https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${qr.id}`}
              alt="QR Code"
              sx={{
                width: 50,
                height: 50,
                marginRight: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
            />
            
            {/* QR Code Details */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#42794A' }}>
                {qr.id}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {qr.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {qr.terminal}
              </Typography>
            </Box>
            
            {/* Right Arrow Icon */}
            <IconButton size="small" sx={{ color: '#42794A' }}>
              <ChevronRight />
            </IconButton>
          </CardContent>
        </QrListCard>
      ))}
    </Box>
  );
};

export default ActiveQrList;