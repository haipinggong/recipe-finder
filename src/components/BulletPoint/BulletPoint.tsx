import { Box, ListItemIcon } from "@mui/material";
import iconBulletPoint from "../../assets/images/icon-bullet-point.svg";

/**
 * BulletPoint component that wraps ListItemIcon and displays the bullet point icon.
 */
export const BulletPoint = () => {
  return (
    <ListItemIcon>
      <Box
        component="img"
        src={iconBulletPoint}
        alt=""
        aria-hidden="true"
      />
    </ListItemIcon>
  );
};

