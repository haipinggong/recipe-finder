import { Box } from "@mui/material";
import { Hero } from "./Hero/Hero";
import { styles } from "./Recipes.styles";

export const Recipes = () => {
  return (
    <Box component="main" sx={styles.container}>
      <Hero />
    </Box>
  );
};
