import { type SxProps, type Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 6,
    gap: 5,
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
      marginTop: 10,
      flexDirection: "row",
      gap: 8,
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
  moreRecipes: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};
