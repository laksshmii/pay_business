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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function SettlementHistory() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data matching the image
  const transactions = [
    { id: 1, name: "Lisa", date: "03 Sep, 2021", account: "From ₳", amount: "1,06,023", status: "Pending", details: "View" },
    { id: 2, name: "Lisa", date: "03 Sep, 2021", account: "From 🅿️", amount: "1,023", status: "Failed", details: "View" },
    { id: 3, name: "Lisa", date: "03 Sep, 2021", account: "From 💳", amount: "1,023", status: "Success", details: "View" },
    { id: 4, name: "Lisa", date: "03 Sep, 2021", account: "From 💱", amount: "1,06,023", status: "Failed", details: "View" },
    { id: 5, name: "Lisa", date: "03 Sep, 2021", account: "From 🅿️", amount: "1,023", status: "Failed", details: "View" },
  ];

  const StatusChip = ({ status }) => {
    const getStyle = () => {
      switch (status) {
        case "Pending":
          return { bgcolor: "#FFF7E2", color: "#FF9D00", border: "1px solid #FF9D00" };
        case "Success":
          return { bgcolor: "#E6F4EA", color: "#1E8E3E", border: "1px solid #1E8E3E" };
        case "Failed":
          return { bgcolor: "#FFECEB", color: "#D93026", border: "1px solid #D93026" };
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
      {/* Header and Download Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          Settlement History
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            borderRadius: 1,
            textTransform: "none",
            fontWeight: "bold",
            color: "#666",
            borderColor: "#ccc",
            "&:hover": {
              borderColor: "#666",
            },
          }}
        >
          Download statement
        </Button>
      </Box>


        <Box>
      <Card  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 ,}} >
        <Box sx={{ height: "40px", borderRadius:"12px", width:"1000px"}}>

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
                width:"1000px",
              },
            }}
          />
          </Box>
          <IconButton sx={{ backgroundColor: "#42794A", borderRadius: 1, p: 1, color: "white" }}>
            <MenuIcon />
          </IconButton>
      </Card>

        </Box>
      {/* Alert Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          mb: 3,
          borderRadius: "8px",
          backgroundColor: "#EBF6EC",
          border: "1px solid #C4E3C9",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CheckCircleOutlineIcon sx={{ color: "#388E3C" }} />
          <Typography variant="body2" sx={{ color: "#388E3C" }}>
            Today's total collection will be auto-settled by{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              08:00AM, 23rd Oct'22
            </Box>{" "}
            Tomorrow.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AccessTimeIcon />}
          sx={{
            borderRadius: 1,
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "#2e7d32",
            "&:hover": {
              backgroundColor: "#1b5e20",
            },
          }}
        >
          Settle Now!
        </Button>
      </Box>

      {/* Table */}
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
                  <StatusChip status={transaction.status} />
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

      {/* Pagination */}

    </Box>
  );
}