import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    green: Palette["primary"];
  }
  interface PaletteOptions {
    green: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    fontWeightExtraBold: string | number;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fontWeightExtraBold?: string | number;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightExtraBold: true;
  }
}

let theme = createTheme({
  typography: {
    fontFamily: "Nunito, Nunito Sans, sans-serif",
    fontWeightExtraBold: 800,
  },
  palette: {
    green: {
      main: "#0C7D69",
      light: "#E0F1E8",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "4.5rem",
      lineHeight: "110%",
      letterSpacing: "-2px",
      fontWeight: theme.typography.fontWeightExtraBold,
      color: "#163A34",
    },
    h2: {
      fontSize: "3rem",
      lineHeight: "120%",
      letterSpacing: "-2px",
      fontWeight: theme.typography.fontWeightExtraBold,
      color: "#163A34",
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "130%",
      letterSpacing: "-1px",
      fontWeight: theme.typography.fontWeightBold,
      color: "#163A34",
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "150%",
      letterSpacing: "-0.4px",
      fontWeight: theme.typography.fontWeightMedium,
      color: "#395852",
    },
  },
  palette: {
    primary: {
      main: "#163A34",
    },
    text: {
      primary: "#163A34",
    },
    background: {
      default: "#F6F5F1",
    },
  },
});

export default theme;
