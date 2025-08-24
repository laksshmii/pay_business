import React from "react";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TablePagination = ({ page, rowsPerPage, totalRows, onPageChange, onRowsPerPageChange }) => {
  const handleChangePage = (event, newPage) => {
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    onRowsPerPageChange(event.target.value);
  };

  const startIndex = (page - 1) * rowsPerPage + 1;
  const endIndex = Math.min(page * rowsPerPage, totalRows);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        mt: 2,
        "& .MuiBox-root": {
          padding: 0,
        }
      }}
    >
      <Typography>
        Displaying {startIndex} to {endIndex} of {totalRows} records
      </Typography>
      <Pagination
        count={Math.ceil(totalRows / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        sx={{
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#34754F', 
            color: 'white',
          },
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography>Show</Typography>
        <FormControl
          sx={{
            mx: 2,
            minWidth: 60,
            maxHeight: "32px",
            padding: "0px",
            "& .MuiInputBase-root": {
              padding: "0px",
              height: "32px"
            },
            "& .MuiSelect-select": {
              padding: "8px 14px"
            }
          }}
        >
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            autoWidth
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <Typography>entries</Typography>
      </Box>
    </Box>
  );
};

export default TablePagination;
