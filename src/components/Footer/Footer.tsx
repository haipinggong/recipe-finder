import { Box, Typography, IconButton } from "@mui/material";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import blueSkyIcon from "../../assets/images/icon-bluesky.svg";
import tiktokIcon from "../../assets/images/icon-tiktok.svg";
import { styles } from "./Footer.styles";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box sx={styles.container} component="footer">
      <Box
        sx={styles.socialMedia}
        component="nav"
        aria-label="Social media links"
      >
        <IconButton
          component={Link}
          to="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram page (opens in new tab)"
        >
          <Box component="img" src={instagramIcon} alt="" aria-hidden="true" />
        </IconButton>
        <IconButton
          component={Link}
          to="https://www.bluesky.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Blue Sky page (opens in new tab)"
        >
          <Box component="img" src={blueSkyIcon} alt="" aria-hidden="true" />
        </IconButton>
        <IconButton
          component={Link}
          to="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our TikTok page (opens in new tab)"
        >
          <Box component="img" src={tiktokIcon} alt="" aria-hidden="true" />
        </IconButton>
      </Box>
      <Typography sx={styles.copyright}>Made with ❤️ and 🥑</Typography>
    </Box>
  );
};
