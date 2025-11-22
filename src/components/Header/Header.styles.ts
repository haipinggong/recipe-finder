import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    padding: 2,
    borderBottom: "1px solid #E0E6E3",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 4, 2.5, 4),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2.5, 7.5),
    },
  }),

  button: (theme: Theme) => ({
    textTransform: "none",
    borderRadius: 2.5,
    padding: theme.spacing(2, 4),
    fontSize: "1.25rem",
    lineHeight: "140%",
    letterSpacing: "-0.5px",
    fontWeight: theme.typography.fontWeightBold,
  }),
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#FE9F6B",
      height: 4,
    },
  },
  tab: {
    fontSize: "1.25rem",
    textTransform: "none",
  },
  activeTab: {
    color: "#FE9F6B",
  },
};
