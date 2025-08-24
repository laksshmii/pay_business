import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "./pagination";
import StatusChip from "./chip";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const BasicTable = (props) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setPage(1);
  };

  const paginatedRows = props.rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const totalCount = props.rows.length.toString().padStart(2, '0');

  return (
    <>
      {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
        Total:  <span style={{ color: 'green', fontWeight: '500' }}> {totalCount} Records</span>
      </Typography> */}
      <TableContainer
        sx={{ boxShadow: "none", borderRadius: "0px" }}
        component={Paper}
      >
        <Table
          sx={{
            minWidth: 650,
            "& th": {
              backgroundColor: "#F9FAFB",
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              {props.headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
              {props.showStatus && <TableCell>Status</TableCell>} {/* Conditionally render Status header */}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                {Object.keys(row).map((key, cellIndex) => (
                  key !== 'status' ? (
                    <TableCell key={cellIndex}>{row[key]}</TableCell>
                  ) : null
                ))}
                {props.showStatus && (
                  <TableCell>
                    <StatusChip
                      label={row.status ? 'Active' : 'Inactive'}
                      colorchip={row.status ? '#17B26A' : 'red'}
                      backgroundColor={row.status ? '#ECFDF3' : '#FEF3F2'}
                      dotColor={row.status ? '#17B26A' : '#F04438'}
                      borderColor={row.status ? '#ABEFC6' : '#FECDCA'}
                    /> {/* Display StatusChip with 'Active' or 'Inactive' based on row.status */}
                  </TableCell>
                )}

                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <InfoOutlinedIcon onClick={() => props.onStatusChange(row)} />
                    <EditIcon onClick={() => props.onEditClick(row)} />
                    <DeleteIcon onClick={() => props.onDeleteClick(row)} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        rowsPerPage={rowsPerPage}
        totalRows={props.rows.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </>
  );
};

export default BasicTable;
