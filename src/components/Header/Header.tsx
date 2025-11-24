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
import { Link, useLocation } from "react-router-dom";
import hamburgerMenuIcon from "../../assets/images/icon-hamburger-menu.svg";
import { useMemo, useState } from "react";

export const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const activeTab = useMemo(() => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/about") return "About";
    if (
      location.pathname === "/recipes" ||
      location.pathname.startsWith("/recipe/")
    )
      return "Recipes";
    return false;
  }, [location.pathname]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  return (
    <Box component="header" sx={styles.container}>
      <Box component={Link} to="/" sx={{ display: "inline-block" }}>
        <Box component="img" src={logo} alt="Healthy Recipe Finder logo" />
      </Box>
      {isMobile && (
        <IconButton
          onClick={toggleDrawer(true)}
          aria-label={
            openMenu ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={openMenu}
        >
          <Box
            component="img"
            src={hamburgerMenuIcon}
            alt=""
            aria-hidden="true"
          />
        </IconButton>
      )}
      {!isMobile && (
        <>
          <Tabs sx={styles.tabs} value={activeTab} component="nav">
            <Tab
              label="Home"
              value="Home"
              component={Link}
              to="/"
              aria-current={activeTab === "Home" ? "page" : undefined}
              sx={styles.tab}
            />
            <Tab
              label="About"
              value="About"
              component={Link}
              to="/about"
              aria-current={activeTab === "About" ? "page" : undefined}
              sx={styles.tab}
            />
            <Tab
              label="Recipes"
              value="Recipes"
              component={Link}
              to="/recipes"
              aria-current={activeTab === "Recipes" ? "page" : undefined}
              sx={styles.tab}
            />
          </Tabs>
          <Button component={Link} to="/recipes">
            Browse recipes
          </Button>
        </>
      )}
      <Drawer open={openMenu} onClose={toggleDrawer(false)} anchor="right">
        <Box sx={{ width: 250 }} component="nav" aria-label="Main navigation">
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
