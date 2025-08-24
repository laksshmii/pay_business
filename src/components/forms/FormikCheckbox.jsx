import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { useField, ErrorMessage } from "formik";


const FormikCheckbox = ({
  name,
  label,
  disabled = false,
  onClick = () => {},
  ...props
}) => {
  const [field, meta, helpers] = useField({ name, type: "checkbox" });

  const handleChange = (event) => {
    helpers.setValue(event.target.checked);
    onClick(event); // Call onClick function, which defaults to a no-op if not provided
  };

  return (
    <FormControl component="fieldset" style={{ marginBottom: "10px" }}>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            {...props}
            checked={field.value}
            onChange={handleChange}
            disabled={disabled}
          />
        }
        label={label}
      />

      <div style={{ color: "#EF4444", fontSize: "14px" }}>
        <ErrorMessage name={name} />
      </div>
    </FormControl>
  );
};

FormikCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

FormikCheckbox.defaultProps = {
  
  disabled: false,
  onClick: () => {}, 


};

export default FormikCheckbox;
