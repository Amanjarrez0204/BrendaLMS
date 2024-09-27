import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; 



const Loginform = ({ onLogin }) => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [curp, setCurp] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  
  // const { login } = useAuth();

  const handleLogin = async () => {
    try {
      //conectar con la base de datos para autentificar el usuario
      const response = await axios.post("http://localhost:3001/api/users/authenticate", {
        curp,
        contraseña,
        
      });
      
      
      // login(); // Cambia el estado a autenticado

      alert("login Exitoso");

      localStorage.setItem('token', response.data.token); // set token on Local Storage
      onLogin(response.data.token);
      navigate(`/dashboard`);
    } catch (err) {
      console.log(err);
      alert("Error al iniciar sesion");
    }
  };
  return (
    <Box component="form" sx={{}}>

      <TextField
        margin="normal"
        required
        fullWidth
        id="curp"
        label="CURP"
        name="curp"
        autoComplete="curp"
        autoFocus
        value={curp}
        onChange={(e) => setCurp(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        id="contraseña"
        label="Contraseña"
        name="contraseña"
        autoComplete="contraseña"
        autoFocus
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
   
      <Typography variant="body2" align="center">
        <Link to="/recuperarcontraseña">¿Olvidaste tu contraseña?</Link>
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={handleLogin}
        
      >
        iniciar Sesión
      </Button>
      <Typography variant="body2" align="center">
        No tienes cuenta? Registrate <Link to="/registrar">Aqui</Link>
      </Typography>
    </Box>
  );
};
export default Loginform;
