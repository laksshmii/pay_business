import { alpha } from "@mui/material/styles";
import { shades } from "@/themes/shades";

export const defaultColor = {
  primary: {
    main: shades.Primary[1200],
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: shades.Secondary.main,
    contrastText: "#000000",
  },
  success: {
    main: shades.Success.main,
    contrastText: "#000000",
  },
  info: {
    main: shades.Info.main,
    contrastText: "#000000",
  },
  warning: {
    main: shades.Warning.main,
    contrastText: "#000000",
  },
  error: {
    main: shades.Error.main,
    contrastText: "#000000",
  },
  neutrals: shades.Neutrals,
  divider: alpha("#737373", 0.2),
  action: shades.action,
};
