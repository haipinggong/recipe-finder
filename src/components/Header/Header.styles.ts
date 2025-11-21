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
};
