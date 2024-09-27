import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TextField, Button, Box, Grid, Typography, FormControl, InputLabel, MenuItem, Select, ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Paper, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JoditEditor from "jodit-react";
import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import { Textarea } from "@mui/joy";


const categories = ["Categoria 1", "Categoria 2"];

// const initialValue = [
//   {
//     type: "paragraph",
//     children: [{ text: "A line of text in a paragraph." }],
//   },
// ];
// // Define a React component renderer for our code blocks.
// const CodeElement = (props) => {
//   return (
//     <pre {...props.attributes}>
//       <code>{props.children}</code>
//     </pre>
//   );
// };
// // Define our app...
// const SlateTExtEditorApp = () => {
//   // Create a Slate editor object that won't change across renders.
//   const [editor] = useState(() => withReact(createEditor()));
//   return (
//     <Slate editor={editor} initialValue={initialValue}>
//       <Editable
//         onKeyDown={(event) => {
//           if (event.key === "&") {
//             event.preventDefault();
//             editor.insertText("and");
//           }
//         }}
//       />
//     </Slate>
//   );
// };


 function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

// const handleDraftJSON = ({ formValues, setFormValues  }) => {
//   const draftJson = {
//     titulo: formValues.titulo,
//     descripcion: formValues.descripcion,
//     instrucciones: formValues.instrucciones,
//     objetivos: formValues.objetivos,
//     nivelDeInstruccion: formValues.nivelDeInstruccion,
//     requisitos: formValues.requisitos,
//     // Add other fields as needed
//   };
  
//   console.log(draftJson);
//   }







function InformacionBasica ({ formValues, setFormValues, guardarCurso }) {

  
  const [draftJson, setDraftJson]  = useState({
    titulo: "",
    subtitulo: "",
    descripcion: "",
    categoria: "",
    subcategoria: "",
    idiomas: "",
  });
  
  // console.log(draftJson)
  function handleUpdate (event, field) {

    const editorContentJson = event.target.value;
    const editorContentForm = event.target.value;

    setDraftJson(prevValues => ({
      ...prevValues,
      [field]: editorContentJson
    }));

    setFormValues(prevValues => ({
      ...prevValues,
      [field]: editorContentForm
    }));
 
    //tranfer the values to create course form States

    setFormValues(`titulo: ${draftJson.titulo}`)
    console.log(  
      "Titulo: ", formValues.titulo,
      "Subtitulo: ", formValues.subtitulo,
      "Descripcion: ", formValues.descripcion,
      "Categoria: ", formValues.categoria,
      "Subcategoria: ", formValues.subcategoria,
      "Idiomas: ", formValues.idiomas,
    );
    console.log(
      "Draft Json titulo: ", draftJson.titulo,
      "Subtitulo: ", draftJson.subtitulo,
      "Descripcion: ", draftJson.descripcion,
      "Categoria: ", draftJson.categoria,
      "Subcategoria: ", draftJson.subcategoria,
      "Idiomas: ", draftJson.idiomas,
      );
      
  
  };
  
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
         value={draftJson.titulo}
         onChange={(e) => handleUpdate(e, "titulo")}

        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="subtitulo"
          label="Sub-Título del curso"
          name="subtitulo"
          autoComplete="subtitulo"
          autoFocus
          value={ draftJson.subtitulo }
          onChange={(e) => handleUpdate(e, "subtitulo")}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="descripcion"
          label="Descripción del curso"
          name="descripcion"
          autoComplete="descripcion"
          value={draftJson.descripcion}
          onChange={(e) => handleUpdate(e, "descripcion")}
        />
      </Grid>
      <Grid item sx={{ flex: "auto" }}>
        <Grid container spacing={2}>
         
          <Grid item xs={6}>
            <FormControl fullWidth margin="none" required sx={{ mt: 2 }}>
              <InputLabel id="categoria-label">Categoría del curso</InputLabel>
              <Select
                labelId="categoria-label"
                id="categoria"
                value={draftJson.categoria}
                onChange={(e) => handleUpdate(e, "categoria")}
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
           <Grid item xs={6}>
            <FormControl fullWidth margin="none" required sx={{ mt: 2 }}>
              <InputLabel id="subCategoria-label">
                Sub-categoría del curso
              </InputLabel>
              <Select
                labelId="subCategoria-label"
                id="sub-categoria"
                value={draftJson.subCategoria}
                onChange={(e) =>
                  handleUpdate(e, "subcategoria")
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
          <Grid item xs={6}>
            <FormControl fullWidth margin="none" required sx={{ mt: 2 }}>
              <InputLabel id="idioma-label">Idioma del curso</InputLabel>
              <Select
                labelId="idioma-label"
                id="idioma"
                value={draftJson.idioma}
                onChange={(e) => handleUpdate(e, "idiomas")}
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


function Detalles() {

  const editor = useRef(null);


  const [formValues, setFormValues] = useState({
    descripcion: "Descripción del curso",
    instrucciones: "Instrucciones del curso",
    objetivos: "Escribe un objetivo para el curso",
    nivelDeInstruccion: "Introductorio",
    requisitos: "Escribe un requisito para el curso",

    // Add more fields as needed
  });

  const config = {
    readonly: false,
    height: 400
  };
  const handleUpdate = (event, field) => {
    const editorContent = event

    setFormValues(prevValues => ({
      ...prevValues,
      [field]: editorContent
    }));
    
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
        value={formValues.descripcion}
            
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
            value={formValues.objetivos}
            onChange={(e) => handleUpdate(e.target.value, "objetivos")}
    // onBlur={(e) => handleUpdate(e.target.value, "objetivos")}
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
            // value={CreateCourseForm.nivelDeInstruccion}
            // onChange={(e) =>
            //   CreateCourseForm.setNivelDeInstruccion(e.target.value)
            // }
            value={formValues.nivelDeInstruccion}
            onChange={(e) => handleUpdate(e.target.value, "nivelDeInstruccion")}

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
            // value={CreateCourseForm.requisito}
            // onBlur={(e) => CreateCourseForm.setRequisito(e.target.value)}
            value={formValues.requisitos}
            onChange={(e) => handleUpdate(e.target.value, "requisitos")}
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
      {/* <ReactQuill
          theme="snow"
          
          required
          fullWidth
          id="instrucciones"
          label="Instrucciones del curso"
          name="instrucciones"
          placeholder="Instrucciones del curso"
          // onChange={(e) => CreateCourseForm.setDescripcion(e.target.value)}
          // onChange={(content, delta, source, editor) => CreateCourseForm.setDescripcion(editor.getText())}
        /> */}
        <JoditEditor
        fullWidth
        id="instrucciones"
        label="Instrucciones del curso"
        name="instrucciones"
        placeholder="Instrucciones del curso"
        ref={editor}
        // value={instrucciones}
        config={config}
        // onBlur={handleUpdate}
        // onChange={(e) => handleUpdate(e, "descripcion")}
        onBlur={(e) => handleUpdate(e, "instrucciones")}
        value={formValues.instrucciones}

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
          // value={titulo}
          // onChange={(e) => setTitulo(e.target.value)} 
          value={formValues.titulo || ''}
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

  const [showSection, setShowSection] = useState(<InformacionBasica formValues={formValues} setFormValues={setFormValues}  />);
  const handleSectionChange = (section) => {
    setShowSection(section);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formValues);
  };

  // const [titulo, setTitulo] = useState();
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
        <ListItemButton onClick={() => handleClick(<InformacionBasica formValues={formValues} setFormValues={setFormValues} guardarCurso={guardarCurso } />)}>

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
            <SidebarCrearCurso onSectionChange={handleSectionChange} formV={formValues} setFormV={setFormValues} />
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
          {/* {showSection === 'InformacionBasica' && <InformacionBasica />}
      {showSection === 'Detalles' && <Detalles />} */}
          {/* <InformacionBasica /> */}
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
