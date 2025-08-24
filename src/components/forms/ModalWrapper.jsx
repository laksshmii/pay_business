import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  Button,
  IconButton as MuiIconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DynamicForm from "@/Components/forms/DynamicForm";
import { styled } from "@mui/system";

// Styled components
const Dialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    overflowX: "hidden",
    width: "520px",
    fontFamily: "Lato, sans-serif",
  },
}));



const DialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontFamily: "Lato, sans-serif",
  fontWeight: 700,
  fontSize: "18px !important",
  lineHeight: "21.6px",
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  position: "absolute",
  right: 10,
  top: 8,
  color: "white",
}));

const DialogContent = styled(MuiDialogContent)(({ theme }) => ({
  overflowX: "hidden", // Hide horizontal scrollbar in DialogContent
  overflowY: "auto", // Allow vertical scrolling
  padding: theme.spacing(2),
  fontFamily: "Lato, sans-serif",
}));

const DialogActions = styled(MuiDialogActions)(({ theme }) => ({
  fontFamily: "Lato, sans-serif",
}));

const ModalWrapper = ({
  open,
  handleClose,
  initialValues,
  fields,
  onSubmit,
  label,
}) => {
  const theme = useTheme();

  return (
    <Dialog scroll="body" open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {label}
        <IconButton edge="end" color="primary" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <DynamicForm initialValues={initialValues} fields={fields} onSubmit={onSubmit} />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Close
        </Button>
        <Button
          sx={{
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.lighter,
            },
          }}
          type="submit"
          form="dynamic-form"
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWrapper;
