import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import FormikLabel from './FormikLabel';
import { ErrorStyle } from './ErrorStyle';

const FormikTextInput = ({
  name,
  label,
  width = '100%',
  required = false,
  placeholder = '',
  disabled = false,
  onChange = () => {}, // Default onChange function
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div style={{ marginBottom: '16px', width }}>
      <FormikLabel text={label} required={required} />
      <TextField
        {...field}
        {...props}
        placeholder={placeholder}
        fullWidth
        disabled={disabled}
        onChange={(e) => {
          onChange(e); 
          helpers.setValue(e.target.value);
        }}
        sx={{
          ...props.sx,
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            borderWidth: "1px",
          },
          "& .MuiInputBase-input": {
            backgroundColor: disabled ? "#f5f5f5" : "inherit",
            padding: "8px", 
          },
        }}
      />
      <div style={ErrorStyle}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

// PropTypes for validation
FormikTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func, 
};

export default FormikTextInput;
