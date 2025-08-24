import React from "react";
import PropTypes from "prop-types";
import { useField, ErrorMessage } from "formik";
import { FormControl, Select, MenuItem, Chip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import FormikLabel from "./FormikLabel";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: 4,
  },
}));

const FormikMultipleSelectChip = ({
  name,
  label,
  options,
  placeholder = "",
  required = false,
  disabled = false,
  width = "100%",
  onChange = () => {}, // Default to an empty function
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    helpers.setValue(typeof value === "string" ? value.split(",") : value);
    onChange(event);
  };

  const handleDelete = (chipToDelete) => () => {
    helpers.setValue(field.value.filter((value) => value !== chipToDelete));
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      style={{ width, marginBottom: "16px" }}
      error={!!meta.error && meta.touched}
    >
      <FormikLabel text={label} required={required} />
      <CustomSelect
        {...field}
        multiple
        value={field.value || []}
        onChange={handleChange}
        displayEmpty
        disabled={disabled}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder}</em>;
          }
          return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={
                    options.find((option) => option.value === value)?.label
                  }
                  style={{ margin: "2px" }}
                  clickable
                  deleteIcon={
                    <CancelIcon
                      onMouseDown={(event) => event.stopPropagation()}
                    />
                  }
                  onDelete={handleDelete(value)}
                />
              ))}
            </div>
          );
        }}
      >
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
      <div style={{ color: "red" }}>
        <ErrorMessage name={name} />
      </div>
    </FormControl>
  );
};

FormikMultipleSelectChip.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  onChange: PropTypes.func, // Add onChange to PropTypes
};


export default FormikMultipleSelectChip;
