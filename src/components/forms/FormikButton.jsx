import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import PropTypes from "prop-types";

// Define the button styles using the styled function
const CustomStyledButton = styled(Button)(
  ({ theme, size, variant, customVariant }) => {
    const isClearVariant = variant === "outlined" || variant === "text";
    const isDeleteVariant = customVariant === "delete";

    const sizeStyles = {
      small: {
        minWidth: "40px",
        height: "36px",
        fontSize: "0.875rem",
      },
      medium: {
        minWidth: "80px",
        height: "36px",
        fontSize: "1rem", 
      },
      large: {
        minWidth: "120px",
        height: "48px",
        fontSize: "1.125rem", // Larger text
      },
    };

    return {
      ...sizeStyles[size],
      padding: theme.spacing(1, 2),
      gap: theme.spacing(1),
      // borderRadius: 8,
      backgroundColor: isDeleteVariant
        ? "rgba(255, 0, 0, 0.05)" 
        : isClearVariant
        ? "transparent"
        : theme.palette.primary.main,
      color: isDeleteVariant
        ? "red" // Custom text color for delete
        : isClearVariant
        ? theme.palette.primary.main
        : theme.palette.primary.contrastText,
      border: isDeleteVariant
        ? "1px solid red" // Custom border for delete
        : isClearVariant
        ? "1px solid #3E8A5D"
        : "1px solid transparent",
      boxShadow: isClearVariant ? "0px 4px 12px 4px #E9E9E980" : "none",

      "&:hover": {
        
        backgroundColor: isDeleteVariant
          ? "rgba(255, 0, 0, 0.1)" // Light red background on hover for delete
          : isClearVariant
          ? "transparent"
          : theme.palette.primary.dark,
        opacity: isClearVariant ? 1 : 0.9,
        border: isDeleteVariant
          ? "1px solid red" // Custom border for delete
          : isClearVariant
          ? "1px solid #3E8A5D"
          : "1px solid transparent",    
      },
      "&:focus": {
        outline: `2px solid ${theme.palette.primary.main}`,
      },
    };
  }
);

const FormikButton = ({
  type,
  label,
  variant,
  size,
  customVariant,
  onClick,
  sx,
  ...props
}) => {

    console.log("customVariant", customVariant);
    
  const formik = useFormikContext();

  const handleClick = () => {
    if (type === "submit") {
      formik.submitForm();
    } else if (type === "reset") {
      formik.resetForm();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <CustomStyledButton
      type={type === "submit" || type === "reset" ? type : "button"}
      variant={variant}
      size={size}
      customVariant={customVariant}
      onClick={handleClick}
      sx={{ marginRight: "8px", ...sx }}
      {...props}
    >
      {label}
    </CustomStyledButton>
  );
};

// Define PropTypes for FormikButton
FormikButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  label: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  customVariant: PropTypes.oneOf(["delete"]), // Include custom variants here
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

FormikButton.defaultProps = {
  type: "button",
  label: "Submit",
  variant: "contained",
  customVariant: undefined,
  size: "medium",
  onClick: () => {},
  sx: {},
};

export default FormikButton;
