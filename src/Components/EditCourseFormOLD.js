import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Paper,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  ListItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";
import JoditEditor from "jodit-react";
import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
const categories = ["Categoria 1", "Categoria 2"];

// const formValuesDraftArray = {
//   titulo: "",
//   subtitulo: "",
//   descripcion: "",
//   requisitos: "",
//   categoria: "",
//   subcategoria: "",
//   idiomas: "",
//   contenido: "",
//   creditos: "",
//   horario: "",
//   examenes: "",
//   tests: "",
//   instructor: "",
//   fechaDePublicacion: Date.now(),
//   alumnos: "",
//   objetivos: "",
//   nivelDeInstruccion: "",
// };

function SidebarEditarCurso({ onSectionChange, formValues, setFormValues }) {
  // const [open, setOpen] = React.useState(true);

  const handleClick = (section) => {
    onSectionChange(section);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {/* <ListItemButton
        onClick={() =>
          handleClick(<InformacionBasica formValues={formValues} setFormValues={setFormValues} />
          )
        }
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Información básica" />
      </ListItemButton>
      <ListItemButton
        onClick={() =>
          handleClick(
            <Detalles formValues={formValues} setFormValues={setFormValues} />
          )
        }
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Detalles" />
      </ListItemButton>
      <ListItemButton
        onClick={() =>
          handleClick(
            <Contenido formValues={formValues} setFormValues={setFormValues} />
          )
        }
      >
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
     */}
      <ListItemButton onClick={() => onSectionChange('informacionBasica')}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Información básica" />
      </ListItemButton>
      <ListItemButton onClick={() => onSectionChange('detalles')}>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Detalles" />
      </ListItemButton>
      <ListItemButton onClick={() => onSectionChange('contenido')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Contenido" />
      </ListItemButton>
      {/* Agrega más secciones según sea necesario */}
      <ListItemButton onClick={() => onSectionChange('evaluaciones')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Evaluaciones" />
      </ListItemButton>
    </List>
  );
}
function InformacionBasica({ cursoId, formValues, setFormValues }) {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [lenguaje, setLenguaje] = useState("");

  // setTitulo(
  //   formValues.titulo || ""
  // )
  // setSubtitulo(
  //   formValues.subtitulo || ""
  // )

  // Sincroniza estados locales cuando formValues cambie
  useEffect(() => {
    setTitulo(formValues.titulo || "");
    setSubtitulo(formValues.subtitulo || "");
    setDescripcion(formValues.descripcion || "");
    setCategoria(formValues.categoria || "");
    setSubcategoria(formValues.subcategoria || "");
    setLenguaje(formValues.lenguaje || "");
  }, [formValues]);

  // Actualiza formValues cuando los estados locales cambien
  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      titulo,
      subtitulo,
      descripcion,
      categoria,
      subcategoria,
      lenguaje,
    }));
  }, [titulo, subtitulo, descripcion, categoria, subcategoria, lenguaje]);

  const guardarCurso = async ({ cursoId }) => {
    // const { titulo, subtitulo, descripcion, categoria, subcategoria, lenguaje } = formValues;
    console.log(
      "Guardando curso: ",
      titulo,
      subtitulo,
      descripcion,
      categoria,
      subcategoria,
      lenguaje,
      "Curso ID: ",
      cursoId
    );

    try {
      const response = await axios.put(
        "http://localhost:3001/api/cursos/" + cursoId,
        {
          titulo,
          subtitulo,
          descripcion,
          categoria,
          subcategoria,
          lenguaje,
        }
      );
      alert("Curso registrado con éxito");
      console.log(response.data);
    } catch (err) {
      console.log("Que fue lo que paso ???");
      console.log(err);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(event) => guardarCurso()}
        >
          Guardar curso 1 {cursoId}
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
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
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
              // value={formValues.categoria || ""}
              value={categoria}
              label="Categoría del curso"
              onChange={(e) => setCategoria(e.target.value)}
            >
              {["Categoria 1", "Categoria 2", "Categoria 3"].map(
                (categoria) => (
                  <MenuItem key={categoria} value={categoria}>
                    {categoria}
                  </MenuItem>
                )
              )}
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
              label="Subcategoría"
              onChange={(e) => setSubcategoria(e.target.value)}
            >
              {["Sub Categoria 1", "Sub Categoria 2", "Sub Categoria 3"].map(
                (subCategoria) => (
                  <MenuItem key={subCategoria} value={subCategoria}>
                    {subCategoria}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="lenguaje-label">Lenguaje</InputLabel>
            <Select
              labelId="Lenguaje-label"
              id="lenguaje"
              value={lenguaje}
              label="Lenguaje"
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
  const [descripcion, setDescripcion] = useState("");
  const [objetivos, setObjetivos] = useState("");
  const [nivelDeInstruccion, setNivelDeInstruccion] = useState("");
  const [requisitos, setRequisitos] = useState("");
  const [instrucciones, setInstrucciones] = useState("");

  // const handleUpdate = (event, field) => {
  //   let value;
  //   if (event && event.target) {
  //     value = event.target.value;
  //   } else {
  //     value = event;
  //   }
  //   setFormValues({
  //     ...formValues,
  //     [field]: value
  //   });
  // };
  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 400,
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
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
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
            value={objetivos}
            onChange={(e) => setObjetivos(e.target.value)}
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
            value={nivelDeInstruccion}
            label="Nivel de instrucción"
            onChange={(e) => setNivelDeInstruccion(e.target.value)}
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
            value={requisitos}
            onChange={(e) => setRequisitos(e.target.value)}
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
      <Grid item xs={12} sx={{ mt: 1 }}>
        <JoditEditor
          fullWidth
          id="instrucciones"
          label="Instrucciones del curso"
          name="instrucciones"
          placeholder="Instrucciones del curso"
          ref={editor}
          config={config}
          value={instrucciones}
          onChange={(e) => setInstrucciones(e.target.value)}
          // onBlur={(e) => handleUpdate(e, "instrucciones")}
        />
      </Grid>
    </Grid>
  );
}
function Contenido({ formValues, setFormValues }) {
  const [capitulos, setCapitulos] = useState([]); // Como unidades
  const [nombreCapitulo, setNombreCapitulo] = useState("");
  const [lecciones, setLecciones] = useState(""); // Temas dentro de las unidades o capitulos
  const [nombreLeccion, setNombreLeccion] = useState("");
  const [leccionDescripcion, setLeccionDescripcion] = useState("");
  const [archivoLeccion, setArchivoLeccion] = useState({
    nombreArchivo: "",
    documentoArchivo: "", // Archivo a subir
  }); // Archivos a subir dentro de la leccion
  const [archivosAdjuntos, setArchivosAdjuntos] = useState({
    nombreArchivo: "",
    documentoArchivo: [""], // Archivos a subir
  }); // Archivos adjuntos a la leccion
  const [leccionGratis, setLeccionGratis] = useState(false); // Leccion gratis o no
  const [ajustes, setAjustes] = useState({
    completacionManual: false,
    completacionAlAbrir: false,
    completacionAutomatica: false,
    completacionPorTiempo: "", // Tiempo en segundos
  }); // Ajustes de la leccion

  // const handleUpdate = (event, field) => {
  //   const editorContent = event.target.value;
  //   setFormValues(prevValues => ({
  //     ...prevValues,
  //     [field]: editorContent
  //   }));
  // };
  const handleAddCapitulo = () => {
    console.log("Añadiendo Capitulo");
    console.log(" Nombre Capitulo antes: ", nombreCapitulo);

    setCapitulos([...capitulos, { nombreCapitulo, lecciones: [] }]);
    setNombreCapitulo("");

    console.log(" Nombre Capitulo despues: ", nombreCapitulo);
  };
  console.log(" Lista de Capitulos: ", capitulos);
  function ListaDeCapitulos() {
    const handleAddLeccion = (index) => {
      console.log("Añadiendo Lección");
      console.log(" Nombre Leccion antes: ", nombreLeccion);
      console.log(" Leccion Descripcion antes: ", leccionDescripcion);
      console.log(" Archivo Leccion antes: ", archivoLeccion);
      console.log(" Archivos Adjuntos antes: ", archivosAdjuntos);
      console.log(" Leccion Gratis antes: ", leccionGratis);
      console.log(" Ajustes antes: ", ajustes);
      const newCapitulos = [...capitulos];
      newCapitulos[index].lecciones.push({
        nombreLeccion,
        leccionDescripcion,
        archivoLeccion,
        archivosAdjuntos,
        leccionGratis,
        ajustes,
      });
      setCapitulos(newCapitulos);
      setNombreLeccion("");
      setLeccionDescripcion("");
      setArchivoLeccion({ nombreArchivo: "", documentoArchivo: "" });
      setArchivosAdjuntos({ nombreArchivo: "", documentoArchivo: "" });
      setLeccionGratis(false);
      setAjustes({
        completacionManual: false,
        completacionAlAbrir: false,
        completacionAutomatica: false,
        completacionPorTiempo: "",
      });
      console.log(" Nombre Leccion despues: ", nombreLeccion);
      console.log(" Leccion Descripcion despues: ", leccionDescripcion);
      console.log(" Archivo Leccion despues: ", archivoLeccion);
      console.log(" Archivos Adjuntos despues: ", archivosAdjuntos);
      console.log(" Leccion Gratis despues: ", leccionGratis);
      console.log(" Ajustes despues: ", ajustes);
    };

    return (
      <Grid container item xs={12} sx={{ my: 2 }}>
        {capitulos.map((capitulo, index) => (
          <Grid
            item
            container
            key={index}
            xs={12}
            sx={{ bgcolor: "lightgray", mb: 2, borderRadius: 2, boxShadow: 4 }}
          >
            <Grid
              item
              xs={12}
              sx={{
                bgcolor: "primary.main",
                p: 2,
                color: "primary.contrastText",
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Typography variant="Subtitle1">
                Capitulo: {capitulo.nombreCapitulo}
              </Typography>
            </Grid>
            <Grid
              className="leccionItem"
              item
              xs={12}
              sx={{ bgcolor: "#eeeeee" }}
            >
              <List component="div" disablePadding sx={{}}>
                {capitulo.lecciones.map((leccion, index) => (
                  <ListItemButton key={index}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={"Lección:" + leccion.nombreLeccion}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Grid>
            <Grid className="leccionAddButtons" item xs={12}>
              <ListItemButton key={index}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        endIcon={<AddIcon />}
                        onClick={() => handleAddLeccion(index)}
                        sx={{ width: "100%", height: 50, p: 2 }}
                      >
                        Añadir Lección
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        endIcon={<ExpandLessIcon />}
                        onClick={() => handleAddLeccion(index)}
                        sx={{ width: "100%", height: 50, p: 2 }}
                      >
                        Agregar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItemButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid item container>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
          Agregar Contenido
        </Typography>
      </Grid>

      <ListaDeCapitulos />

      <Grid item xs={12} sx={{}}>
        <Grid container item spacing={2}>
          <Grid item xs={9}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nombreCapitulo"
              label="Nombre del Capítulo"
              name="nombreCapitulo"
              value={nombreCapitulo}
              onChange={(e) => setNombreCapitulo(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleAddCapitulo}
            >
              Añadir Capítulo
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12}>
      
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombreLeccion"
        label="Nombre de la Lección"
        name="nombreLeccion"
        value={nombreLeccion}
        onChange={(e) => setNombreLeccion(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="leccionDescripcion"
        label="Descripción de la Lección"
        name="leccionDescripcion"
        value={leccionDescripcion}
        onChange={(e) => setLeccionDescripcion(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombreArchivo"
        label="Nombre del Archivo"
        name="nombreArchivo"
        value={archivoLeccion.nombreArchivo}
        onChange={(e) => setArchivoLeccion({ ...archivoLeccion, nombreArchivo: e.target.value })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="documentoArchivo"
        label="Documento del Archivo"
        name="documentoArchivo"
        type="file"
        onChange={(e) => setArchivoLeccion({ ...archivoLeccion, documentoArchivo: e.target.files[0] })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="nombreArchivoAdjunto"
        label="Nombre del Archivo Adjunto"
        name="nombreArchivoAdjunto"
        value={archivosAdjuntos.nombreArchivo}
        onChange={(e) => setArchivosAdjuntos({ ...archivosAdjuntos, nombreArchivo: e.target.value })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="documentoArchivoAdjunto"
        label="Documento del Archivo Adjunto"
        name="documentoArchivoAdjunto"
        type="file"
        onChange={(e) => setArchivosAdjuntos({ ...archivosAdjuntos, documentoArchivo: [...archivosAdjuntos.documentoArchivo, e.target.files[0]] })}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={leccionGratis}
            onChange={(e) => setLeccionGratis(e.target.checked)}
            name="leccionGratis"
            color="primary"
          />
        }
        label="Lección Gratis"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="completacion-label">Completación</InputLabel>
        <Select
          labelId="completacion-label"
          id="completacion"
          value={ajustes.completacionManual ? "manual" : ajustes.completacionAlAbrir ? "alAbrir" : ajustes.completacionAutomatica ? "automatica" : "porTiempo"}
          onChange={(e) => {
            const value = e.target.value;
            setAjustes({
              completacionManual: value === "manual",
              completacionAlAbrir: value === "alAbrir",
              completacionAutomatica: value === "automatica",
              completacionPorTiempo: value === "porTiempo" ? ajustes.completacionPorTiempo : ""
            });
          }}
        >
          <MenuItem value="manual">Manual</MenuItem>
          <MenuItem value="alAbrir">Al Abrir</MenuItem>
          <MenuItem value="automatica">Automática</MenuItem>
          <MenuItem value="porTiempo">Por Tiempo</MenuItem>
        </Select>
      </FormControl>
      {ajustes.completacionPorTiempo && (
        <TextField
          margin="normal"
          required
          fullWidth
          id="completacionPorTiempo"
          label="Tiempo de Completación (segundos)"
          name="completacionPorTiempo"
          value={ajustes.completacionPorTiempo}
          onChange={(e) => setAjustes({ ...ajustes, completacionPorTiempo: e.target.value })}
        />
      )}
    </Grid> */}
    </Grid>
  );
}

function TempFiller({ formValues, setFormValues }) {
  return (
    <Box>
      Hello World
      {/* {formValues} */}
      <br />
      {`${formValues.fechaDePublicacion}`}
      {console.log("Tempfiller: ", formValues)}
    </Box>
  );
}

const EditCourseForm = ({ cursoId, cursoName }) => {
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
    nivelDeInstruccion: "",
  });

  const [ShowSection, setShowSection] = useState();
  // <InformacionBasica formValues={formValues} setFormValues={setFormValues} />

  if (cursoId) {
    console.log("Id: ", cursoId);
  }

  const obtenerValues = async (cursoId) => {
    // const entries = Object.entries(formValues);
    const jsonString = JSON.stringify(formValues, null, 2);
    // console.log("Form Values: " + entries);

    console.log("Form Values: " + jsonString);
    console.log("Curso ID:" + cursoId);
    console.log("http://localhost:3001/api/cursos/" + cursoId);
    try {
      console.log("Obteniendo curso...");
      const response = await axios.get(
        "http://localhost:3001/api/cursos/" + cursoId
      );
      console.log(response.data);
      alert("Response Data >: " + response.data._id);

      console.log("Response Data" + response.data);
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        ...response.data,
      }));

      const jsonString = JSON.stringify(formValues, null, 2);
      console.log("Form Values 2: " + jsonString);

      return response.data;
    } catch (err) {
      console.log("Que fue lo que paso ???");

      console.log(err);
    }
  };

  const guardarCurso = async (
    event,
    formValuesDraft,
    setFormValuesDraft,
    section,
    statesCommented
  ) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("evento: ", event);
    console.log("name: ", section.titulo);
    // console.log("name: ", titulo);
    console.log("Section: ", section);
    console.log("Draft", formValuesDraft);
    console.log("Form Values Draft: ", formValues);
    console.log("States Commented: ", statesCommented);
  };

  const navigate = useNavigate();

  const handleSectionChange = (section) => {
    setShowSection(section);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inHandleSubmit: ", formValues);
  };

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

      navigate("/dashboard");
    } catch (err) {
      console.log("Que fue lo que paso ???");
      console.log(err.response.data);
      console.log(err);
      // alert(`Error al registrar curso ${titulo}`);
    }
  };
  // setShowSection(
  //   <InformacionBasica formValues={formValues} setFormValues={setFormValues} />
  // );
  // console.log("ShowSection 2:", ShowSection);
  useEffect(() => {
    // const cursoId = "tu_curso_id"; // Obtén el cursoId de las props o parámetros de ruta
    obtenerValues(cursoId);

    // setShowSection(
    //   <InformacionBasica formValues={formValues} setFormValues={setFormValues} />
    // );
  }, []);

  useEffect(
    (showSection) => {
      console.log("Check informacion Basica");

      // if (ShowSection !== undefined && ShowSection.type.name) {
      console.log(ShowSection);
      console.log(obtenerValues);
      console.log("Informacion First input value: ", InformacionBasica);

      if (ShowSection === undefined) {
        //  console.log(
        //   "Rendering Informacion Básica: ", formValues,
        //   "Informacion Basica has been rendered")

        //  } else {
        setShowSection(
          <InformacionBasica
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );

        // }
      }
    },
    [obtenerValues]
  );

  return (
    <Box component="form" sx={{}}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={3}
          sx={
            {
              // width: {
              //   xs: "100%", // 100% width when window width is less than 600px
              //   sm: 250, // 50% width when window width is more than 600px
              // },
            }
          }
        >
          <Paper>
            <SidebarEditarCurso
              onSectionChange={handleSectionChange}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={7}
          md={8}
          lg={9}
          // sx={{width: { sx: "100%", sm: "calc(100% - 250px)" }}}
        >
          <Typography variant="h63" sx={{ fontWeight: "Bold" }}>
            Editando curso: {cursoName} ID: {cursoId}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(event) =>
              guardarCurso(
                event,
                formValues,
                setFormValues,
                ShowSection
                // StatesCommented
              )
            }
          >
            Guardar curso
          </Button>

          {ShowSection}
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleRegister}
      >
        Crear nuevo curso
      </Button>
    </Box>
  );
};

export default EditCourseForm;
