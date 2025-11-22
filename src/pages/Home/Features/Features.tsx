import { Box, Typography } from "@mui/material";
import wholeFoodRecipesImage from "../../../assets/images/icon-whole-food-recipes.svg";
import minimumFussImage from "../../../assets/images/icon-minimum-fuss.svg";
import searchInSecondsImage from "../../../assets/images/icon-search-in-seconds.svg";
import styles from "./Features.styles";

export const Features = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Typography variant="h2">What you'll get</Typography>
      <Box sx={styles.features} component="ul">
        <Box sx={styles.feature} component="li">
          <Box
            component="img"
            src={wholeFoodRecipesImage}
            alt=""
            sx={styles.featureImage}
            aria-hidden="true"
          />
          <Box>
            <Typography variant="h3">Whole-food recipes</Typography>
            <Typography>
              Each dish uses everyday, unprocessed ingredients.
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.feature} component="li">
          <Box
            component="img"
            src={minimumFussImage}
            alt=""
            sx={styles.featureImage}
            aria-hidden="true"
          />
          <Box>
            <Typography variant="h3">Minimum fuss</Typography>
            <Typography>
              All recipes are designed to make eating healthy quick and easy.
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.feature} component="li">
          <Box
            component="img"
            src={searchInSecondsImage}
            alt=""
            sx={styles.featureImage}
            aria-hidden="true"
          />
          <Box>
            <Typography variant="h3">Search in seconds</Typography>
            <Typography>
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
