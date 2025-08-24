import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, FormControl, FormLabel, Select, TextareaAutosize, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { styled } from '@mui/system';

// Styled components
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: '1rem',
  fontFamily: 'Lato, sans-serif',
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '19.2px',
  textAlign: 'left',
  fontFamily: 'Lato, sans-serif',
  color: "#413D3D",
  marginBottom: '0.5rem',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    height: '40px',
    padding: '0 14px',
    fontFamily: 'Lato, sans-serif',
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    padding: '8px',
    fontFamily: 'Lato, sans-serif',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    border: "1px solid #D8D8D8",
    outline: 'none',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D8D8D8',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#D8D8D8',
  },
}));

const StyledTextareaAutosize = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #D8D8D8',
  padding: '8px',
  boxSizing: 'border-box',
  resize: 'vertical',
  fontFamily: 'Lato, sans-serif',
}));

const ErrorText = styled('div')(({ theme }) => ({
  color: 'red',
  // marginTop: '0.5rem',
  fontFamily: 'Lato, sans-serif',
}));

const DynamicForm = ({ initialValues, fields, onSubmit, buttonType }) => {
  const generateValidationSchema = (fields) => {
    const shape = {};
    fields.forEach(field => {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'textArea':
          let validator = Yup.string();
          if (field.required) validator = validator.required('Required');
          if (field.type === 'email') validator = validator.email('Invalid email address');
          if (field.type === 'password') validator = validator.min(6, 'Password must be at least 6 characters');
          shape[field.name] = validator;
          break;
        case 'select':
          shape[field.name] = Yup.string().required('Required');
          break;
        case 'file':
          shape[field.name] = Yup.mixed().required('Required');
          break;
        case 'checkbox':
          shape[field.name] = Yup.boolean().oneOf([true], 'Required');
          break;
        default:
          break;
      }
    });
    return Yup.object().shape(shape);
  };

  const validationSchema = generateValidationSchema(fields);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched, setFieldValue }) => (
        <Form id="dynamic-form">
          {fields.map((field) => (
            <StyledFormControl key={field.name} fullWidth error={touched[field.name] && !!errors[field.name]}>
              {field.type !== 'checkbox' && (
            <StyledFormLabel>
            {field.label}
            {field.required && <span style={{ color: 'red' }}>*</span>}
          </StyledFormLabel>
              )}
              <Field name={field.name}>
                {({ field: formikField, meta }) => {
                  switch (field.type) {
                    case 'text':
                      return (
                        <>
                          <StyledTextField
                            {...formikField}
                            type={field.type}
                            placeholder={field.placeholder}
                            fullWidth
                            error={meta.touched && !!meta.error}
                            pattern="^[a-zA-Z0-9 ]+$"
                            InputProps={{
                              startAdornment: field.addon ? (
                                <InputAdornment position="start">
                                  {field.addon}
                                </InputAdornment>
                              ) : null,
                            }}
                          />
                          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
                        </>
                      );
                    case 'email':
                    case 'password':
                      return (
                        <>
                          <StyledTextField
                            {...formikField}
                            type={field.type}
                            placeholder={field.placeholder}
                            fullWidth
                            error={meta.touched && !!meta.error}
                          />
                          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
                        </>
                      );
                    case 'select':
                      return (
                        <>
                          <StyledSelect
                            {...formikField}
                            value={formikField.value || ''}
                            onChange={(event) => {
                              formikField.onChange(event);
                              setFieldValue(field.name, event.target.value);
                            }}
                            displayEmpty
                          >
                            <MenuItem value="" disabled>
                              {field.placeholder || "Select Document Type"}
                            </MenuItem>
                            {field.options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </StyledSelect>
                          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
                        </>
                      );
                    case 'textArea':
                      return (
                        <>
                          <StyledTextareaAutosize
                            {...formikField}
                            minRows={4}
                            placeholder={field.placeholder}
                            aria-label={field.placeholder || "Text Area"}
                            onChange={(event) => {
                              formikField.onChange(event);
                              setFieldValue(field.name, event.target.value);
                            }}
                          />
                          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
                        </>
                      );
                    case 'file':
                      return (
                        <>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Button
                              variant="contained"
                              component="label"
                              endIcon={<FileUploadOutlinedIcon />}
                              style={{ flexShrink: 0 }}
                            >
                              <input
                                hidden
                                type='file'
                                onChange={(event) => {
                                  setFieldValue(field.name, event.currentTarget.files[0]);
                                }}
                              />
                              File Upload
                            </Button>
                          </div>
                          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
                        </>
                      );
                    case 'checkbox':
                      return (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={formikField.value || false}
                                onChange={(event) => {
                                  setFieldValue(field.name, event.target.checked);
                                }}
                              />
                            }
                            label={field.label}
                          />
                          {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
                        </>
                      );
                    default:
                      return null;
                  }
                }}
              </Field>
            </StyledFormControl>
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
