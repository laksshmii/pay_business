import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, FormControl, Typography } from "@mui/material";
import { useField, ErrorMessage } from "formik";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FormikLabel from "./FormikLabel";
import { ErrorStyle } from "./ErrorStyle";

const FormikFileUpload = ({
  placeholder = "",
  name,
  label,
  required = false,
  disabled = false,
  width = "100%",
  handleChange: customHandleChange,
  acceptedFileFormats = [],
  icon = <FileUploadOutlinedIcon />, // Default icon
  ...props
}) => {
  const [field, meta, helpers] = useField({ name, type: "file" });
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    if (customHandleChange) {
      customHandleChange(
        event,
        file,
        helpers,
        setFileName,
        setFileError,
        acceptedFileFormats
      );
    } else {
      if (file) {
        if (acceptedFileFormats.includes(file.type)) {
          helpers.setValue(file);
          setFileName(file.name);
          setFileError("");
        } else {
          helpers.setValue(null);
          setFileName("");
          setFileError(
            "Invalid file type. Please select a JPG, JPEG, PNG, PDF, or DOC file."
          );
        }
      } else {
        helpers.setValue(null);
        setFileName("");
        setFileError("");
      }
    }
  };

  useEffect(() => {
    if (field.value) {
      setFileName(field.value.name);
    } else {
      setFileName("");
    }
  }, [field.value]);

  return (
    <FormControl
      variant="outlined"
      sx={{
        marginBottom: 2,
        width: width,
      }}
    >
      <FormikLabel text={label} required={required} />
      <input
        accept=".jpg,.jpeg,.png,.pdf,.doc"
        id={name}
        type="file"
        name={name}
        style={{ display: "none" }}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <label htmlFor={name}>
        <Button
          component="span"
          endIcon={icon} // Position the icon at the end
          fullWidth
          sx={{
            display: "flex",
            justifyContent: "space-between", // Ensure the text and icon are spaced out
            border: "1px solid #D8D8D8",
            color: "#000000",
            textAlign: "left",
            alignItems: "center",
            gap: 1, // Adds spacing between text and icon
            flexDirection: "row", // Ensure text is on the left and icon on the right
          }}
        >
          {fileName || placeholder}
        </Button>
      </label>
      {fileError && (
        <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
          {fileError}
        </Typography>
      )}
      <div style={ErrorStyle}>
        <ErrorMessage name={name} />
      </div>
    </FormControl>
  );
};

// Define propTypes
FormikFileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  handleChange: PropTypes.func,
  acceptedFileFormats: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.element, // Accept icon as a React element
};

// Define defaultProps
FormikFileUpload.defaultProps = {
  required: false,
  disabled: false,
  width: "100%",
  handleChange: null,
  acceptedFileFormats: [],
  icon: <FileUploadOutlinedIcon />, // Default icon
};

export default FormikFileUpload;
