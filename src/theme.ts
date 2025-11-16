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
    },
    h2: {
      fontSize: "3rem",
      lineHeight: "120%",
      letterSpacing: "-2px",
      fontWeight: theme.typography.fontWeightExtraBold,
    },
    h3: {
      fontSize: "2rem",
      lineHeight: "130%",
      letterSpacing: "-1px",
      fontWeight: theme.typography.fontWeightBold,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "150%",
      letterSpacing: "-0.4px",
    },
  },
  palette: {
    primary: {
      main: "#0C7D69",
    },
    secondary: {
      main: "#253347",
    },
    text: {
      primary: "#12131A",
      secondary: "#5E6E85",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
});

export default theme;
