import { Box, Typography } from "@mui/material";
import styles from "./Hero.styles";

export const Hero = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h1">
          Explore our simple, healthy recipes
        </Typography>
        <Box sx={styles.description}>
          <Typography>
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
