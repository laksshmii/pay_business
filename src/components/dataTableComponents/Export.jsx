import React, { useState } from "react";
import { Button} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DownloadIcon } from "@/icons";

const Export = ({ handleToggleColumn, visibleColumns, colvisColumns }) => {
  // const theme = useTheme();
  return (
    <>
      <Button
        
        sx={(theme) => ({
          backgroundColor: theme.palette.BudgieThemeColor.Warning[100],
          minWidth: "auto",
          border: `1px solid ${theme.palette.BudgieThemeColor.Warning[600]}`,
          color:theme.palette.BudgieThemeColor.Warning[600],
          boxShadow: `${theme.shadows[1]}`,
          "&:hover": {
            backgroundColor: theme.palette.BudgieThemeColor.Warning[100],
          },
        })}
        variant="contained"
        
        startIcon={
           <DownloadIcon/> 
        }
      >
        Export
      </Button>
    </>
  );
};

export default Export;
