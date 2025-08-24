import { blue, green, grey, red } from "@mui/material/colors";
import { pxToRem } from "./typography";
import { createBreakpoints } from "@mui/system";
const breakpoints = createBreakpoints({});
export const overrides = (theme) => ({
  overrides: {
    MuiTypography: {
      headline: {
        fontSize: pxToRem(24),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(32),
        },
      },
    },
  },
  MuiButton: {
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          textTransform: "none",
          borderRadius: "4px",
          " &:hover": {
            opacity: 0.8,
          },
        },
      },
    ],
  },

  // MuiInputBase: {
  //   styleOverrides: {
  //     root: {
  //       textTransform: "none",
  //       backgroundColor: theme.palette.BudgieThemeColor.BaseWhite,
  //       border: `1px solid ${theme.palette.BudgieThemeColor.Neutrals[100]}`,
  //       color: theme.palette.BudgieThemeColor.Neutrals[1200],
  //     },
  //   },
  // },

  // MuiOutlinedInput: {
  //   styleOverrides: {
  //     root: {

  //       "& .MuiOutlinedInput-notchedOutline": {
  //         border: `1px solid ${theme.palette.BudgieThemeColor.Neutrals[100]}`,
  //         borderColor: theme.palette.BudgieThemeColor.Neutrals[100],
  //       },
  //       "&:hover .MuiOutlinedInput-notchedOutline": {
  //         borderColor: theme.palette.BudgieThemeColor.Neutrals[100],
  //       },
  //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //         borderColor: theme.palette.BudgieThemeColor.Neutrals[100],
  //       },
  //     },
  //   },
  // },
  // MuiButton: {
  //   styleOverrides: {
  //     root: {
  //       borderRadius: "8px",
  //     },
  //     containedPrimary: {
  //       // Custom styles for the primary contained variant
  //       backgroundColor: theme.palette.BudgieThemeColor.Primary[1200],
  //       color: theme.palette.BudgieThemeColor.TextPrimary, // Set text color
  //       "&:hover": {
  //         backgroundColor: theme.palette.BudgieThemeColor.Primary[1100],
  //       },
  //     },
  //     containedSecondary: {
  //       // Custom styles for the secondary contained variant
  //       backgroundColor: theme.palette.BudgieThemeColor.Primary[500],
  //       color: theme.palette.BudgieThemeColor.TextSecondary, // Set text color
  //       "&:hover": {
  //         backgroundColor: theme.palette.BudgieThemeColor.Primary[600],
  //       },
  //     },
  //     containedError: {
  //       // Custom styles for the error contained variant
  //       backgroundColor: theme.palette.BudgieThemeColor.Error[500],
  //       color: theme.palette.BudgieThemeColor.TextError, // Set text color
  //       "&:hover": {
  //         backgroundColor: theme.palette.BudgieThemeColor.Error[600],
  //       },
  //     },
  //     containedInfo: {
  //       // Custom styles for the info contained variant
  //       backgroundColor: theme.palette.BudgieThemeColor.Info[500],
  //       color: theme.palette.BudgieThemeColor.Neutrals[100], // Set text color
  //       "&:hover": {
  //         backgroundColor: theme.palette.BudgieThemeColor.Primary[600],
  //         color: theme.palette.BudgieThemeColor.Neutrals[500],
  //       },
  //     },
  //     containedSuccess: {
  //       // Custom styles for the success contained variant
  //       backgroundColor: theme.palette.BudgieThemeColor.Success[500],
  //       color: theme.palette.BudgieThemeColor.TextSuccess, // Set text color
  //       "&:hover": {
  //         backgroundColor: theme.palette.BudgieThemeColor.Success[600],
  //       },
  //     },
  //     containedWarning: {
  //       // Custom styles for the warning contained variant
  //       backgroundColor: theme.palette.BudgieThemeColor.Warning[500],
  //       color: theme.palette.BudgieThemeColor.TextWarning, // Set text color
  //       "&:hover": {
  //         backgroundColor: theme.palette.BudgieThemeColor.Warning[600],
  //       },
  //     },
  //     outlinedPrimary: {
  //       // Custom styles for the primary outlined variant
  //       borderColor: theme.palette.BudgieThemeColor.Primary[500],
  //       color: theme.palette.BudgieThemeColor.TextPrimary, // Set text color
  //       "&:hover": {
  //         borderColor: theme.palette.BudgieThemeColor.Primary[600],
  //         color: theme.palette.BudgieThemeColor.TextPrimaryHover, // Set hover text color
  //       },
  //     },
  //     outlinedSecondary: {
  //       // Custom styles for the secondary outlined variant
  //       borderColor: theme.palette.BudgieThemeColor.Primary[500],
  //       color: theme.palette.BudgieThemeColor.TextSecondary, // Set text color
  //       "&:hover": {
  //         borderColor: theme.palette.BudgieThemeColor.Primary[600],
  //         color: theme.palette.BudgieThemeColor.TextSecondaryHover, // Set hover text color
  //       },
  //     },
  //     outlinedError: {
  //       // Custom styles for the error outlined variant
  //       borderColor: theme.palette.BudgieThemeColor.Error[500],
  //       color: theme.palette.BudgieThemeColor.Neutrals[100], // Set text color
  //       "&:hover": {
  //         borderColor: theme.palette.BudgieThemeColor.Error[600],
  //         color: theme.palette.BudgieThemeColor.TextErrorHover, // Set hover text color
  //       },
  //     },
  //     outlinedInfo: {
  //       // Custom styles for the info outlined variant
  //       borderColor: theme.palette.BudgieThemeColor.Primary[500],
  //       color: theme.palette.BudgieThemeColor.TextInfo, // Set text color
  //       "&:hover": {
  //         borderColor: theme.palette.BudgieThemeColor.Primary[600],
  //         color: theme.palette.BudgieThemeColor.TextInfoHover, // Set hover text color
  //       },
  //     },
  //     outlinedSuccess: {
  //       // Custom styles for the success outlined variant
  //       borderColor: theme.palette.BudgieThemeColor.Success[500],
  //       color: theme.palette.BudgieThemeColor.TextSuccess, // Set text color

  //       "&:hover": {
  //         borderColor: theme.palette.BudgieThemeColor.Success[600],
  //         color: theme.palette.BudgieThemeColor.TextSuccessHover, // Set hover text color
  //       },
  //     },
  //     sizeMedium: {
  //       height: "40px",
  //     },
  //   },
  // },
});
