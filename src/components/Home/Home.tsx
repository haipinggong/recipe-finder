import { Box, Button, Typography } from "@mui/material";
import { Hero } from "./Hero/Hero";
import { Features } from "./Features/Features";
import { RealLife } from "./RealLife/RealLife";
import { styles } from "./Home.styles";

export const Home = () => {
  return (
    <Box sx={styles.container}>
      <Hero />
      <Features />
      <RealLife />
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
