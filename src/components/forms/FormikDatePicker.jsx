import React from 'react';
import { TextField, FormControl } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import FormikLabel from './FormikLabel';
import { ErrorStyle } from './ErrorStyle';

const FormikDatePicker = ({
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
    <FormControl
      key={name}
      variant="outlined"
      sx={{
        marginBottom: 2,
        width,
      }}
    >
      <FormikLabel text={label} required={required} />
      <TextField
        {...field}
        id={name}
        name={name}
        type="date"
        variant="outlined"
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e); // Call the custom onChange handler if provided
          helpers.setValue(e.target.value); // Update Formik field value
        }}
        onBlur={() => helpers.setTouched(true)}
        value={field.value || ''}
        disabled={disabled}
        sx={{
          ...props.sx,
          "& .MuiInputBase-input": {
            padding: "7px",
            height: "100%",
            boxSizing: "border-box",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "4px",
            borderWidth: "1px",
          },
        }}
        InputLabelProps={{ shrink: true }} 
      />
      <ErrorMessage
        name={name}
        component="div"
        style={ErrorStyle}
      />
    </FormControl>
  );
};

// PropTypes for validation
FormikDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func, // PropType for onChange function
};

export default FormikDatePicker;
