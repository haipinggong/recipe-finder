import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  gridContainer: (theme: Theme) => ({
    marginTop: 4,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 4,
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  }),
  filtersContainer: (theme: Theme) => ({
    gridColumn: "1 / -1",
    marginBottom: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }),
  selectsContainer: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }),
  selectControl: (theme: Theme) => ({
    minWidth: 200,
    [theme.breakpoints.up("lg")]: {
      minWidth: 300,
    },
  }),
  searchBar: (theme: Theme) => ({
    [theme.breakpoints.up("lg")]: {
      width: 400,
      flexShrink: 0,
    },
  }),
  input: {
    borderRadius: 2.5,
    backgroundColor: "white",
  },
  searchIcon: {
    marginRight: 1,
  },
};
