import { defaultColor } from "@/themes/defaultColor";
import { colorPalette } from "@/themes/colorPalette";
import { shades } from "@/themes/shades";

export function palette() {
  return {
    ...defaultColor,
    BudgieThemeColor: {
      ...colorPalette,
      ...shades,
    },
    mode: "light",
    text: {
      primary: shades.Neutrals[1400],
      secondary: shades.Neutrals[600],
      warning: colorPalette.Warning,
      error: colorPalette.Error,
      disabled: shades.Neutrals[400],
      hint: shades.Neutrals[400],
      icon: shades.Neutrals[600],
      link: shades.Primary[500],
      inverse: shades.Neutrals[100],
      inverseSecondary: shades.Neutrals[100],
      inverseText: shades.Primary.main,
    },
    background: {
      paper: shades.Neutrals[100], // Background color for paper elements
      default: colorPalette.Secondary, // Default background color
      neutral: shades.Neutrals[400], // Neutral background color
    },
    action: {
      ...defaultColor.action,
      active: shades.Neutrals[600], // Active action color
    },
    gradient: {
      primary: `linear-gradient(to right, ${shades.Primary[1100]}, ${shades.Primary[1200]})`,
      secondary: `linear-gradient(to right, ${shades.Secondary[100]}, ${shades.Secondary[500]})`,
      info: `linear-gradient(to right, ${shades.Info[100]}, ${shades.Info[500]})`,
      success: `linear-gradient(to right, ${shades.Success[100]}, ${shades.Success[500]})`,
      warning: `linear-gradient(to right, ${shades.Warning[100]}, ${shades.Warning[500]})`,
      error: `linear-gradient(to right, ${shades.Error[100]}, ${shades.Error[500]})`,
    },
    customStyles: {
      gradientBackground: "linear-gradient(180deg, #FFFFFF 0%, #EAF5EE 100%)",
    },
    divider: shades.Neutrals[200],
  };
}
