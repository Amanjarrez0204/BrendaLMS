import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// import { useAuth } from "../AuthContext"; 


const Loginform = () => {
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [curp, setCurp] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  
  // const { login } = useAuth(); 
  // const handleLogin = () => {
    
  //   login(); // Cambia el estado a autenticado
  // };


  const handeLogin = async () => {
    try {
      //conectar con la base de datos para autentificar el usuario
      const response = await axios.post("http://localhost:3001/api/users/authenticate", {
        curp,
        contraseña,
        
      });
      
      
      
      alert("login Exitoso");

      localStorage.setItem('token', response.data.token); // set token on Local Storage

      navigate(`/dashboard`);
    } catch (err) {
      console.log(err);
      alert("Error al iniciar sesion");
    }
  };
  return (
    <Box component="Form" sx={{}}>
      {/* <TextField
        margin="normal"
        required
        fullWidth
        id="correoElectronico"
        label=" Correo Electronico"
        name="correoElectronico"
        autoComplete="correoElectronico"
        autoFocus
        value={correoElectronico}
        onChange={(e) => setCorreoElectronico(e.target.value)}
      /> */}
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
      {/* // mensaje y link para olvido de contrasena, se usa link para ir a la pagina*/}
      <Typography variant="body2" align="center">
        <Link to="/recuperarcontraseña">¿Olvidaste tu contraseña?</Link>
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        onClick={handeLogin}
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
