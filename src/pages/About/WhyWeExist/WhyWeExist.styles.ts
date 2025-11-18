import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginTop: 8,
    borderBottom: "1px solid #E0E6E3",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(10),
      marginTop: 10,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      gap: 8,
      marginTop: 12,
    },
  }),
  title: (theme: Theme) => ({
    [theme.breakpoints.up("md")]: {
      minWidth: "40%",
    },
  }),
  listItemText: (theme: Theme) => ({
    "& .MuiListItemText-secondary": { ...theme.typography.body1 },
    "& .MuiListItemText-primary": {
      ...theme.typography.h4,
      color: theme.palette.text.primary,
    },
  }),
};

export default styles;
