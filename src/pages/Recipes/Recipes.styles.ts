import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    paddingInline: 2,
    [theme.breakpoints.up("sm")]: {
      paddingInline: 4,
    },
    [theme.breakpoints.up("md")]: {
      paddingInline: 12,
    },
  }),
};
