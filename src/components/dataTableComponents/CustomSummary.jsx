import React from "react";
import { Box, Typography } from "@mui/material";

const CustomSummary = ({
  keyName,
  keyColor = "black",
  keyFontWeight = "bold",
  value,
  valueColor = "black",
  valueFontWeight = "normal",
  fontSize = "16px",
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography
        sx={{
          color: keyColor,
          fontWeight: keyFontWeight,
          fontSize: fontSize,
          marginRight: "8px",
        }}
      >
        {keyName}:
      </Typography>
      <Typography
        sx={{
          color: valueColor,
          fontWeight: valueFontWeight,
          fontSize: fontSize,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default CustomSummary;
