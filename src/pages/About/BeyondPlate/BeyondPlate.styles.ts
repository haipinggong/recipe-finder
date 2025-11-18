import { type SxProps, type Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginTop: 8,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(10),
      marginTop: 10,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 12,
    },
  }),
  listItemText: (theme: Theme) => ({
    "& .MuiListItemText-primary": {
      ...theme.typography.h4,
    },
  }),
  dot: (theme: Theme) => ({
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
  }),
};

export default styles;
