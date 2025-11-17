import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 8,
    [theme.breakpoints.up("md")]: {
      gap: 12,
      paddingInline: 12,
    },
  }),
};
