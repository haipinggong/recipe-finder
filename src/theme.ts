import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontWeightExtraBold: string | number;
    fontWeightSemiBold: string | number;
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold?: string | number;
    fontWeightSemiBold?: string | number;
  }

  // Add the new color to the Palette interface
  interface Palette {
    orange: Palette["primary"];
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    orange?: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightExtraBold: true;
    fontWeightSemiBold: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: "Nunito, Nunito Sans, sans-serif",
    fontWeightExtraBold: 800,
    fontWeightSemiBold: 600,
  },
  palette: {
    primary: {
      main: "#163A34",
    },
    // Define the new color here
    orange: {
      main: "#FE9F6B",
    },
    text: {
      primary: "#163A34",
      secondary: "#395852",
    },
    background: {
      default: "#F6F5F1",
    },
    neutral: {
      main: "#E0E6E3",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "3.25rem",
      lineHeight: "110%",
      letterSpacing: "-2px",
      fontWeight: theme.typography.fontWeightExtraBold,
      [theme.breakpoints.up("sm")]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "4.5rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      lineHeight: "120%",
      letterSpacing: "-2px",
      fontWeight: theme.typography.fontWeightExtraBold,
      [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "130%",
      letterSpacing: "-1px",
      fontWeight: theme.typography.fontWeightBold,
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "130%",
      letterSpacing: "-1px",
      fontWeight: theme.typography.fontWeightBold,
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "140%",
      letterSpacing: "-0.5px",
      fontWeight: theme.typography.fontWeightBold,
    },
    h6: {
      fontSize: "1.125rem",
      lineHeight: "150%",
      letterSpacing: "-0.3px",
      fontWeight: theme.typography.fontWeightSemiBold,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "150%",
      letterSpacing: "-0.4px",
      fontWeight: theme.typography.fontWeightMedium,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "150%",
      letterSpacing: "-0.3px",
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: "Nunito Sans, sans-serif",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: theme.spacing(1.25),
          padding: theme.spacing(2, 3),
          fontSize: "1.25rem",
          lineHeight: "140%",
          letterSpacing: "-0.5px",
          fontWeight: theme.typography.fontWeightBold,
          "&:hover, &:focus": {
            backgroundColor: theme.palette.text.secondary,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: theme.palette.orange.main,
          height: 4,
        },
      },
    },
  },
});

export default theme;
