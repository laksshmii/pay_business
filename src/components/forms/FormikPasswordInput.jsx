import React from 'react';
import { TextField } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import FormikLabel from './FormikLabel';
import { ErrorStyle } from './ErrorStyle'; 

const FormikPasswordInput = ({
  name,
  label,
  width = '100%',
  required = false,
  placeholder = '',
  disabled = false,
  onChange = () => {}, 
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div style={{ marginBottom: '16px', width }}>
      <FormikLabel text={label} required={required} />
      <TextField
        {...field}
        {...props}
        type="password"
        placeholder={placeholder}
        disabled={disabled}
        fullWidth
        sx={{
          ...props.sx,
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            borderWidth: "1px",
          },
          "& .MuiInputBase-input": {
            padding: "8px",
            backgroundColor: disabled ? "#f5f5f5" : "inherit",
          },
        }}
        onChange={(e) => {
          onChange(e);
          helpers.setValue(e.target.value); 
        }}
      />
      <div style={ErrorStyle}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

// PropTypes for validation
FormikPasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func, 
};

export default FormikPasswordInput;
