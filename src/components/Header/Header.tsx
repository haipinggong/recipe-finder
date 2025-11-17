import { Box } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { styles } from "./Header.styles";

export const Header = () => {
  return (
    <Box sx={styles.container}>
      <Box component="img" src={logo} alt="logo" />
    </Box>
  );
};
