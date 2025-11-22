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
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { styles } from "./Header.styles";
import { Link } from "react-router-dom";
import hamburgerMenuIcon from "../../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";
import { type SxProps, type Theme } from "@mui/material/styles";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  console.log(activeTab);

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
      {!isMobile && (
        <>
          <Tabs
            sx={styles.tabs}
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
          >
            <Tab
              label="Home"
              value="Home"
              component={Link}
              to="/"
              sx={
                [
                  styles.tab,
                  activeTab === "Home" && styles.activeTab,
                ] as SxProps<Theme>
              }
            />
            <Tab
              label="About"
              value="About"
              component={Link}
              to="/about"
              sx={
                [
                  styles.tab,
                  activeTab === "About" && styles.activeTab,
                ] as SxProps<Theme>
              }
            />
            <Tab
              label="Recipes"
              value="Recipes"
              component={Link}
              to="/recipes"
              sx={
                [
                  styles.tab,
                  activeTab === "Recipes" && styles.activeTab,
                ] as SxProps<Theme>
              }
            />
          </Tabs>
          <Button
            variant="contained"
            component={Link}
            to="/recipes"
            sx={styles.button}
          >
            Browse recipes
          </Button>
        </>
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
