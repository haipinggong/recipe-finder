import { Box, Button, Typography } from "@mui/material";
import heroImage from "../../../assets/images/image-home-hero-large.webp";
import { styles } from "./Hero.styles";

export const Hero = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Typography variant="h1">Healthy meals, zero fuss</Typography>
      <Typography variant="body1">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </Typography>
      <Button variant="contained" color="primary">
        Start exploring
      </Button>
      <Box component="img" sx={styles.image} src={heroImage} alt="home" />
    </Box>
  );
};
