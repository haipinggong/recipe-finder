import { Box, Typography } from "@mui/material";
import heroImage from "../../../assets/images/image-about-our-mission-large.webp";
import styles from "./Hero.styles";

export const Hero = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography sx={styles.title} variant="h5">
          Our mission
        </Typography>
        <Typography variant="h1">
          Help more people cook nourishing meals, more often.
        </Typography>
        <Box sx={styles.description}>
          <Typography>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </Typography>
          <Typography>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          component="img"
          sx={styles.image}
          src={heroImage}
          alt="our mission"
        />
      </Box>
    </Box>
  );
};
