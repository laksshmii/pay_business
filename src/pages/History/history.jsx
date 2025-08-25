import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  InputAdornment,
  Button,
  Divider,
  Chip,
  IconButton,
  Card,
  Modal,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AlarmIcon from '@mui/icons-material/Alarm';
export default function SettlementHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [settleModalOpen, setSettleModalOpen] = useState(false);
  const transactions = [
    { id: 1, name: "Lisa", date: "03 Sep, 2021", account: "From ₳", amount: "1,06,023", status: "Pending", details: "View" },
    { id: 2, name: "Lisa", date: "03 Sep, 2021", account: "From 🅿️", amount: "1,023", status: "Failed", details: "View" },
    { id: 3, name: "Lisa", date: "03 Sep, 2021", account: "From 💳", amount: "1,023", status: "Success", details: "View" },
    { id: 4, name: "Lisa", date: "03 Sep, 2021", account: "From 💱", amount: "1,06,023", status: "Failed", details: "View" },
    { id: 5, name: "Lisa", date: "03 Sep, 2021", account: "From 🅿️", amount: "1,023", status: "Failed", details: "View" },
  ];
  const SettlementModal = ({ open, onClose }) => {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: "16px",
            width: '1032px',
            maxWidth: '1032px',
            height: '736',
          }
        }}
      >
        <DialogContent sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Manage QR/POS
            </Typography>
            <IconButton onClick={onClose} size="small" sx={{ p: 0 }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1.5,
            borderRadius: "8px",
            mb: 1
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <Typography variant="body1" color="text.primary" fontWeight="medium">
                Today's Total Collection
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold">
              ₹1,023
            </Typography>
          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1.5,
            backgroundColor: "#F0FDF4",
            borderRadius: "8px",
            mb: 2,
            mt: 1
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceIcon sx={{ color: '#2E7D32', mr: 1 }} />
              <Typography variant="body1" color="#2E7D32" fontWeight="medium">
                Already Settled
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="#2E7D32">
              ₹100
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1 }}>
            SETTLEMENT CALCULATION
          </Typography>

          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Amount yet to be settled</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right" fontWeight="medium">IBRAHIM MOHAMMEDALI</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Past pending amount</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right" fontWeight="medium">092141241127</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">Charges</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" align="right" fontWeight="medium">07, Aug 2024</Typography>
            </Grid>
          </Grid>

          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            border: '1px solid #E0E0E0',
            borderRadius: "8px",
            mb: 3
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccountBalanceIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <Typography variant="body1" fontWeight="medium">
                Today's Total Collection
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold">
              ₹1,023
            </Typography>
          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            backgroundColor: "#F0FDF4",
            borderRadius: "8px",
            mb: 2
          }}>
            <Box>
              <Typography variant="body2" fontWeight="medium">
                Tap <Box component="span" fontWeight="bold">'Settle Now'</Box> to instantly get settlements in your bank account.
              </Typography>
              <Typography variant="body2" color="#2E7D32" mt={0.5}>
                Settle Now is Chargeable
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#42794A",
                "&:hover": {
                  backgroundColor: "#356640",
                },
              }}
            >
              Settle Now
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    );
  };
  const StatusChip = ({ status }) => {
    const getStyle = () => {
      switch (status) {
        case "Pending":
          return { bgcolor: "#FFF7E2", color: '#EDB823', border: "1px solid #EDB823" };
        case "Success":
          return { bgcolor: "#E6F4EA", color: "#61CE70", border: "1px solid #61CE70" };
        case "Failed":
          return { bgcolor: "#FFECEB", color: "#E87474", border: "1px solid #E87474" };
        default:
          return { bgcolor: "#F1F3F4", color: "#5F6368", border: "1px solid #5F6368" };
      }
    };

    return (
      <Chip
        label={status}
        size="small"
        sx={{
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "12px",
          ...getStyle(),
        }}
      />
    );
  };

  return (
    <Box sx={{ p: 3, fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          Settlement History
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
            color: "#42794A",
            borderColor: "#42794A",
            "&:hover": {
              borderColor: "#42794A",
            },
            height: "48px",
            padding: "12px 24px 12px 24px"
          }}
        >
          Download statement
        </Button>
      </Box>


      <Box>
        <Card sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, }} >
          <Box sx={{ height: "40px", borderRadius: "12px", width: "1000px" }}>

            <TextField
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1,
                  height: 40,
                  width: "1000px",
                },
              }}
            />
          </Box>
          <IconButton sx={{ backgroundColor: "#42794A", borderRadius: 1, p: 1, color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Card>

      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          mb: 3,
          borderRadius: "16px",
          backgroundColor: "#EEF8F2",
          border: "1px solid #C4E3C9",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AccessTimeIcon sx={{ color: "#42794A" }} />
          <Typography variant="body2" sx={{ color: "#999999", lineHeight: "20px", fontSize: "16px", fontWeight: "700" }}>
            Today's total collection will be auto-settled by{" "}
            <Box component="span" sx={{ fontWeight: "bold", color: "#42794A" }}>
              08:00AM, 23rd Oct'22
            </Box>{" "}
            Tomorrow.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AlarmIcon />}
          onClick={() => setSettleModalOpen(true)}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "#42794A",
            "&:hover": {
              backgroundColor: "#42794A",
            },
            height: "56px",
            padding: "12px 40px 12px 40px"
          }}
        >
          Settle Now!
        </Button>
      </Box>

      <Paper elevation={0} sx={{ overflow: "hidden", borderRadius: "8px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "14px", color: "#555", py: 1.5 }}>NAME</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "14px", color: "#555", py: 1.5 }}>DATE & TIME</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "14px", color: "#555", py: 1.5 }}>ACCOUNT</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "14px", color: "#555", py: 1.5 }}>AMOUNT</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "14px", color: "#555", py: 1.5 }}>STATUS</TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: "14px", color: "#555", py: 1.5 }}>DETAILS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} sx={{ "&:hover": { backgroundColor: "#fafafa" } }}>
                <TableCell sx={{ py: 2, fontWeight: "bold" }}>{transaction.name}</TableCell>
                <TableCell sx={{ py: 2, fontWeight: "bold" }}>{transaction.date}</TableCell>
                <TableCell sx={{ py: 2, fontWeight: "bold" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {transaction.account}
                  </Box>
                </TableCell>
                <TableCell sx={{ py: 2, fontWeight: "bold" }}>₹{transaction.amount}</TableCell>
                <TableCell sx={{ py: 2 }}>
                  <StatusChip sx={{ width: "100px", height: "32px", fontSize: "20px", fontweight: "500", fontStyle: "medium" }} status={transaction.status} />
                </TableCell>
                <TableCell sx={{ py: 2 }}>
                  <Typography
                    sx={{
                      color: "#1E8E3E",
                      cursor: "pointer",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {transaction.details}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <SettlementModal
        open={settleModalOpen}
        onClose={() => setSettleModalOpen(false)}
      />

    </Box>
  );
}