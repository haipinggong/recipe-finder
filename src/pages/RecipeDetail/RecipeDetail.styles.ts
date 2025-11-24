import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  breadcrumbs: {
    marginTop: 6,
  },
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 2,
    gap: 5,
    [theme.breakpoints.up("lg")]: {
      marginTop: 4,
      flexDirection: "row",
      gap: 8,
    },
  }),

  imageContainer: (theme: Theme) => ({
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  }),
  image: {
    width: "100%",
    aspectRatio: "1/1",
    objectFit: "cover",
    border: `5px solid white`,
    borderRadius: 2.5,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    columnGap: 2,
    rowGap: 1,
    flexWrap: "wrap",
  },
  ingredientsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  ingredients: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  moreRecipesContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 6,
    gap: 2,
  },
};
