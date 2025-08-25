import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  styled
} from '@mui/material';
import {
  Business,
  VerifiedUser,
  QrCode
} from '@mui/icons-material';

// Styled Components
const AccountCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  border: '1px solid #E0E0E0',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  height: '100%',
}));

const AccountInfo = () => {
  return (
    <AccountCard>
      <CardContent>
        {/* Account Number */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#42794A' }}>
          XXXX 9820
        </Typography>
        
        {/* Bank and Branch Info */}
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ICICI Bank | Chennai
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Egmore Branch
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <List>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <Business sx={{ color: '#42794A' }} />
            </ListItemIcon>
            <ListItemText
              primary="Business Profile"
              secondary="View and edit your business details"
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
            />
          </ListItem>
          
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <VerifiedUser sx={{ color: '#42794A' }} />
            </ListItemIcon>
            <ListItemText
              primary="KYC Verification"
              secondary="Unlock exclusive benefits with KYC"
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
            />
          </ListItem>
          
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <QrCode sx={{ color: '#42794A' }} />
            </ListItemIcon>
            <ListItemText
              primary="Order QR"
              secondary="Get paid, manage & order QRs"
              primaryTypographyProps={{ fontWeight: 'medium' }}
              secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
            />
          </ListItem>
        </List>
      </CardContent>
    </AccountCard>
  );
};

export default AccountInfo;