import { Box, Button, Typography } from "@mui/material";
import wholeFoodRecipesImage from "../../assets/images/icon-whole-food-recipes.svg";
import minimumFussImage from "../../assets/images/icon-minimum-fuss.svg";
import searchInSecondsImage from "../../assets/images/icon-search-in-seconds.svg";
import builtForRealLifeImage from "../../assets/images/image-home-real-life-large.webp";
import { Hero } from "./Hero/Hero";
import { styles } from "./Home.styles";

export const Home = () => {
  return (
    <Box sx={styles.container}>
      <Hero />

      <Box component="section">
        <Typography variant="h2">What you'll get</Typography>
        <img src={wholeFoodRecipesImage} alt="whole food recipes" />
        <Typography variant="h3">Whole-food recipes</Typography>
        <Typography variant="body1">
          Each dish uses everyday, unprocessed ingredients.
        </Typography>
        <img src={minimumFussImage} alt="minimum fuss" />
        <Typography variant="h3">Minimum fuss</Typography>
        <Typography variant="body1">
          All recipes are designed to make eating healthy quick and easy.
        </Typography>
        <img src={searchInSecondsImage} alt="search in seconds" />
        <Typography variant="h3">Search in seconds</Typography>
        <Typography variant="body1">
          Filter by name or ingredient and jump straight to the recipe you need.
        </Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2">Built for real life</Typography>
        <Typography variant="body1">
          Cooking shouldn't be complicated. These recipes come in under 30
          minutes of active time, fit busy schedules, and taste good enough to
          repeat.
        </Typography>
        <img src={builtForRealLifeImage} alt="built for real life" />
      </Box>
      <Box component="section">
        <Typography variant="h2">Ready to cook smarter?</Typography>
        <Typography variant="body1">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </Typography>
        <Button variant="contained" color="primary">
          Browse recipes
        </Button>
      </Box>
    </Box>
  );
};
