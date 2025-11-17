import { Box, Typography } from "@mui/material";
import builtForRealLifeImage from "../../../assets/images/image-home-real-life-large.webp";
import styles from "./RealLife.styles";

export const RealLife = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h2">Built for real life</Typography>
        <Typography variant="body1">
          Cooking shouldn't be complicated. These recipes come in under 30
          minutes of active time, fit busy schedules, and taste good enough to
          repeat.
        </Typography>
      </Box>

      <Box
        component="img"
        src={builtForRealLifeImage}
        alt="built for real life"
        sx={styles.image}
      />
    </Box>
  );
};
