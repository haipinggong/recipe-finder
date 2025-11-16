import { Box, Typography } from "@mui/material";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import blueSkyIcon from "../../assets/images/icon-bluesky.svg";
import tiktokIcon from "../../assets/images/icon-tiktok.svg";

export const Footer = () => {
  return (
    <Box>
      <Typography>Made with ❤️ and 🥑</Typography>
      <Box>
        <img src={instagramIcon} alt="instagram" />
        <img src={blueSkyIcon} alt="blue sky" />
        <img src={tiktokIcon} alt="tiktok" />
      </Box>
    </Box>
  );
};
