import React from "react";
import PropTypes from "prop-types";
import { Select, MenuItem, FormControl } from "@mui/material";
import { useField, ErrorMessage } from "formik";
import { styled } from "@mui/material/styles";
import FormikLabel from "./FormikLabel";
import { ErrorStyle } from "./ErrorStyle";

// Styled component to reduce height
const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
  },
  "& .MuiSelect-select:focus": {
    // backgroundColor: "lightblue", // If you want the background color on focus as well
  },
}));

const FormikSelectInput = ({
  name,
  label,
  options,
  width = "100%",
  required = false,
  placeholder = "",
  onChange = () => {}, // Default onChange function
  sx = {}, // Default sx prop as an empty object
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl fullWidth sx={{ marginBottom: "16px", width, ...sx }}>
      <FormikLabel text={label} required={required} />
      <CustomSelect
        {...field}
        {...props}
        value={field.value || ""}
        onChange={(e) => {
          onChange(e); // Call the custom onChange handler if provided
          helpers.setValue(e.target.value); // Update Formik field value
        }}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            key={typeof option === "string" ? option : option.value}
            value={typeof option === "string" ? option : option.value}
          >
            {typeof option === "string" ? option : option.label}
          </MenuItem>
        ))}
      </CustomSelect>

      <div style={ErrorStyle}>
        <ErrorMessage name={name} />
      </div>
    </FormControl>
  );
};

// PropTypes for validation
FormikSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  sx: PropTypes.object, // PropType for sx
};

export default FormikSelectInput;
