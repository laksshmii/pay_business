import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { palette } from "@/themes/palette";
import { shadows } from "@/themes/shadows";
import { typography } from "@/themes/typography";
import { Radius } from "@/themes/radius";
import { overrides } from "@/themes/overrides"; // Assuming this is the correct path
import { spacing } from "@/themes/spacing";

export default function ThemeProvider({ children }) {
  const memoizedValue = useMemo(
    () => ({
      "@global": {
        "@font-face": typography.fontFamily,
      },
      palette: palette(),
      typography,
      shadows: shadows(),
      shape: Radius,

      spacing: (factor) => {
        if (typeof factor === "string" && spacing[factor] !== undefined) {
          return spacing[factor];
        }
        return factor * 8;
      },
    }),
    []
  );

  const theme = createTheme(memoizedValue, {});

  // Uncomment if you need to apply component overrides
  theme.components = overrides(theme);

  console.log(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
