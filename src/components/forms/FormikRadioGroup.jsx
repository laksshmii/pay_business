import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import FormikLabel from './FormikLabel';
import { ErrorStyle } from './ErrorStyle';

const FormikRadioGroup = ({
  name,
  label,
  options,
  required = false,
  disabled = false,
  onChange = () => {}, // Default onChange function
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl
      component="fieldset"
      style={{ marginBottom: '16px' }}
      error={!!meta.error && meta.touched}
    >
      <FormikLabel text={label} required={required} />
      <RadioGroup
        {...field}
        {...props}
        value={field.value || ''}
        onChange={(e) => {
          onChange(e); // Call the custom onChange handler if provided
          helpers.setValue(e.target.value); // Update Formik field value
        }}
        row // Add this line to arrange radio buttons horizontally
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                disabled={disabled}
                sx={{
                  ...props.sx,
                  "& .MuiSvgIcon-root": {
                    color: disabled ? "#bdbdbd" : "inherit",
                  },
                }}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
      <div style={ErrorStyle}>
        <ErrorMessage name={name} />
      </div>
    </FormControl>
  );
};

// PropTypes for validation
FormikRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func, // PropType for onChange function
};

export default FormikRadioGroup;
