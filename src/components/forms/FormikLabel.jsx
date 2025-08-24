// src/components/FormikLabel.js

import React from "react";
import { Typography } from "@mui/material";

const FormikLabel = ({ text, required = false, ...props }) => (
  <Typography
    variant="subtitle1"
    component="label"
    {...props}
    sx={{
      ...props.sx,
      fontWeight: 700,
      marginBottom: "5px",
      display: "block",
      fontSize: "16px",
      fontFamily: "Lato",
    }}
  >
    {text}
    {required && <span style={{ color: "red" }}> *</span>}
  </Typography>
);

export default FormikLabel;
