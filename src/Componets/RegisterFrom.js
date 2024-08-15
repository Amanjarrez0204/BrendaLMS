import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterFrom = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [curp, setCurp] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [cursos, setCursos] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [password, setPassword] = useState("");

  //REvisar si es util en el registro Las calificaciones y las conferencias
  const rol = "Alumno";
  const calificaciones = "10";
  const conferencias = "10";
  const fechaRegistro = new Date();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      //conectar con la base de datos para el registro de usuario
      const response = await axios.post("http://localhost:3001/api/users/", {
        nombre,
        apellidos,
        ciudad,
        curp,
        fechaIngreso,
        cursos,
        correoElectronico,
        password,
        // calificaciones,
        // conferencias,
        rol,
      });
      alert("Usuario registrado con éxito");
      console.log(response.data);

      //redirigir a la pagina de login

      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
      console.log(err);
      alert(`Error al registrar usuario ${nombre}`);
    }
  };

  return (
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombre"
        label="Nombre de usuario"
        name="nombre"
        autoComplete="nombre"
        autoFocus
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="apellidos"
        label="appelidos del usuario"
        name="appelidos"
        autoComplete="apellidos"
        autoFocus
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="curp"
        label="CURP del usuario"
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
        id="cursos"
        label="Curso deseado"
        name="cursos"
        autoComplete="cursos"
        autoFocus
        value={cursos}
        onChange={(e) => setCursos(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="ciudad"
        label="Nombre de la ciudad"
        name="ciudad"
        autoComplete="ciudad"
        autoFocus
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="fechaIngreso"
        label="fecha de inicio de curso"
        name="fechaInfreso"
        autoComplete="fechaIngreso"
        autoFocus
        // value={fechaIngreso}
        value={fechaRegistro}
        onChange={(e) => setFechaIngreso(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="correoElectronico"
        label="Correo Electronico"
        name="correoElectronico"
        autoComplete="correoElectronico"
        autoFocus
        value={correoElectronico}
        onChange={(e) => setCorreoElectronico(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="contraseña"
        name="contraseña"
        autoComplete="contraseña"
        autoFocus
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleRegister}
      >
        Crear nuevo usuario
      </Button>
    </Box>
  );
};

export default RegisterFrom;
