import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    paddingInline: 2,
    [theme.breakpoints.up("sm")]: {
      paddingInline: 4,
    },
  }),
};
