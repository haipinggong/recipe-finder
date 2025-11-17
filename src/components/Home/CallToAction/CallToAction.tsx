import { Box, Button, Typography } from "@mui/material";
import styles from "./CallToAction.styles";

export const CallToAction = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h2">Ready to cook smarter?</Typography>
        <Typography variant="body1">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </Typography>
      </Box>

      <Button variant="contained" color="primary" sx={styles.button}>
        Browse recipes
      </Button>
    </Box>
  );
};
