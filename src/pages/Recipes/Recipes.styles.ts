import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  filtersContainer: {
    marginTop: 4,
    marginBottom: 4,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  selectControl: (theme: Theme) => ({
    minWidth: 200,
    [theme.breakpoints.up("sm")]: {
      minWidth: 250,
    },
  }),
  input: {
    borderRadius: 2.5,
    backgroundColor: "white",
  },
  searchIcon: {
    marginRight: 1,
  },
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
