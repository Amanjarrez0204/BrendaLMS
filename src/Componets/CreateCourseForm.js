import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
 import Paper from '@mui/material/Paper';
import { Textarea } from "@mui/joy";


// import { Date } from "core-js";

// Crear Nuevo curso
// // Informacion Basica
// // // Titulo
// // // Subtitulo
// // // Categoria
// // // Subcategoria
// // // Idiomas
// // Detalles
// // // Descripcion
// // // Objetivos
// // // Nivel de instruccion: [Introductorio, Intermedio, Avanzado, No aplica]
// // // Requisitos
// // // Instrucciones

// // Contenido
// // // Capitulos: [Leccion 1, Leccion 2, Leccion 3, Leccion 4, Leccion 5]
// // // // Lecciones: [Introduccion, Desarrollo, Evaluacion, Conclusion]
// // // // // Añadir: [Encuestas, Videoconferencias, Asignaciones, Evaluaciones]
// // Evaluaciones
// // Asignaciones
// // Videoconferencias
// // Ajustes

// // Informacion Basica
// // // Titulo
// // // Subtitulo
// // // Categoria
// // // Subcategoria
// // // Idiomas
const categories = ["Categoria 1", "Categoria 2"];



function SidebarCrearCurso(
  { onSectionChange }
)
{
 
  

    const [open, setOpen] = React.useState(true);
   
  
    const handleClick = (section) => {

      onSectionChange(section);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   // <ListSubheader component="div" id="nested-list-subheader">
        //   //   Nested List Items
        //   // </ListSubheader>
        // }
      >
        <ListItemButton onClick={() => handleClick(<InformacionBasica />)}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Información básica" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick( <Detalles />)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Detalles" />
        </ListItemButton>
        <ListItemButton >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Contenido" />
         
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Evaluaciones" />
          </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Asignaciones" />
          </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Videoconferencias" />
          </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Ajustes" />
          </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Calificaciones" />
          </ListItemButton>
        <ListItemButton>


        </ListItemButton>
        
      </List>
    );
  }



function InformacionBasica() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
          Información Básica
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="titulo"
          label="Título del curso"
          name="titulo"
          autoComplete="titulo"
          autoFocus
          value={CreateCourseForm.titulo}
          onChange={(e) => CreateCourseForm.setTitulo(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="descripcion"
          label="Descripción del curso"
          name="descripcion"
          autoComplete="descripcion"
          value={CreateCourseForm.descripcion}
          onChange={(e) => CreateCourseForm.setDescripcion(e.target.value)}
        />
      </Grid>
      <Grid item sx={{flex:"auto"}}>
        <Grid container spacing={2}>
          <Grid item xs={6}   >
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="subCategoria-label">
              Sub-categoría del curso
            </InputLabel>
            <Select
              labelId="subCategoria-label"
              id="sub-categoria"
              value={CreateCourseForm.subCategoria}
              onChange={(e) =>
                CreateCourseForm.setSubCategorias(e.target.value)
              }
              autoComplete="Sub-Categoría"
            >
              {categories.map((subCategorias) => (
                <MenuItem key={subCategorias} value={subCategorias}>
                  {subCategorias}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6}   >
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="categoria-label">Categoría del curso</InputLabel>
            <Select
              labelId="categoria-label"
              id="categoria"
              value={CreateCourseForm.categoria}
              onChange={(e) => CreateCourseForm.setIdiomas(e.target.value)}
              autoComplete="Categoría"
            >
              {categories.map((categoria) => (
                <MenuItem key={categoria} value={categoria}>
                  {categoria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6}   > 
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="idioma-label">Idioma del curso</InputLabel>
            <Select
              labelId="idioma-label"
              id="idioma"
              value={CreateCourseForm.categoria}
              onChange={(e) => CreateCourseForm.setIdiomas(e.target.value)}
              autoComplete="Idioma"
            >
              {categories.map((idioma) => (
                <MenuItem key={idioma} value={idioma}>
                  {idioma}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

//

function Detalles() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
         Detalles
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="titulo"
          label="Descripción"
          name="titulo"
          autoComplete="titulo"
          autoFocus
          value={CreateCourseForm.titulo}
          onChange={(e) => CreateCourseForm.setTitulo(e.target.value)}
        />
        <Textarea
          margin="normal"
          required
          fullWidth
          id="descripcion"
          label="Objetivos"
          name="descripcion"
          autoComplete="descripcion"
          value={CreateCourseForm.descripcion}
          onChange={(e) => CreateCourseForm.setDescripcion(e.target.value)}
        />


        <TextField
          margin="normal"
          required
          fullWidth
          id="descripcion"
          label="Descripción del curso"
          name="descripcion"
          autoComplete="descripcion"
          value={CreateCourseForm.descripcion}
          onChange={(e) => CreateCourseForm.setDescripcion(e.target.value)}
        />
      </Grid>
      </Grid>
  );
}

const CreateCourseForm = () => {

  

  const [showSection, setShowSection ] = useState(<InformacionBasica />);
  const handleSectionChange = (section) => {
    
    setShowSection(section);
  };




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

  // Estados nuevos que se deben incluir en el modelo de <<Curso>>
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [objetivos, setObjetivos] = useState("");
  const [nivelDeInstruccion, setNivelDeInstruccion] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [instrucciones, setInstrucciones] = useState("");
  const [capitulos, setCapitulos] = useState("");
  const [lecciones, setLecciones] = useState("");
  const [añadir, setAñadir] = useState("");
  const [evaluaciones, setEvaluaciones] = useState("");
  const [asignaciones, setAsignaciones] = useState("");
  // const [videoconferencias, setVideoconferencias] = useState("");
  const [ajustes, setAjustes] = useState("");
  const [calificaciones, setCalificaciones] = useState("");
  const [encuestas, setEncuestas] = useState("");
  // const [videoconferencias, setVideoconferencias] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      console.log("Trying");
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
        alumnos: alumnos.split(",").map((alumno) => alumno.trim()), // Convert comma-separated string to array
      });
      alert("Curso registrado con éxito");
      console.log(response.data);

      navigate("/courses");
    } catch (err) {
      console.log("Que fue lo que paso ???");
      console.log(err.response.data);
      console.log(err);
      alert(`Error al registrar curso ${titulo}`);
    }
  };

  return (
    <Box component="form" sx={{}}>
      <Grid container spacing={2}>
        <Grid item   sx={{
          width: {
            xs: '100%', // 100% width when window width is less than 600px
            sm: 250, // 50% width when window width is more than 600px  
          }
        }}>
          <Paper>
          <SidebarCrearCurso onSectionChange={handleSectionChange} />
      
          </Paper>

          
        </Grid>
        <Grid item  sx={{
          width: {
            // xs: '100%', // 100% width when window width is less than 600px
            sx: '100%',
            sm: "calc(100% - 250px)" // 50% width when window width is more than 600px  
          }
        }} >
        <Typography variant="h63" sx={{ fontWeight: "Bold" }}>
              Nuevo curso
            </Typography>
            {showSection}
            {/* {showSection === 'InformacionBasica' && <InformacionBasica />}
      {showSection === 'Detalles' && <Detalles />} */}
          {/* <InformacionBasica /> */}
          </Grid>
        {/* <Grid item xs={12} md={6}>
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
            onChange={(e) =>
              setFechaDePublicacion(
                // e.target.value
                Date.now()
              )
            }
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
        </Grid> */}
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
