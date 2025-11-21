import {
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { styles } from "./Header.styles";
import { Link } from "react-router-dom";
import hamburgerMenuIcon from "../../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(openMenu);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  return (
    <Box component="header" sx={styles.container}>
      <Box component="img" src={logo} alt="logo" />
      {isMobile && (
        <IconButton onClick={toggleDrawer(true)}>
          <Box component="img" src={hamburgerMenuIcon} alt="hamburger menu" />
        </IconButton>
      )}
      <Drawer open={openMenu} onClose={toggleDrawer(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation" component="nav">
          <List>
            {["Home", "About", "Recipes"].map((text) => (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
