import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Button,
  Box,
  Typography,
  ListItemIcon,
  Avatar,
  Divider,
ListItemButton


} from "@mui/material";



import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import EditNote from '@mui/icons-material/EditNote';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone'; 

import { Link } from "react-router-dom";

const drawerWidth = 240;





function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}




const UserSideBar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawer = (
    <div>
      <List onClick={handleDrawerToggle}>
        {/*         <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem> */}
        <ListItem button component={Link} to="/dashboard">
        <AccountCircleTwoToneIcon />
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Iniciar Sesión" />
        </ListItem>
        <ListItem button component={Link} to="/registrar">
          <ListItemText primary="Registrar Usuario" />
        </ListItem>
      </List>
      {AnchorTemporaryDrawer}
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

export default UserSideBar;
