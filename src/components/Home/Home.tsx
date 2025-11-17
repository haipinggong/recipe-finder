import { Box, Button, Typography } from "@mui/material";
import builtForRealLifeImage from "../../assets/images/image-home-real-life-large.webp";
import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { styles } from "./Home.styles";

export const Home = () => {
  return (
    <Box sx={styles.container}>
      <Hero />
      <Features />
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
