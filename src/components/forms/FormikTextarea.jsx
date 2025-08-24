import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import FormikLabel from './FormikLabel';

import { ErrorStyle } from './ErrorStyle';

const FormikTextarea = ({
  name,
  label,
  width = '100%',
  required = false,
  placeholder = '',
  rows = 4,
  onChange = () => {}, // Default onChange function
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event) => {
    // Call the default onChange function or custom onChange if provided
    onChange(event);
    field.onChange(event);
  };

  return (
    <div style={{ marginBottom: '16px', width }}>
      <FormikLabel text={label} required={required} />
      <TextField
        {...field}
        {...props}
        placeholder={placeholder}
        multiline
        rows={rows}
        fullWidth
        onChange={handleChange} // Use the custom handleChange function
        sx={{
          ...props.sx,
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            borderWidth: "1px",
          },
        }}
      />
      <div style={ErrorStyle}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

FormikTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func,
};

FormikTextarea.defaultProps = {
  width: '100%',
  required: false,
  placeholder: '',
  rows: 4,
  onChange: () => {}, // Default onChange function
};

export default FormikTextarea;
