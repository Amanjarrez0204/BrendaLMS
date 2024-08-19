import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawer = (
    <div>
      <List onClick={handleDrawerToggle}>
        {/*         <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem> */}
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Iniciar Sesión" />
        </ListItem>
        <ListItem button component={Link} to="/registrar">
          <ListItemText primary="Registrar Usuario" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav>
      {/* Drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            marginTop: "10%",
            zIndex: theme.zIndex.drawer + 1,
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* Drawer for desktop */}
      <Drawer
        variant="Temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            top: "64px",
          },
        }}
        // open
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Sidebar;
