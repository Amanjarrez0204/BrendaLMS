
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; 


const Appbar = ({ handleDrawerToggle, handleLogout }) => {
  
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // localStorage.removeItem("token");
    localStorage.clear();
    
    
    navigate(`/login`);
  }

  // const { isAuthenticated, logout } = useAuth(); 
  // if (!isAuthenticated) return null; 

  return (
    <AppBar position="sticky" sx={{ p: 0 }}>
      <Toolbar sx={{ p: 0 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Brenda LMS</Typography>
        <Button
          color="inherit"
          sx={{ marginLeft: `auto`, p: 2 }}
          component={Link}
          to="/registrar"
        >
          Registrarse
        </Button>
        <Button
          color="inherit"
          sx={{ marginLeft: `auto`, p: 2 }}
          component={Link}
          to="/login"
          onClick={
            (handleLogout) 
            // ()=> 
            // handleCerrarSesion()
          }
        >
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
