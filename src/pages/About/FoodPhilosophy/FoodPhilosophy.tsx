import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import iconBulletPoint from "../../../assets/images/icon-bullet-point.svg";

import styles from "./FoodPhylosophy";

export const FoodPhilosophy = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Typography variant="h2" sx={styles.title}>
        Our food philosophy
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Whole ingredients first."
            secondary="Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Flavor without compromise."
            secondary="Spices, citrus, and natural sweetness replace excess salt, sugar, and additives."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Respect for time."
            secondary="Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Sustainable choices."
            secondary="Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
            sx={styles.listItemText}
          />
        </ListItem>
      </List>
    </Box>
  );
};
