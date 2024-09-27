
import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { checkToken } from "../App"; 




const Appbar = ({ handleDrawerToggle, handleLogout }) => {
 
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // localStorage.removeItem("token");
    localStorage.clear();
    
    
    navigate(`/login`);
  }

  // const { isAuthenticated, logout } = useAuth(); 
  // if (!isAuthenticated) return null; 
  useEffect(() => {
    const tokenExists = checkToken();
    console.log("Token Exists: " + tokenExists)
    setIsLogged(tokenExists);

  }, []);
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
        {!isLogged && <Button
          color="inherit"
          sx={{ marginLeft: `auto`, p: 2 }}
          component={Link}
          to="/registrar"
        >
          Registrarse
        </Button>}
        <Typography sx={{ marginLeft: `auto`, p: 2 }}>Aqui estaba el boton de Registrar pero lo quite condicionalmente !isLogged && Button...</Typography>
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
