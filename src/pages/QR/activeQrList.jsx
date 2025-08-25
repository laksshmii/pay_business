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
            <CardContent sx={{
              width: "96px",
              height: "96px",
              border: '1.33px solid #e0e0e0',
              borderRadius: '10.67px',
              marginRight: '16px'
            }}>
              <Box
                component="img"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${qr.id}`}
                alt="QR Code"
                sx={{ width: "74.66666412353516px", height: "74.66666412353516px", padding:"0px 10.67px 10.67px 0px" }}

              />
            </CardContent>


            {/* QR Code Details */}
            <Box sx={{ flexGrow: 1, gap: '8px' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#252525', fontWeight: "600", fontStyle: "Semibold", fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", horizontalAlign: "Right" }}>
                {qr.id}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "500", color: "#252525", fontSize: "16px", lineHeight: "100%", letterSpacing: "0%", fontStyle: "medium" }} color="text.secondary" gutterBottom>
                {qr.description}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "500", color: "#999999", fontSize: "16px", lineHeight: "100%", letterSpacing: "0%", fontStyle: "medium" }}>
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