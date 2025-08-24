import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import CustomPagination from "@/components/dataTableComponents/CustomPagination"; // Ensure correct path
import TableSearch from "@/pages/payroll/component/table/tableSearch";

const DataTable = ({
  columns,
  rows,
  checkboxSelection,
  headerCheckboxVisibility,
  onRowClick,
  headerBgColor,
  page,
  rowsPerPage,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
  colvis,
  searchBar,
  handleToggleColumn,
  visibleColumns,
  colvisColumns,
  index // New prop for showing serial numbers
}) => {
  // Ensure page and rowsPerPage are numbers
  const currentPage = Number(page) || 1; // Default to 1 if page is NaN
  const itemsPerPage = Number(rowsPerPage) || 10; // Default to 10 if rowsPerPage is NaN

  // Add S.No column conditionally
  const modifiedColumns = index
    ? [
        {
          field: "sno",
          headerName: "S.No",
          width: 70,
          renderCell: (params) => {
            // Calculate serial number
            const serialNumber = (params.row.__rowNumber || 0) + 1 + (currentPage - 1) * itemsPerPage;
            return serialNumber;
          },
        },
        ...columns,
      ]
    : columns;

  return (
    <Box sx={{ mt: 2 }}>
      <TableSearch
        headers={modifiedColumns}
        handleToggleColumn={handleToggleColumn}
        colvis={colvis}
        visibleColumns={visibleColumns}
        searchBar={searchBar}
        colvisColumns={colvisColumns}
      />
      <DataGrid
        rows={rows.map((row, index) => ({
          ...row,
          __rowNumber: index,
        }))}
        columns={modifiedColumns}
        checkboxSelection={checkboxSelection}
        disableColumnMenu
        disableColumnSorting
        onRowClick={onRowClick}
        hideFooterPagination
        hideFooter
        autoHeight
        sx={{
          "&.MuiDataGrid-root": {
            border: "none",
          },
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          ".MuiDataGrid-cell:focus": {
            outline: "none",
          },
          ".MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "inherit !important",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "inherit",
          },
          ".MuiDataGrid-columnHeader": {
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: headerBgColor || "#EAF5EE",
            borderBottom: "1px solid rgba(224, 224, 224, 1)",
          },
          ".MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
          ".MuiDataGrid-columnHeader:focus-within": {
            outline: "none",
          },
          ...(headerCheckboxVisibility === false && {
            ".MuiDataGrid-columnHeaderCheckbox": {
              visibility: "hidden",
              width: "24px",
              height: "24px",
            },
            ".MuiDataGrid-columnHeader--checkbox": {
              "&::before": {
                content: '""',
                display: "inline-block",
                width: "24px",
                height: "24px",
                backgroundColor: headerBgColor || "#EAF5EE",
              },
            },
          }),
        }}
      />
      <Box sx={{ mt: 2 }}>
        <CustomPagination
          page={currentPage}
          rowsPerPage={itemsPerPage}
          totalRows={totalRows}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Box>
    </Box>
  );
};

export default DataTable;
