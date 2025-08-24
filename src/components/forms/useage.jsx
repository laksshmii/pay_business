import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextInput from "@/components/forms/FormikTextInput";
import FormikSelectInput from "@/components/forms/FormikSelectInput";
import FormikDatePicker from "@/components/forms/FormikDatePicker";
import FormikTextarea from "@/components/forms/FormikTextarea";
import FormikFileUpload from "@/components/forms/FormikFileUpload";
import { Grid } from "@mui/material";
import DialogForm from "@/components/modal/DialogForm";
import CustomButton from "@/components/buttons/CustomButton";
import FormikCheckbox from "@/components/forms/FormikCheckbox";
import FormikMultipleSelectChip from "@/components/forms/FormikMultipleSelectChip";
import FormikPasswordInput from "@/components/forms/FormikPasswordInput";
import FormikRadioGroup from "@/components/forms/FormikRadioGroup";
import FormikMonthYearPicker from "./FormikMonthYearPicker";

const Usage = ({ title, open, setOpen }) => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const state = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Karnataka", label: "Karnataka" },
  ];

  const validationSchema = Yup.object({
    occasion: Yup.string().required("Please Enter the Occasion!"),
    restrictedHoliday: Yup.string().required(
      "Please Select the Restricted Holiday!"
    ),
    state: Yup.string().required("Please Select the State!"),
    location: Yup.string().required("Please Enter the Location!"),
    description: Yup.string().required("Please Enter the Description!"),
    file: Yup.mixed().required("A file is required"),
    date: Yup.date().required("Please Enter the Birthdate!"),
    agreeToTerms: Yup.bool().oneOf([true], "You must agree to the terms"),
    monthPicker: Yup.date().required("Please Enter the month!"),
    yearPicker: Yup.date().required("Please Enter the year!"),

  });

  const handleSubmit = (values) => {
    alert("Form submitted");
    console.log("Form Values:", values);
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

  // file accepted File Formats
  const acceptedFileFormats = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/msword",
  ];
  // file upload
  const customHandleFileChange = (
    event,
    file,
    helpers,
    setFileName,
    setFileError
  ) => {
    console.log("file", file);

    if (file) {
      if (acceptedFileFormats.includes(file.type)) {
        helpers.setValue(file);
        setFileName(file.name);
        setFileError("");
      } else {
        helpers.setValue(null);
        setFileName("");
        setFileError(
          "Invalid file type. Please select a JPG, JPEG, PNG, PDF, or DOC file."
        );
      }
    } else {
      helpers.setValue(null);
      setFileName("");
      setFileError("");
    }
  };



  const multipleSelect = [
    { value: "reading", label: "Reading" },
    { value: "traveling", label: "Traveling" },
    { value: "coding", label: "Coding" },
  ];

    // submit button
    const buttons = [
      {
        type: "reset",
        label: "Reset",
        variant: "contained",
        customVariant: "delete",
        size: "medium",

      },
    ];

  return (
    <DialogForm title={title} open={open} setOpen={setOpen} width={"md"}>
      {" "}
      <Formik
        initialValues={{
          occasion: "",
          restrictedHoliday: "",
          state: "",
          location: "",
          description: "",
          file: null,
          date: "",
          agreeToTerms: false,
          multipleSelect: [],
          monthPicker: "",
          yearPicker: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormikTextInput
                  name="occasion"
                  label="Occasion"
                  width="100%"
                  required
                  placeholder="Holiday Name"
                  onChange={(event) => {
                    console.log("FormikTextInput:", event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormikSelectInput
                  name="restrictedHoliday"
                  label="Restricted Holiday"
                  options={genderOptions}
                  placeholder="Select Restricted Holiday"
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormikSelectInput
                  name="state"
                  label="State"
                  options={state}
                  placeholder="Select State"
                  required
                  // onChange={(event) => {
                  //   console.log("Custom onChange event:", event.target.value);
                  // }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormikSelectInput
                  name="location"
                  label="Location"
                  options={state}
                  placeholder="Select Location"
                  required
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormikTextarea
                  name="description"
                  label="Description"
                  placeholder="Enter your Description"
                  rows={2}
                  required
                  onChange={(event) => {
                    console.log("Custom onChange event:", event.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormikFileUpload
                  placeholder="Choose File"
                  name="file"
                  label="File"
                  required
                  width="60%"
                  handleChange={customHandleFileChange}
                />
                <FormikPasswordInput
                  onChange={(event) => {
                    console.log("Custom onChange event:", event.target.value);
                  }}
                  // disabled={true}
                  name="password"
                  label="Password"
                  width="75%"
                  required
                  placeholder="Enter your password"
                />
              </Grid>

              <Grid item xs={12}>
                <FormikMultipleSelectChip
                  name="multipleSelect"
                  label="Select Options"
                  options={multipleSelect}
                  required
                  placeholder="Select your options"
                  onChange={(event) => console.log("Custom onChange:", event)}
                />
              </Grid>

              <FormikRadioGroup
                name="gender"
                label="Gender"
                options={genderOptions}
                required
                onChange={(event) => console.log("Custom onChange:", event)}
              />
            </Grid>

            <FormikCheckbox
              onClick={(event) => {
                console.log("Checkbox clicked:", event);
              }}
              name="agreeToTerms"
              label="I agree to the terms"
            />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormikDatePicker
                  name="date"
                  label="Date"
                  width="50%"
                  required
                  onChange={(event) => console.log("Custom onChange:", event)}
                />
              </Grid>
            </Grid>

            <Grid>
              <Grid item xs={12} sm={6}>
                <FormikMonthYearPicker
                  name="monthPicker"
                  label="Select Month"
                  pickerType="month"
                  required
                  placeholder="Select Month"
                  onChange={(newValue) =>
                    console.log("Custom Month Picker Value:", newValue)
                  }
                />

                <FormikMonthYearPicker
                  name="yearPicker"
                  placeholder="Select Year"
                  label="Select Year"
                  pickerType="year"
                  required
                  onChange={(newValue) =>
                    console.log("Custom Year Picker Value:", newValue)
                  }
                />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6} container justifyContent="flex-end">
              {buttons.map((btn, index) => (
                <FormikButton
                  key={index}
                  type={btn.type || "button"}
                  label={btn.label || "Button"}
                  variant={btn.variant || "contained"}
                  size={btn.size || "medium"}
                  customVariant={btn.customVariant || null}
                  onClick={() => {
                    if (btn.type === "reset") {
                      resetForm();
                    } else if (btn.onClick) {
                      btn.onClick();
                    }
                  }}
                />
              ))}
            </Grid>

            
          </Form>
        )}
      </Formik>
    </DialogForm>
  );
};

export default Usage;
