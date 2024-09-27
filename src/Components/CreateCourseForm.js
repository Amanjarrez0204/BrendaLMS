import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TextField, Button, Box, Grid, Typography, FormControl, InputLabel, MenuItem, Select, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Paper, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { createEditor } from "slate";
// import { Slate, Editable, withReact } from "slate-react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JoditEditor from "jodit-react";
import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
// import { wait } from "@testing-library/user-event/dist/utils";
// import { Textarea } from "@mui/joy";

const categories = ["Categoria 1", "Categoria 2"];

function InformacionBasica ({ formValues, setFormValues  }) {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [lenguaje, setLenguaje] = useState("");


  // const handleUpdate = (event, field) => {
  //   const value = event.target.value;
  //   setFormValues(prevValues => ({
  //     ...prevValues,
  //     [field]: value
  //   }));
  // };
  const guardarCurso = async (
    // event, draft
  ) => {
    // event.preventDefault(); // Prevent default form submission behavior

    try {
      // console.log(draft);
      const response = await axios.post("http://localhost:3001/api/cursos/", {
        titulo,
        subtitulo,
        descripcion,
        categoria,
        subcategoria,
        lenguaje,
      
      });
      alert("Curso registrado con éxito");
      console.log(response.data);
      // window.location.href = "/cursos";
    } catch (err) {
      console.log("Que fue lo que paso ???");
      // console.log(err.response.data);
      console.log(err);
      // alert(`Error al registrar curso ${formValues.titulo}`);
    }
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(event) => guardarCurso(
            // event, formValues
          )}
        >
          Guardar curso 1
        </Button>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
          // autoComplete="Titulo del curso"
          // value={formValues.titulo}
          // onChange={(e) => handleUpdate(e, 'titulo')}
          // value= {formValues.titulo}
          // onChange={(e) => setFormValues(`titulo: ${e.target.value}`)}
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}

          // value={curp}
          // onChange={(e) => setCurp(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="subtitulo"
          label="Subtítulo del curso"
          name="subtitulo"
          value={subtitulo}
          onChange={(e) => setSubtitulo(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="descripcion"
          label="Descripción del curso"
          name="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="categoria-label">Categoría del curso</InputLabel>
            <Select
              labelId="categoria-label"
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {["Categoria 1", "Categoria 2", "Categoria 3"].map((categoria) => (
                <MenuItem key={categoria} value={categoria}>
                  {categoria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="subCategoria-label">Subcategoría</InputLabel>
            <Select
              labelId="subCategoria-label"
              id="sub-categoria"
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
            >
              {["Sub Categoria 1", "Sub Categoria 2", "Sub Categoria 3"].map((subCategoria) => (
                <MenuItem key={subCategoria} value={subCategoria}>
                  {subCategoria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="lenguaje-label">Lenguaje</InputLabel>
            <Select
              labelId="Lenguaje-label"
              id="sub-categoria"
              value={lenguaje}
              onChange={(e) => setLenguaje(e.target.value)}
            >
              {["Lenguaje 1", "Lenguaje 2", "Lenguaje 3"].map((lenguaje) => (
                <MenuItem key={lenguaje} value={lenguaje}>
                  {lenguaje}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Detalles({ formValues, setFormValues }) {
  const handleUpdate = (event, field) => {
    let value;
    if (event && event.target) {
      value = event.target.value;
    } else {
      value = event; 
    }
    setFormValues({
      ...formValues,
      [field]: value
    });
  };
  const editor = useRef(null);
  const config = {
      readonly: false,
      height: 400
    };


  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
          Detalles
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{}}>

        <JoditEditor
        required
        fullWidth
        id="descripcion"
        label="Descripción del curso"
        name="descripcion"
        placeholder="Descripcion del curso"
        ref={editor}
        config={config}
        onBlur={(e) => handleUpdate(e, "descripcion")}
        // value={formValues.descripcion}
            
      />

      </Grid>
      <Grid item xs={12}>

        <Box sx={{ display: "flex" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="objetivos"
            label="Escribe un objetivo"
            name="objetivos"
            autoComplete="Escribe un objetivo"
            // // value={formValues.objetivos}
            onChange={(e) => handleUpdate(e, "objetivos")}
          />

          <Button
            variant="contained"
            sx={{
              ml: 2,
              mt: 1.5,
              mb: 1,
              width: {
                xs: 100,
              },
            }}
            onClick={"handleAddObjetivo"}
          >
            Añadir
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>

        <FormControl fullWidth margin="none" required sx={{ mt: 2 }}>
          <InputLabel id="nivelDeInstruccion-label">
            Nivel de instrucción
          </InputLabel>
          <Select
            labelId="nivelDeInstruccion-label"
            id="nivelDeInstruccion"
            // value={formValues.nivelDeInstruccion}
            onChange={(e) => handleUpdate(e, "nivelDeInstruccion")}
            autoComplete="Nivel de instrucción"
          >
            {["Introductorio", "Intermedio", "Avanzado", "No aplica"].map(
              (nivelDeInstruccion) => (
                <MenuItem key={nivelDeInstruccion} value={nivelDeInstruccion}>
                  {nivelDeInstruccion}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
       </Grid>
       <Grid item xs={12}>
        
        <Box sx={{ display: "flex" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="requisitos"
            label="Escribe un requisito para el curso"
            name="requisitos"
            autoComplete="Escribe un requisito"
            // value={formValues.requisitos}
            onChange={(e) => handleUpdate(e, "requisitos")}
          />

          <Button
            variant="contained"
            sx={{
              ml: 2,
              mt: 1.5,
              mb: 1,
              width: {
                xs: 100,
              },
            }}
            onClick={"handleAddRequisito"}
          >
            Añadir
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}sx={{mt:1}}>

        <JoditEditor
        fullWidth
        id="instrucciones"
        label="Instrucciones del curso"
        name="instrucciones"
        placeholder="Instrucciones del curso"
        ref={editor}
        config={config}
        onBlur={(e) => handleUpdate(e, "instrucciones")}
        // value={formValues.instrucciones}

      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </Grid>
        
    </Grid>
  );
}
function Contenido({ formValues, setFormValues }) {

  const handleUpdate = (event, field) => {
    const editorContent = event.target.value;
    setFormValues(prevValues => ({
      ...prevValues,
      [field]: editorContent
    }));
  };

  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
          Agregar Contenido
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

          // value={formValues.titulo || ''}
          onChange={(e) => handleUpdate(e, "titulo")}
          

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


  
const CreateCourseForm = (draft ) => {

  const guardarCurso = async (event, draft) => {
    event.preventDefault(); // Prevent default form submission behavior
    // pull draftJson from state
    // const draft = draftJson;
    console.log(draft);
    console.log(draft[4]);
    console.log(event);
    console.log(draft.titulo);
    console.log(draft.subtitulo)
    // subtitulo: draft.subtitulo,
    // descripcion: draft.descripcion,
    // categoria: draft.categoria,
    // subcategoria: draft.subcategoria,
    // idiomas: draft.idiomas,
  
    

    try {
      console.log(draft);
      const response = await axios.post("http://localhost:3001/api/cursos/", {
        titulo: draft.titulo,
        subtitulo: draft.subtitulo,
        descripcion: draft.descripcion,
        categoria: draft.categoria,
        subcategoria: draft.subcategoria,
        idiomas: draft.idiomas,
      
      });
      alert("Curso registrado con éxito");
      console.log(response.data);
      // window.location.href = "/cursos";
    } catch (err) {
      console.log("Que fue lo que paso ???");
      // console.log(err.response.data);
      console.log(err);
      // alert(`Error al registrar curso ${formValues.titulo}`);
    }
  };

  const [formValues, setFormValues] = useState({
    titulo: "",
    subtitulo: "",
    descripcion: "",
    requisitos: "",
    categoria: "",
    subcategoria: "",
    idiomas: "",
    contenido: "",
    creditos: "",
    horario: "",
    examenes: "",
    tests: "",
    instructor: "",
    fechaDePublicacion: Date.now(),
    alumnos: "",
    objetivos: "",
    nivelDeInstruccion: ""
  });
  
  // console.log(formValues);

  const [showSection, setShowSection] = 
  useState(<InformacionBasica formValues={formValues} setFormValues={setFormValues}  />);
  const handleSectionChange = (section) => {
    setShowSection(section);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(formValues);
  };

  const [titulo, setTitulo] = useState("");
  // // const [subtitulo, setSubtitulo] = useState("");
  // const [descripcion, setDescripcion] = useState("");
  // const [contenido, setContenido] = useState("");
  // const [creditos, setCreditos] = useState("");
  // const [horario, setHorario] = useState("");
  // const [examenes, setExamenes] = useState("");
  // const [tests, setTests] = useState("");
  // const [instructor, setInstructor] = useState("");
  // const [fechaDePublicacion, setFechaDePublicacion] = useState(Date.now);
  // const [alumnos, setAlumnos] = useState("");

  // // Estados nuevos que se deben incluir en el modelo de <<Curso>>
  // const [categoria, setCategoria] = useState("");
  // const [subcategoria, setSubcategoria] = useState("");
  // const [idiomas, setIdiomas] = useState("");
  // const [subtitulo, setSubtitulo] = useState("");
  // const [objetivos, setObjetivos] = useState("");
  // const [nivelDeInstruccion, setNivelDeInstruccion] = useState("");
  // const [requisitos, setRequisitos] = useState("");
  // const [instrucciones, setInstrucciones] = useState("");
  // const [capitulos, setCapitulos] = useState("");
  // const [lecciones, setLecciones] = useState("");
  // const [añadir, setAñadir] = useState("");
  // const [evaluaciones, setEvaluaciones] = useState("");
  // const [asignaciones, setAsignaciones] = useState("");
  // // const [videoconferencias, setVideoconferencias] = useState("");
  // const [ajustes, setAjustes] = useState("");
  // const [calificaciones, setCalificaciones] = useState("");
  // const [encuestas, setEncuestas] = useState("");
  // // const [videoconferencias, setVideoconferencias] = useState("");

  const navigate = useNavigate();

  
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      console.log("Trying");
      const response = await axios.post("http://localhost:3001/api/cursos/", {
        titulo: formValues.titulo,
        subtitulo: formValues.subtitulo,
        descripcion: formValues.descripcion,
        categoria: formValues.categoria,
        subcategoria: formValues.subcategoria,
        idiomas: formValues.idiomas,
        // titulo,
        // subtitulo,
        // descripcion,
        // contenido,
        // creditos,
        // horario,
        // examenes,
        // tests,
        // instructor,
        // fecha_de_publicacion: fechaDePublicacion,
        // alumnos: alumnos.split(",").map((alumno) => alumno.trim()), // Convert comma-separated string to array
      });
      alert("Curso registrado con éxito");
      console.log(response.data);

      navigate("/courses");
    } catch (err) {
      console.log("Que fue lo que paso ???");
      console.log(err.response.data);
      console.log(err);
      // alert(`Error al registrar curso ${titulo}`);
    }
  };
  function SidebarCrearCurso({ onSectionChange }) {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = (section) => {
      onSectionChange(section);
    };
  
    return (
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
  
      >
        <ListItemButton onClick={() => handleClick(<InformacionBasica titulo={titulo} setTitulo={setTitulo} formValues={formValues}   setFormValues={setFormValues} />)}>


          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Información básica" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(<Detalles formValues={formValues} setFormValues={setFormValues}   />)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Detalles" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick(<Contenido formValues={formValues} setFormValues={setFormValues}    />)}>
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
        <ListItemButton></ListItemButton>
      </List>
    );
  }
  
  return (
    <Box component="form" sx={{}}>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            width: {
              xs: "100%", // 100% width when window width is less than 600px
              sm: 250, // 50% width when window width is more than 600px
            },
          }}
        >
          <Paper>
            <SidebarCrearCurso onSectionChange={handleSectionChange} />
          </Paper>
        </Grid>
        <Grid
          item
          sx={{
            width: {
              // xs: '100%', // 100% width when window width is less than 600px
              sx: "100%",
              sm: "calc(100% - 250px)", // 50% width when window width is more than 600px
            },
          }}
        >
          <Typography variant="h63" sx={{ fontWeight: "Bold" }}>
            Nuevo curso
          </Typography>
          <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={(event) => guardarCurso(event, formValues)}
      >
        Guardar curso
      </Button>
          {showSection}
 
        </Grid>
       
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        // onClick={handleSubmit}
        onClick={handleRegister}
        // Link to the courses creation page called crate-course
      >
        Crear nuevo curso
      </Button>
    </Box>
  );
};



export default CreateCourseForm;
