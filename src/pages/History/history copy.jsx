import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogContent,
  Grid,
  CircularProgress,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AlarmIcon from "@mui/icons-material/Alarm";

export default function SettlementHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [settleModalOpen, setSettleModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "http://64.227.189.27/wallet/api/v1/transaction_history?service_id=111&page=0";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        const data = await res.json();

        if (data && data.data) {
          setTransactions(data.data); 
        } else {
          setTransactions([]);
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const StatusChip = ({ status }) => {
    const getStyle = () => {
      switch (status) {
        case "Pending":
          return {
            bgcolor: "#FFF7E2",
            color: "#EDB823",
            border: "1px solid #EDB823",
          };
        case "Success":
          return {
            bgcolor: "#E6F4EA",
            color: "#61CE70",
            border: "1px solid #61CE70",
          };
        case "Failed":
          return {
            bgcolor: "#FFECEB",
            color: "#E87474",
            border: "1px solid #E87474",
          };
        default:
          return {
            bgcolor: "#F1F3F4",
            color: "#5F6368",
            border: "1px solid #5F6368",
          };
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
    <Box sx={{ p: 3, backgroundColor: "#ffffff" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
      >
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
          }}
        >
          Download statement
        </Button>
      </Box>

      <Card sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
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
            },
          }}
        />
        <IconButton
          sx={{
            backgroundColor: "#42794A",
            borderRadius: 1,
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Card>

      <Paper elevation={0} sx={{ overflow: "hidden", borderRadius: "8px" }}>
        {loading ? (
          <Box sx={{ p: 3, textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Table>
            <TableHead sx={{ backgroundColor: "#f0f0f0" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>NAME</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>DATE & TIME</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>ACCOUNT</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>AMOUNT</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>DETAILS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.name || "-"}</TableCell>
                  <TableCell>{t.date || "-"}</TableCell>
                  <TableCell>{t.account || "-"}</TableCell>
                  <TableCell>₹{t.amount || "0"}</TableCell>
                  <TableCell>
                    <StatusChip status={t.status} />
                  </TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color: "#1E8E3E",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      View
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    </Box>
  );
}
