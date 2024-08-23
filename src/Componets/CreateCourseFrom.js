import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { Date } from "core-js";


const CreateCourseForm = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [creditos, setCreditos] = useState("");
  const [horario, setHorario] = useState("");
  const [examenes, setExamenes] = useState("");
  const [tests, setTests] = useState("");
  const [instructor, setInstructor] = useState("");
  const [fechaDePublicacion, setFechaDePublicacion] = useState(Date.now);
  const [alumnos, setAlumnos] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      console.log("Trying")
      const response = await axios.post("http://localhost:3001/api/cursos/", {
        titulo,
        descripcion,
        contenido,
        creditos,
        horario,
        examenes,
        tests,
        instructor,
        fecha_de_publicacion: fechaDePublicacion,
        alumnos: alumnos.split(",").map(alumno => alumno.trim()), // Convert comma-separated string to array
      });
      alert("Curso registrado con éxito");
      console.log(response.data);

      navigate("/courses");
    } catch (err) {
      console.log("Que fue lo que paso ???")
      console.log(err.response.data);
      console.log(err);
      alert(`Error al registrar curso ${titulo}`);
    }
  };

// Secciones de la página de creación de cursos
// // Informacion basica
// // // Informacion adicional

// // Detalles
// // Contenido
// // Evaluaciones
// // Asignaciones
// // Videoconferencias
// // Ajustes


  return (
    <Box component="form" sx={{}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="titulo"
            label="Título del curso"
            name="titulo"
            autoComplete="titulo"
            autoFocus
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="descripcion"
            label="Descripción del curso"
            name="descripcion"
            autoComplete="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="contenido"
            label="Contenido del curso"
            name="contenido"
            autoComplete="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="creditos"
            label="Créditos del curso"
            name="creditos"
            autoComplete="creditos"
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="horario"
            label="Horario del curso"
            name="horario"
            autoComplete="horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="examenes"
            label="Exámenes del curso"
            name="examenes"
            autoComplete="examenes"
            value={examenes}
            onChange={(e) => setExamenes(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="tests"
            label="Tests del curso"
            name="tests"
            autoComplete="tests"
            value={tests}
            onChange={(e) => setTests(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="instructor"
            label="Instructor del curso"
            name="instructor"
            autoComplete="instructor"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="fechaDePublicacion"
            label="Fecha de publicación"
            name="fechaDePublicacion"
            autoComplete="fechaDePublicacion"
                        value={new Date().toLocaleDateString()}
            onChange={(e) => setFechaDePublicacion(
              // e.target.value
              Date.now()
            )}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="alumnos"
            label="Alumnos (separados por comas)"
            name="alumnos"
            autoComplete="alumnos"
            value={alumnos}
            onChange={(e) => setAlumnos(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleRegister}
        // Link to the courses creation page called crate-course
>
        Crear nuevo curso
      </Button>
    </Box>
  );
};

export default CreateCourseForm;