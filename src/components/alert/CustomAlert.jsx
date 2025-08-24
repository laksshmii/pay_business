import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  fontFamily: "Lato, sans-serif",
  '& .MuiPaper-root': {
    overflowX: "hidden",
    maxWidth: "520px",
    width: "100%",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: "hsl(144, 38%, 27%)",
  color: "white",
  position: "relative",
  
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 15,
  top: 8,
  color: "white",
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  marginTop: "15px",
}));

const StyledDialogContentText = styled(DialogContentText)(({ theme }) => ({
  fontFamily: "Lato, sans-serif",
  fontSize: "18.42px",
  fontWeight: 500,
  lineHeight: "22.1px",
  textAlign: "left",
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  marginBottom: "15px",
}));

const CustomAlert = ({
  open,
  title,
  message,
  onCancel,
  onSubmit,
  cancelText,
  submitText,
}) => {
  // Determine the button color based on the submitText value
  const submitButtonColor = submitText === "Delete" ? "error" : "primary";

  return (
    <StyledDialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
    >
      <StyledDialogTitle id="alert-dialog-title">
        {title}
        <StyledIconButton edge="end" color="inherit" onClick={onCancel}>
          <CloseIcon />
        </StyledIconButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        <StyledDialogContentText sx={{ color: "#302D2D" }} id="alert-dialog-description">
          {message}
        </StyledDialogContentText>
      </StyledDialogContent>
      <StyledDialogActions>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button
            onClick={onCancel}
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "4px", width: "94px" }}
            size="large"
          >
            {cancelText}
          </Button>
          <Button
            onClick={onSubmit}
            variant="contained"
            color={submitButtonColor} // Conditional color
            size="large"
            sx={{ color: "white", borderRadius: "4px", width: "94px" }}
          >
            {submitText}
          </Button>
        </Box>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default CustomAlert;
