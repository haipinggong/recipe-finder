import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import styles from "./BeyondPlate.styles";

export const BeyondPlate = () => {
  return (
    <Box component="section" sx={styles.container}>
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
          <ListItemText
            primary="Encourage family dinners and social cooking."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box sx={styles.dot} />
          </ListItemIcon>
          <ListItemText
            primary="Reduce reliance on single-use packaging and delivery waste."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box sx={styles.dot} />
          </ListItemIcon>
          <ListItemText
            primary="Spark curiosity about seasonal produce and local agriculture."
            sx={styles.listItemText}
          />
        </ListItem>
      </List>
    </Box>
  );
};
