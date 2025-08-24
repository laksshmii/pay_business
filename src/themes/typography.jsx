// Convert rem units to px units
export function remToPx(value) {
  return Math.round(parseFloat(value) * 16); // Assuming the base font size is 16px
}

// Convert px units to rem units
export function pxToRem(value) {
  return `${value / 16}rem`; // Converts px to rem based on a 16px base font size
}

// Generate responsive font sizes based on breakpoints
export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm), // Apply small screen font size
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md), // Apply medium screen font size
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg), // Apply large screen font size
    },
  };
}

// Define primary and secondary fonts
export const primaryFont = "Lato";
export const secondaryFont = "Barlow, sans-serif";

// Define heading styles
export const Headings = {
  display1: {
    fontSize: "144px", // Large display heading
    fontWeight: "bold",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  display2: {
    fontSize: "96px", // Slightly smaller display heading
    fontWeight: "bold",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  display3: {
    fontSize: "48px", // Medium display heading
    fontWeight: "bold",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
  display4: {
    fontSize: "32px", // Smaller display heading
    fontWeight: "bold",
    lineHeight: 1.5,
    letterSpacing: "normal",
  },
};

// Define body text styles with different emphasis levels
export const Body = {
  HeroBold: {
    fontSize: "28px", // Large body text with bold emphasis
    fontWeight: "bold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HeroAccent: {
    fontSize: "28px", // Large body text with accent emphasis
    fontWeight: "semibold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HeroEmphasis: {
    fontSize: "28px", // Large body text with italic emphasis
    fontWeight: "italic",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HeroStandard: {
    fontSize: "28px", // Large body text with standard emphasis
    fontWeight: "bold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  FeatureBold: {
    fontSize: "24px", // Medium body text with bold emphasis
    fontWeight: "700",
    lineHeight: "28.8px",
    letterSpacing: "normal",
  },
  FeatureAccent: {
    fontSize: "24px", // Medium body text with accent emphasis
    fontWeight: "semibold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  FeatureEmphasis: {
    fontSize: "24px", // Medium body text with italic emphasis
    fontWeight: "italic",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  FeatureStandard: {
    fontSize: "24px", // Medium body text with standard emphasis
    fontWeight: "regular",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HighlightBold: {
    fontSize: "18px", // Smaller body text with bold emphasis
    fontWeight: "bold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HighlightAccent: {
    fontSize: "18px", // Smaller body text with accent emphasis
    fontWeight: "semibold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HighlightEmphasis: {
    fontSize: "18px", // Smaller body text with italic emphasis
    fontWeight: "italic",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  HighlightStandard: {
    fontSize: "18px", // Smaller body text with standard emphasis
    fontWeight: "regular",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  ContentBold: {
    fontSize: "14px", // Small body text with bold emphasis
    fontWeight: "bold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  ContentAccent: {
    fontSize: "16px", // Small body text with accent emphasis
    fontWeight: "semibold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  ContentEmphasis: {
    fontSize: "16px", // Small body text with italic emphasis
    fontWeight: "italic",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  ContentRegular: {
    fontSize: "16px", // Small body text with regular emphasis
    fontWeight: "regular",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  CaptionBold: {
    fontSize: "14px", // Caption text with bold emphasis
    fontWeight: "bold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  CaptionAccent: {
    fontSize: "14px", // Caption text with accent emphasis
    fontWeight: "semibold",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  CaptionEmphasis: {
    fontSize: "14px", // Caption text with italic emphasis
    fontWeight: "italic",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
  CaptionRegular: {
    fontSize: "14px", // Caption text with regular emphasis
    fontWeight: "regular",
    lineHeight: 120.0,
    letterSpacing: "normal",
  },
};

// Combine typography settings
export const typography = {
  fontFamily: primaryFont, // Apply primary font family
  fontWeightRegular: 400, // Regular font weight
  fontWeightMedium: 500, // Medium font weight
  fontWeightSemiBold: 600, // Semi-bold font weight
  fontWeightBold: 700, // Bold font weight
  h1: {
    fontWeight: 800, // Extra bold weight for h1
    lineHeight: 80 / 64, // Line height ratio for h1
    fontSize: pxToRem(40), // Font size in rem units
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }), // Responsive font sizes for h1
  },
  h2: {
    fontWeight: 800, // Extra bold weight for h2
    lineHeight: 64 / 48, // Line height ratio for h2
    fontSize: pxToRem(32), // Font size in rem units
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }), // Responsive font sizes for h2
  },
  h3: {
    fontWeight: 700, // Bold weight for h3
    lineHeight: 1.5, // Line height for h3
    fontSize: pxToRem(24), // Font size in rem units
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }), // Responsive font sizes for h3
  },
  h4: {
    fontWeight: 700, // Bold weight for h4
    lineHeight: 1.5, // Line height for h4
    fontSize: pxToRem(20), // Font size in rem units
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }), // Responsive font sizes for h4
  },
  h5: {
    fontWeight: 700, // Bold weight for h5
    lineHeight: 1.5, // Line height for h5
    fontSize: pxToRem(18), // Font size in rem units
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }), // Responsive font sizes for h5
  },
  h6: {
    fontWeight: 700, // Bold weight for h6
    lineHeight: 28 / 18, // Line height ratio for h6
    fontSize: pxToRem(20), // Font size in rem units
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }), // Responsive font sizes for h6
  },
  subtitle1: {
    fontWeight: 800, // Semi-bold weight for subtitle1
    lineHeight: pxToRem(18), // Line height for subtitle1
    fontSize: pxToRem(16), // Font size in rem units
  },
  subtitle2: {
    fontWeight: 500, // Semi-bold weight for subtitle2
    lineHeight: 22 / 14, // Line height ratio for subtitle2
    fontSize: pxToRem(14), // Font size in rem units
  },
  body1: {
    lineHeight: 1.5, // Line height for body1
    fontSize: pxToRem(16), // Font size in rem units
  },
  body2: {
    lineHeight: 22 / 14, // Line height ratio for body2
    fontSize: pxToRem(14), // Font size in rem units
  },
  caption: {
    lineHeight: 1.5, // Line height for caption
    fontSize: pxToRem(12), // Font size in rem units
  },
  overline: {
    fontWeight: 700, // Bold weight for overline text
    lineHeight: 1.5, // Line height for overline text
    fontSize: pxToRem(12), // Font size in rem units
    textTransform: "uppercase", // Uppercase text
  },
  button: {
    fontFamily: primaryFont,
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
  ...Headings, // Merge heading styles
  ...Body, // Merge body text styles
};
