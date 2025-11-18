import { Box, Typography } from "@mui/material";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import blueSkyIcon from "../../assets/images/icon-bluesky.svg";
import tiktokIcon from "../../assets/images/icon-tiktok.svg";
import { styles } from "./Footer.styles";

export const Footer = () => {
  return (
    <Box sx={styles.container} component="footer">
      <Box sx={styles.socialMedia}>
        <Box component="img" src={instagramIcon} alt="instagram" />
        <Box component="img" src={blueSkyIcon} alt="blue sky" />
        <Box component="img" src={tiktokIcon} alt="tiktok" />
      </Box>
      <Typography sx={styles.copyright}>Made with ❤️ and 🥑</Typography>
    </Box>
  );
};
