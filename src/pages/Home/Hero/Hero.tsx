import { Box, Button, Typography } from "@mui/material";
import heroImage from "../../../assets/images/image-home-hero-large.webp";
import styles from "./Hero.styles";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Typography variant="h1">
        <Box component="span" sx={styles.highlight}>
          Healthy
        </Box>{" "}
        meals, zero fuss
      </Typography>
      <Typography sx={styles.description}>
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </Typography>
      <Button sx={styles.button} component={Link} to="/recipes">
        Start exploring
      </Button>
      <Box
        component="img"
        sx={styles.image}
        src={heroImage}
        alt="A person cooking healthy meals in a modern kitchen"
      />
    </Box>
  );
};
