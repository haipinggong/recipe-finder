import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import styles from "./BeyondPlate.styles";
import beyondPlateImage from "../../../assets/images/image-about-beyond-the-plate-large.webp";

export const BeyondPlate = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Box>
        <Typography variant="h2">Beyond the plate</Typography>
        <Typography>
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Box sx={styles.dot} />
            </ListItemIcon>
            <ListItemText primary="Encourage family dinners and social cooking." />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Box sx={styles.dot} />
            </ListItemIcon>
            <ListItemText primary="Reduce reliance on single-use packaging and delivery waste." />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Box sx={styles.dot} />
            </ListItemIcon>
            <ListItemText primary="Spark curiosity about seasonal produce and local agriculture." />
          </ListItem>
        </List>
      </Box>

      <Box>
        <Box
          component="img"
          src={beyondPlateImage}
          alt="beyond the plate"
          sx={styles.image}
        />
      </Box>
    </Box>
  );
};
