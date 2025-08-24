import React from 'react';
import { TextField, FormControl } from '@mui/material';
import { useField, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import FormikLabel from './FormikLabel';
import { ErrorStyle } from './ErrorStyle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format, parse } from 'date-fns';

const FormikMonthYearPicker = ({
  name,
  label,
  width = '100%',
  required = false,
  placeholder = '',
  disabled = false,
  pickerType = 'month', // 'month' or 'year'
  onChange = (formattedValue) => {
    console.log(`Selected value for ${name}:`, formattedValue);
  }, 
  ...props
}) => {
  const [field, , helpers] = useField(name);
  const pickerViews = pickerType === 'year' ? ['year'] : ['year', 'month'];
  const formatString = pickerType === 'year' ? 'yyyy' : 'yyyy-MM';

  const value = field.value ? parse(field.value, formatString, new Date()) : null;

  const handleDateChange = (newValue) => {
    console.log(`Selected value for ${name}:`, newValue);
    
    if (newValue) {
      const formattedValue = format(newValue, formatString);
      onChange(formattedValue); 
      helpers.setValue(formattedValue); 
    } else {
      onChange(''); d
      helpers.setValue('');
    }
  };

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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={pickerViews}
          openTo="month" 
          value={value} // Use value for the DatePicker
          onChange={(newValue) => handleDateChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              {...field}
              id={name}
              name={name}
              variant="outlined"
              placeholder={placeholder}
              onBlur={() => helpers.setTouched(true)}
              disabled={disabled}
              sx={{
                ...props.sx,
                "& .MuiInputBase-input": {
                  padding: "8px",
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
          )}
        />
      </LocalizationProvider>
      <ErrorMessage
        name={name}
        component="div"
        style={ErrorStyle}
      />
    </FormControl>
  );
};

// PropTypes for validation
FormikMonthYearPicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  pickerType: PropTypes.oneOf(['month', 'year']), // Allow either 'month' or 'year'
  onChange: PropTypes.func, // PropType for onChange function
};

export default FormikMonthYearPicker;
