import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton as MuiIconButton,
  Typography,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  topScrollPaper: {
    alignItems: "flex-start",
  },
  topPaperScrollBody: {
    verticalAlign: "top",
  },
});
// Styled components
const Dialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    overflowX: "hidden",
    fontFamily: "Lato, sans-serif",
    margin: theme.spacing(2),
  },
}));

const DialogTitle = styled(MuiDialogTitle)(({ theme, spacing }) => ({
  position: "relative",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontFamily: "Lato, sans-serif",
  fontWeight: 700,
  fontSize: "18px !important",
  lineHeight: "21.6px",
  padding: spacing ? theme.spacing(spacing) : theme.spacing(2),
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  position: "absolute",
  right: 10,
  top: 10,
  color: theme.palette.primary.contrastText,
}));

const DialogContent = styled(MuiDialogContent)(({ theme, padding }) => ({
  overflowX: "hidden",
  overflowY: "auto",
  padding: padding ? theme.spacing(padding) : theme.spacing(2),
  fontFamily: "Lato, sans-serif",
}));

const DialogForm = ({
  title,
  open,
  setOpen,
  message,
  width,
  padding,
  spacing,
  position,
  children,
}) => {  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      disableEnforceFocus
      keepMounted
      fullWidth
      scroll="body"
      open={open}
      onClose={handleClose}
      maxWidth={width}
      classes={{
        scrollPaper: position === "top" ? classes.topScrollPaper : undefined,
        paperScrollBody: position === "top" ? classes.topPaperScrollBody : undefined,
      }}
    >
      <DialogTitle spacing={spacing}>
        {title}
        <IconButton edge="end" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {message && (
        <Typography
          sx={{
            marginLeft: spacing ? spacing * 8 : "16px",
            mt: spacing || "16px",
          }}
        >
          {message}
        </Typography>
      )}
      <DialogContent
        padding={padding}
        sx={{ mt: spacing || "16px" }}
        component={Paper}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
