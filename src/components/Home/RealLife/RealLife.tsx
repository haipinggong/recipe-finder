import { Box, Typography } from "@mui/material";
import builtForRealLifeImage from "../../../assets/images/image-home-real-life-large.webp";
import styles from "./RealLife.styles";

export const RealLife = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h2">Built for real life</Typography>
        <Typography>
          Cooking shouldn't be complicated. These recipes come in under{" "}
          <Box component="strong" sx={styles.highlight}>
            30 minutes
          </Box>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </Typography>
        <Typography>
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got
          you covered.
        </Typography>
      </Box>

      <Box sx={styles.imageWrapper}>
        <Box
          component="img"
          src={builtForRealLifeImage}
          alt="built for real life"
          sx={styles.image}
        />
      </Box>
    </Box>
  );
};
