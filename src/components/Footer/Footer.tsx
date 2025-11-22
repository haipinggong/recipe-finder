import { Box, Typography, IconButton } from "@mui/material";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import blueSkyIcon from "../../assets/images/icon-bluesky.svg";
import tiktokIcon from "../../assets/images/icon-tiktok.svg";
import { styles } from "./Footer.styles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box sx={styles.container} component="footer">
      <Box sx={styles.socialMedia}>
        <IconButton
          component={Link}
          to="https://www.instagram.com"
          target="_blank"
        >
          <Box component="img" src={instagramIcon} alt="instagram" />
        </IconButton>
        <IconButton
          component={Link}
          to="https://www.bluesky.app"
          target="_blank"
        >
          <Box component="img" src={blueSkyIcon} alt="blue sky" />
        </IconButton>
        <IconButton
          component={Link}
          to="https://www.tiktok.com"
          target="_blank"
        >
          <Box component="img" src={tiktokIcon} alt="tiktok" />
        </IconButton>
      </Box>
      <Typography sx={styles.copyright}>Made with ❤️ and 🥑</Typography>
    </Box>
  );
};
