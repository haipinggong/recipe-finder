import { Box, Button, Typography } from "@mui/material";
import styles from "./CallToAction.styles";
import { Link } from "react-router-dom";
export const CallToAction = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h2">Ready to cook smarter?</Typography>
        <Typography>
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </Typography>
      </Box>

      <Button component={Link} to="/recipes">
        Browse recipes
      </Button>
    </Box>
  );
};
