import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  useTheme,
  IconButton as MuiIconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import previewpng from "../../assets/img/profile.png";

const PreviewFile = ({
  title,
  open,
  setOpen,
  message,
  data,
  width, // sx,sm,md,lg,xl
  children
}) => {

  const Dialog = styled(MuiDialog)(({ theme, dialogWidth }) => ({
    "& .MuiPaper-root": {
      overflowX: "hidden",
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
    overflowX: "hidden",
    overflowY: "auto",
    padding: theme.spacing(2),
    fontFamily: "Lato, sans-serif",
  }));
 
  console.log(data);
//   const fileExtension = data?.split('.').pop().toLowerCase();
  const fileExtension = typeof data === 'string' ? data.split('.').pop().toLowerCase() : '';

  console.log(fileExtension);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      scroll="body"
      open={open}
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        Documents
        <IconButton
          edge="end"
          color="primary"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ marginTop: "16px" }}>
        {fileExtension !== "png" ? (
            <img
            src={previewpng}
            width="100%"
            height="550px"
            alt="Image Viewer"
            />
        ) : (
            <iframe
            src={``}
            width="100%"
            height="550px"
            title="PDF Viewer"
            ></iframe>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PreviewFile;
