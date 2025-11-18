import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import iconBulletPoint from "../../../assets/images/icon-bullet-point.svg";

import styles from "./WhyWeExist.styles";

export const WhyWeExist = () => {
  return (
    <Box component="section" sx={styles.container}>
      <Typography variant="h2" sx={styles.title}>
        Why we exist
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Cut through the noise."
            secondary="The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Empower home kitchens."
            secondary="When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep."
            sx={styles.listItemText}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <Box component="img" src={iconBulletPoint} alt="bullet point" />
          </ListItemIcon>
          <ListItemText
            primary="Make healthy look good."
            secondary="High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
            sx={styles.listItemText}
          />
        </ListItem>
      </List>
    </Box>
  );
};
