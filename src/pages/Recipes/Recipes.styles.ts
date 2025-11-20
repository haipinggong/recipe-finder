import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  recipesContainer: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  }),
};
